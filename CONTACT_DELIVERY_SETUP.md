# Contact delivery configuration

The contact endpoint stores inquiries in PostgreSQL first. If PostgreSQL is unavailable, it can send the inquiry to the team through Resend instead. The endpoint only returns success when one of those delivery paths succeeds.

Configure these variables in the Vercel project for Production and Preview:

- `POSTGRES_URL` and `POSTGRES_CA_CERT` for the primary database path.
- `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` for the email fallback. The sender domain must be verified in Resend.
- `CONTACT_TO_EMAIL` is optional; it defaults to `neeraj@sastrava.com`.
- `SITE_ORIGIN` is optional; it defaults to `https://sastrava.com`.

Keep credentials in Vercel's environment settings or a local untracked `.env.local` file. Do not commit them. If PostgreSQL is paused, restore it and confirm both database variables before relying on the primary path; the Resend fallback provides delivery while the database is unavailable.

After changing these settings, redeploy and submit a clearly identified test inquiry using a team-controlled email address. Confirm that the inquiry is present in the database or received by the team, then remove the test record.
