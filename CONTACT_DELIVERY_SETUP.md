# Contact delivery configuration

The contact endpoint stores inquiries in PostgreSQL first and returns HTTP 201 after the row is committed. When configured, Resend sends a team notification after storage. If PostgreSQL is unavailable, Resend acts as the fallback delivery path and the endpoint returns HTTP 202 only after Resend accepts the message. A notification failure after database storage is logged but does not turn a saved lead into a failed form submission.

Configure these variables in the Vercel project for Production and Preview:

- `POSTGRES_URL` and `POSTGRES_CA_CERT` for the primary database path.
- `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` for team notifications and email fallback. The sender domain must be verified in Resend.
- `CONTACT_TO_EMAIL` is optional; it defaults to `neeraj@sastrava.com`.
- `SITE_ORIGIN` is optional; it defaults to `https://sastrava.com`.

Keep credentials in Vercel's environment settings or a local untracked `.env.local` file. Do not commit them. If PostgreSQL is paused, restore it and confirm both database variables before relying on the primary path; the Resend fallback provides delivery while the database is unavailable.

After changing these settings, redeploy and submit a clearly identified test inquiry using a team-controlled email address. Confirm HTTP 201 and the database row, plus the notification if configured. If using the email-only fallback, confirm HTTP 202 and receipt. Remove the test record using the approved database access path.
