-- Treve · Oficina de agentes · esquema del MVP en Supabase
-- Todo vive en el esquema `treve` para no mezclarse con otras tablas del proyecto.
-- Las escrituras las hace el orquestador (Edge Functions con service_role, que ignora RLS);
-- los usuarios autenticados y autorizados (treve.miembros) solo leen y validan hallazgos.

create schema if not exists treve;
grant usage on schema treve to authenticated, service_role;

-- ---------- Acceso ----------
create table treve.miembros (
  user_id uuid primary key references auth.users (id) on delete cascade,
  rol text not null default 'lector' check (rol in ('lector', 'revisor', 'admin')),
  created_at timestamptz not null default now()
);

create or replace function treve.es_miembro(roles text[] default array['lector', 'revisor', 'admin'])
returns boolean
language sql stable security definer set search_path = ''
as $$
  select exists (select 1 from treve.miembros m where m.user_id = (select auth.uid()) and m.rol = any (roles));
$$;

-- ---------- Corridas y cola de tareas del orquestador ----------
create table treve.corridas (
  id uuid primary key default gen_random_uuid(),
  periodo text not null check (periodo ~ '^\d{4}-(0[1-9]|1[0-2])$'),
  estado text not null default 'pendiente' check (estado in ('pendiente', 'en_curso', 'en_revision', 'terminada', 'error')),
  opciones jsonb not null default '{}',
  resumen jsonb,
  costo_ia jsonb not null default '{}',
  iniciada_por uuid references auth.users (id),
  created_at timestamptz not null default now(),
  terminada_at timestamptz
);
create index on treve.corridas (periodo, created_at desc);

create table treve.tareas (
  id bigint generated always as identity primary key,
  corrida_id uuid not null references treve.corridas (id) on delete cascade,
  agente text not null,
  paso text not null,
  estado text not null default 'pendiente' check (estado in ('pendiente', 'en_curso', 'hecha', 'error', 'cancelada')),
  depende_de bigint[] not null default '{}',
  intentos int not null default 0,
  max_intentos int not null default 3,
  entrada jsonb not null default '{}',
  salida jsonb,
  error text,
  disponible_at timestamptz not null default now(),
  iniciada_at timestamptz,
  terminada_at timestamptz,
  created_at timestamptz not null default now()
);
create index on treve.tareas (estado, disponible_at);
create index on treve.tareas (corrida_id);

-- Toma la siguiente tarea lista (sin dependencias pendientes) de forma atómica.
create or replace function treve.tomar_tarea()
returns treve.tareas
language plpgsql security definer set search_path = ''
as $$
declare t treve.tareas;
begin
  select * into t from treve.tareas x
  where x.estado = 'pendiente' and x.disponible_at <= now()
    and not exists (
      select 1 from treve.tareas d where d.id = any (x.depende_de) and d.estado <> 'hecha'
    )
  order by x.id
  for update skip locked
  limit 1;
  if t.id is null then return null; end if;
  update treve.tareas set estado = 'en_curso', intentos = intentos + 1, iniciada_at = now()
  where id = t.id returning * into t;
  return t;
end;
$$;
revoke execute on function treve.tomar_tarea() from public, anon, authenticated;
grant execute on function treve.tomar_tarea() to service_role;

-- ---------- Bitácora / eventos (alimenta el visualizador 3D por Realtime) ----------
create table treve.eventos (
  id bigint generated always as identity primary key,
  corrida_id uuid references treve.corridas (id) on delete cascade,
  tarea_id bigint references treve.tareas (id) on delete set null,
  de text not null,
  para text,
  tipo text not null,
  mensaje text not null,
  datos jsonb not null default '{}',
  created_at timestamptz not null default now()
);
create index on treve.eventos (corrida_id, id);

-- ---------- Archivos crudos y generados (contenido en Storage, bucket treve-archivos) ----------
create table treve.archivos (
  id uuid primary key default gen_random_uuid(),
  corrida_id uuid not null references treve.corridas (id) on delete cascade,
  fuente text not null check (fuente in ('monday', 'compaq', 'esfera', 'bancos', 'reporte', 'consolidado')),
  nombre text not null,
  storage_path text not null unique,
  formato text not null check (formato in ('json', 'csv', 'xlsx')),
  filas int,
  columnas text[],
  sha256 text,
  created_at timestamptz not null default now()
);

-- ---------- Memoria: mapeos de columnas y alias de clientes ----------
create table treve.mapeos (
  id bigint generated always as identity primary key,
  fuente text not null,
  firma text not null,              -- columnas originales ordenadas, unidas por '|'
  mapeo jsonb not null,             -- { "columna original": "campo canónico" }
  origen text not null default 'regla' check (origen in ('regla', 'ia', 'humano')),
  aprobado boolean not null default false,
  created_at timestamptz not null default now(),
  unique (fuente, firma)
);

create table treve.clientes (
  id text primary key,              -- id canónico interno (p. ej. C01)
  nombre text not null,
  rfc text,
  created_at timestamptz not null default now()
);

create table treve.clientes_alias (
  sistema text not null check (sistema in ('monday', 'compaq', 'bancos')),
  alias text not null,
  cliente_id text not null references treve.clientes (id) on delete cascade,
  origen text not null default 'regla' check (origen in ('regla', 'ia', 'humano')),
  confianza numeric,
  primary key (sistema, alias)
);

