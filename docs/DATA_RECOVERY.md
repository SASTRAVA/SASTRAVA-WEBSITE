# Lead data recovery readiness

The Supabase project currently reports no database backups. Before using contact
leads for paid acquisition or automated follow-up, configure and test a recovery
path for the whole database, including `public.contact_leads`.

## Preferred setup

1. Enable an appropriate Supabase backup/PITR plan for the project's recovery
   point and retention requirements, then confirm the displayed backup status.
2. Keep schema changes in `supabase/migrations/` and apply them through a reviewed
   deployment process.
3. Perform a restore drill into a separate non-production project before relying
   on the backups.

Do not place raw lead exports in a public repository or unencrypted build
artifacts. An off-instance export destination must be private, encrypted, access
controlled, retention-limited, and explicitly approved before it is configured.
