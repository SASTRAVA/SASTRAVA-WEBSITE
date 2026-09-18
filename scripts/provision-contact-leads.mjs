import pg from 'pg';

const { Client } = pg;
const connectionString = process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL;
const ca = process.env.POSTGRES_CA_CERT;
if (!connectionString || !ca) throw new Error('POSTGRES_URL and POSTGRES_CA_CERT are required.');
const connectionUrl = new URL(connectionString);
connectionUrl.searchParams.delete('sslmode');
const client = new Client({ connectionString: connectionUrl.toString(), ssl: { ca, rejectUnauthorized: true } });
try {
  await client.connect();
  await client.query(`CREATE TABLE IF NOT EXISTS contact_leads (
    id UUID PRIMARY KEY,
    first_name VARCHAR(200) NOT NULL,
    last_name VARCHAR(200) NOT NULL,
    email VARCHAR(254) NOT NULL,
    phone VARCHAR(30),
    company VARCHAR(200),
    message TEXT NOT NULL,
    source_page VARCHAR(200),
    status VARCHAR(32) NOT NULL DEFAULT 'new',
    submitted_at TIMESTAMPTZ NOT NULL,
    received_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`);
  await client.query('CREATE INDEX IF NOT EXISTS contact_leads_received_at_idx ON contact_leads (received_at DESC)');
  await client.query('CREATE INDEX IF NOT EXISTS contact_leads_status_received_at_idx ON contact_leads (status, received_at DESC)');
  console.log('contact_leads table is ready.');
} finally {
  await client.end();
}