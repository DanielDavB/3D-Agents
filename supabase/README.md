# Supabase · Treve Oficina

Proyecto: **Treve Oficina** (`lpwohzbminesrjjnjdqi`, us-east-1) · API: `https://lpwohzbminesrjjnjdqi.supabase.co`

- `migrations/`: esquema `treve` (RLS, cola de tareas, validación humana, Storage) y el ciclo con `pg_cron`.
- `functions/treve/`: el orquestador. `index.ts` enruta y ejecuta la cola; `lib/` es lógica pura
  (normalizar, conciliar, juicio, indicadores, reporte, cerebro) que también prueban `server/test/`.

## Desplegar (una vez)
1. **SQL Editor**: ejecuta `migrations/20261029000000_treve_orquestador.sql`
   (la primera migración ya está aplicada). Activa `pg_cron` y `pg_net` si el panel lo pide.
2. **Edge Function** con la CLI de Supabase, desde la raíz del repo:
   ```bash
   npx supabase login
   npx supabase functions deploy treve --project-ref lpwohzbminesrjjnjdqi --no-verify-jwt
   ```
   `--no-verify-jwt` porque la demo es pública con datos ficticios; la función limita a 30 ciclos por hora.
   Para exigir login, agrega el secret `TREVE_PUBLICO=0` (solo entran usuarios de `treve.miembros`).
3. **Edge Functions → Secrets** (opcionales; sin ellos usa reglas fijas y plantillas):
   - `OPENAI_API_KEY` (y `OPENAI_MODEL`, por defecto `gpt-4o-mini`)
   - `JEV_API_KEY` (y si tu cuenta usa otra cabecera: `JEV_AUTH_HEADER`, `JEV_AUTH_PREFIX`)
   - `SIM_URL` / `N8N_ALERTAS_URL` solo si cambian los webhooks de n8n
4. Abre el visualizador → **Ejecutar ciclo** → motor **Real**.

Nunca pongas keys en el repo ni en el chat.

## Probar en local (sin Supabase)
Con Postgres y Deno: aplica la primera migración a una base local, levanta un stub de Storage y corre
`index.ts` con `SUPABASE_DB_URL`, `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY`. Abre el visualizador con
`?backend=http://127.0.0.1:8000/`. Si n8n no responde, el orquestador usa el simulador local de respaldo.

## Acceso con Google (cuando haya datos reales)
1. **Settings → API → Exposed schemas**: agrega `treve`.
2. **Authentication → Providers → Google**: actívalo con un cliente OAuth de Google Cloud.
3. Date de alta como admin: `insert into treve.miembros (user_id, rol) select id, 'admin' from auth.users where email = '<tu correo>';`
