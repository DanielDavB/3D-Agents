# Supabase · Treve Oficina

Proyecto: **Treve Oficina** (`lpwohzbminesrjjnjdqi`, us-east-1) · API: `https://lpwohzbminesrjjnjdqi.supabase.co`

- `migrations/`: esquema `treve` (aplicado). Todas las tablas tienen RLS: solo leen los usuarios
  registrados en `treve.miembros`; escribe el orquestador con `service_role`.
- `functions/`: Edge Functions del orquestador y los agentes (Fase 2).

## Pasos manuales en el panel
1. **Settings → API → Exposed schemas**: agregar `treve`.
2. **Authentication → Providers → Google**: activar con un cliente OAuth de Google Cloud.
3. Después de tu primer inicio de sesión, darte de alta como admin (SQL Editor):
   `insert into treve.miembros (user_id, rol) select id, 'admin' from auth.users where email = '<tu correo>';`
4. **Edge Functions → Secrets**: `OPENAI_API_KEY`, `JEV_API_KEY`, `SIM_URL`, `SIM_TOKEN`.
   Nunca en el repo ni en el chat.
