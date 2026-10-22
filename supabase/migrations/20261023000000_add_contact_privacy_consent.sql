-- Store proof of affirmative contact-form consent without changing existing leads.
ALTER TABLE public.contact_leads
  ADD COLUMN IF NOT EXISTS privacy_consent_at timestamptz;

COMMENT ON COLUMN public.contact_leads.privacy_consent_at IS
  'Server timestamp recorded when the submitter affirmatively consented to contact-form processing.';