-- ---------- Almacén normalizado por corrida ----------
create table treve.ventas (
  corrida_id uuid not null references treve.corridas (id) on delete cascade,
  deal_id text not null,
  cliente_alias text not null,
  cliente_id text references treve.clientes (id),
  etapa text not null,
  monto numeric(14, 2) not null,
  fecha_cierre date,
  vendedor text,
  primary key (corrida_id, deal_id)
);

create table treve.facturas (
  corrida_id uuid not null references treve.corridas (id) on delete cascade,
  folio text not null,
  fecha date not null,
  rfc text,
  cliente_alias text not null,
  cliente_id text references treve.clientes (id),
  subtotal numeric(14, 2) not null,
  iva numeric(14, 2) not null,
  total numeric(14, 2) not null,
  estatus text not null check (estatus in ('Pagada', 'Pendiente', 'Cancelada')),
  fecha_pago date,
  deal_id text,
  primary key (corrida_id, folio)
);

create table treve.nomina (
  corrida_id uuid not null references treve.corridas (id) on delete cascade,
  empleado text not null,
  nombre text not null,
  departamento text,
  quincena text not null,
  percepciones numeric(14, 2) not null,
  deducciones numeric(14, 2) not null,
  neto numeric(14, 2) not null,
  primary key (corrida_id, empleado, quincena)
);

create table treve.movimientos (
  corrida_id uuid not null references treve.corridas (id) on delete cascade,
  linea int not null,
  fecha date not null,
  concepto text not null,
  referencia text,
  cargo numeric(14, 2),
  abono numeric(14, 2),
  saldo numeric(14, 2),
  folio text,                       -- factura a la que se concilió, si aplica
  primary key (corrida_id, linea)
);

-- ---------- Hallazgos (discrepancias) y validación humana ----------
create table treve.hallazgos (
  id uuid primary key default gen_random_uuid(),
  corrida_id uuid not null references treve.corridas (id) on delete cascade,
  tipo text not null,
  severidad text not null default 'media' check (severidad in ('baja', 'media', 'alta')),
  descripcion text not null,
  monto numeric(14, 2),
  referencia jsonb not null default '{}',
  evidencia jsonb not null default '{}',
  decision jsonb,                   -- respuesta de JEV: choice, confidence, probabilities
  estado text not null default 'abierto' check (estado in ('abierto', 'en_revision', 'confirmado', 'descartado')),
  resuelto_por uuid references auth.users (id),
  resuelto_at timestamptz,
  nota text,
  created_at timestamptz not null default now()
);
create index on treve.hallazgos (corrida_id, estado);

-- Validación humana: solo revisores/admin, y solo sobre hallazgos en revisión o abiertos.
create or replace function treve.resolver_hallazgo(p_id uuid, p_estado text, p_nota text default null)
returns treve.hallazgos
language plpgsql security definer set search_path = ''
as $$
declare h treve.hallazgos;
begin
  if not treve.es_miembro(array['revisor', 'admin']) then
    raise exception 'sin permiso' using errcode = '42501';
  end if;
  if p_estado not in ('confirmado', 'descartado') then
    raise exception 'estado inválido';
  end if;
  update treve.hallazgos
     set estado = p_estado, nota = p_nota, resuelto_por = (select auth.uid()), resuelto_at = now()
   where id = p_id and estado in ('abierto', 'en_revision')
  returning * into h;
  if h.id is null then raise exception 'hallazgo no encontrado o ya resuelto'; end if;
  insert into treve.eventos (corrida_id, de, para, tipo, mensaje, datos)
  values (h.corrida_id, 'humano', 'orquestador', 'validacion',
          'Hallazgo ' || p_estado || ': ' || h.descripcion, jsonb_build_object('hallazgo_id', h.id));
  return h;
end;
$$;
revoke execute on function treve.resolver_hallazgo(uuid, text, text) from public, anon;
grant execute on function treve.resolver_hallazgo(uuid, text, text) to authenticated;

-- ---------- Indicadores calculados en código por el orquestador ----------
create table treve.indicadores (
  corrida_id uuid not null references treve.corridas (id) on delete cascade,
  clave text not null,
  valor numeric,
  detalle jsonb not null default '{}',
  primary key (corrida_id, clave)
);

-- ---------- Permisos y RLS: lectura solo para miembros ----------
grant select on all tables in schema treve to authenticated;
grant all on all tables in schema treve to service_role;
grant usage, select on all sequences in schema treve to service_role;

do $$
declare t text;
begin
  foreach t in array array['miembros', 'corridas', 'tareas', 'eventos', 'archivos', 'mapeos', 'clientes',
                           'clientes_alias', 'ventas', 'facturas', 'nomina', 'movimientos', 'hallazgos', 'indicadores']
  loop
    execute format('alter table treve.%I enable row level security', t);
    execute format('create policy "miembros leen" on treve.%I for select to authenticated using ((select treve.es_miembro()))', t);
  end loop;
end $$;

-- ---------- Realtime para el visualizador ----------
alter publication supabase_realtime add table treve.eventos, treve.corridas, treve.hallazgos;

-- ---------- Storage privado para archivos de fuentes y reportes ----------
insert into storage.buckets (id, name, public) values ('treve-archivos', 'treve-archivos', false)
on conflict (id) do nothing;

create policy "miembros leen archivos treve" on storage.objects for select to authenticated
  using (bucket_id = 'treve-archivos' and (select treve.es_miembro()));
