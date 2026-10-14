-- Restrict contact lead records to trusted server-side database connections.
-- The website API writes with POSTGRES_URL and does not use the anon key.
ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

-- Remove any pre-existing policies so the table has no PostgREST policy path.
DO $$
DECLARE
  policy_record RECORD;
BEGIN
  FOR policy_record IN
    SELECT policyname
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'contact_leads'
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.contact_leads', policy_record.policyname);
  END LOOP;
END
$$;

-- Revoke API-role privileges; the Vercel API connects with the database owner
-- credentials and retains its server-side insert path. No client policies are added.
REVOKE ALL PRIVILEGES ON TABLE public.contact_leads FROM PUBLIC, anon, authenticated;
