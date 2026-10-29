-- Orquestador: ciclo programado y reintentos con pg_cron + pg_net, y columnas extra del almacén.
create extension if not exists pg_net;
create extension if not exists pg_cron;

alter table treve.ventas add column if not exists nombre text, add column if not exists canal text;

-- Despierta al orquestador (Edge Function `treve`) si hay tareas listas o atoradas.
create or replace function treve.tick()
returns void
language plpgsql security definer set search_path = ''
as $$
begin
  -- Tareas que quedaron "en curso" porque el worker se apagó: vuelven a la cola
  update treve.tareas set estado = 'pendiente'
   where estado = 'en_curso' and iniciada_at < now() - interval '3 minutes';
  if exists (select 1 from treve.tareas where estado = 'pendiente' and disponible_at <= now()) then
    perform net.http_post(
      url := 'https://lpwohzbminesrjjnjdqi.supabase.co/functions/v1/treve',
      body := '{"accion":"tick"}'::jsonb,
      headers := '{"Content-Type":"application/json"}'::jsonb
    );
  end if;
end;
$$;
revoke execute on function treve.tick() from public, anon, authenticated;

select cron.schedule('treve-tick', '* * * * *', $$ select treve.tick() $$);
