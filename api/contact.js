import { randomUUID } from 'node:crypto';
import pg from 'pg';

const { Pool } = pg;
const MAX_BODY_BYTES = 20_000;
const MAX_MESSAGE_LENGTH = 5_000;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let databasePool;

function json(response, status, body) {
  response.status(status).setHeader('Content-Type', 'application/json; charset=utf-8');
  response.setHeader('Cache-Control', 'no-store');
  response.json(body);
}

function clean(value, maxLength = 200) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function getDatabasePool() {
  if (!process.env.POSTGRES_URL || !process.env.POSTGRES_CA_CERT) return null;
  if (!databasePool) {
    const connectionUrl = new URL(process.env.POSTGRES_URL);
    connectionUrl.searchParams.delete('sslmode');
    databasePool = new Pool({
      connectionString: connectionUrl.toString(),
      max: 1,
      idleTimeoutMillis: 10_000,
      ssl: { ca: process.env.POSTGRES_CA_CERT, rejectUnauthorized: true },
    });
  }
  return databasePool;
}

export default async function contact(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return json(response, 405, { error: 'Method not allowed.' });
  }
  if (Number(request.headers['content-length'] || 0) > MAX_BODY_BYTES) return json(response, 413, { error: 'Request is too large.' });

  const allowedOrigin = process.env.SITE_ORIGIN || 'https://sastrava.com';
  const origin = request.headers.origin;
  if (origin && origin !== allowedOrigin) return json(response, 403, { error: 'Request origin is not allowed.' });

  const body = request.body && typeof request.body === 'object' ? request.body : {};
  if (clean(body.website)) return json(response, 202, { ok: true });

  const lead = {
    id: randomUUID(),
    firstName: clean(body.firstName),
    lastName: clean(body.lastName),
    email: clean(body.email, 254).toLowerCase(),
    phone: clean(body.phone, 30),
    company: clean(body.company),
    message: clean(body.message, MAX_MESSAGE_LENGTH),
    sourcePage: clean(body.sourcePage, 200),
    submittedAt: new Date().toISOString(),
  };
  if (!lead.firstName || !lead.lastName || !emailPattern.test(lead.email) || !lead.message) {
    return json(response, 400, { error: 'Please provide your name, a valid email address, and a message.' });
  }

  const pool = getDatabasePool();
  if (!pool) return json(response, 503, { error: 'The contact service is temporarily unavailable. Please email neeraj@sastrava.com.' });

  try {
    await pool.query(
      `INSERT INTO contact_leads (id, first_name, last_name, email, phone, company, message, source_page, submitted_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [lead.id, lead.firstName, lead.lastName, lead.email, lead.phone || null, lead.company || null, lead.message, lead.sourcePage || null, lead.submittedAt],
    );
    return json(response, 202, { ok: true, message: 'Thank you. We will be in touch shortly.' });
  } catch (error) {
    console.error('Contact storage failed', { message: error instanceof Error ? error.message : 'Unknown error' });
    return json(response, 503, { error: 'We could not send your message. Please email neeraj@sastrava.com.' });
  }
}