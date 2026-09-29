import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import contact from '../../api/contact.js';

const envKeys = ['POSTGRES_URL', 'POSTGRES_CA_CERT', 'RESEND_API_KEY', 'CONTACT_FROM_EMAIL', 'CONTACT_TO_EMAIL'];
const savedEnv = Object.fromEntries(envKeys.map((key) => [key, process.env[key]]));
const originalFetch = globalThis.fetch;

function resetEnvironment() {
  for (const key of envKeys) delete process.env[key];
}

function makeResponse() {
  return {
    headers: {},
    statusCode: 200,
    status(code) { this.statusCode = code; return this; },
    setHeader(name, value) { this.headers[name] = value; return this; },
    json(body) { this.body = body; return this; },
  };
}

const request = {
  method: 'POST',
  headers: { origin: 'https://sastrava.com', 'content-length': '120' },
  body: {
    firstName: 'Asha',
    lastName: 'Rao',
    email: 'asha@example.com',
    phone: '+91 98765 43210',
    company: 'Example Co',
    message: 'I would like to discuss a project.',
    sourcePage: '/contact',
  },
};

afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const key of envKeys) {
    if (savedEnv[key] === undefined) delete process.env[key];
    else process.env[key] = savedEnv[key];
  }
});

test('contact API sends the inquiry by email when database configuration is absent', async () => {
  resetEnvironment();
  process.env.RESEND_API_KEY = 'test-key';
  process.env.CONTACT_FROM_EMAIL = 'SASTRAVA <website@sastrava.com>';
  let emailRequest;
  globalThis.fetch = async (url, options) => {
    emailRequest = { url, options };
    return { ok: true, status: 200 };
  };

  const response = makeResponse();
  await contact(request, response);

  assert.equal(response.statusCode, 202);
  assert.equal(response.body.ok, true);
  assert.equal(emailRequest.url, 'https://api.resend.com/emails');
  assert.equal(emailRequest.options.headers.Authorization, 'Bearer test-key');
  const payload = JSON.parse(emailRequest.options.body);
  assert.deepEqual(payload.to, ['neeraj@sastrava.com']);
  assert.equal(payload.reply_to, 'asha@example.com');
  assert.match(payload.text, /I would like to discuss a project\./);
});

test('contact API shows a safe failure when database and email delivery are unavailable', async () => {
  resetEnvironment();
  const response = makeResponse();
  await contact(request, response);

  assert.equal(response.statusCode, 503);
  assert.match(response.body.error, /email neeraj@sastrava\.com/i);
});

test('contact API does not report success when the email fallback rejects the inquiry', async () => {
  resetEnvironment();
  process.env.RESEND_API_KEY = 'test-key';
  process.env.CONTACT_FROM_EMAIL = 'SASTRAVA <website@sastrava.com>';
  globalThis.fetch = async () => ({ ok: false, status: 500 });

  const response = makeResponse();
  await contact(request, response);

  assert.equal(response.statusCode, 503);
  assert.match(response.body.error, /email neeraj@sastrava\.com/i);
});

test('contact API rejects methods other than POST without sending email', async () => {
  resetEnvironment();
  let fetchCalled = false;
  globalThis.fetch = async () => { fetchCalled = true; };

  const response = makeResponse();
  await contact({ ...request, method: 'GET' }, response);

  assert.equal(response.statusCode, 405);
  assert.equal(response.headers.Allow, 'POST');
  assert.equal(fetchCalled, false);
});

test('contact API rejects cross-origin submissions', async () => {
  resetEnvironment();
  const response = makeResponse();
  await contact({ ...request, headers: { ...request.headers, origin: 'https://example.com' } }, response);

  assert.equal(response.statusCode, 403);
  assert.equal(response.body.error, 'Request origin is not allowed.');
});

test('contact API rejects oversized request bodies', async () => {
  resetEnvironment();
  const response = makeResponse();
  await contact({ ...request, headers: { ...request.headers, 'content-length': '20001' } }, response);

  assert.equal(response.statusCode, 413);
  assert.equal(response.body.error, 'Request is too large.');
});

test('contact API validates required fields before attempting delivery', async () => {
  resetEnvironment();
  let fetchCalled = false;
  globalThis.fetch = async () => { fetchCalled = true; };

  const response = makeResponse();
  await contact({ ...request, body: { ...request.body, email: 'invalid' } }, response);

  assert.equal(response.statusCode, 400);
  assert.equal(fetchCalled, false);
});

test('contact API acknowledges honeypot submissions without delivery', async () => {
  resetEnvironment();
  let fetchCalled = false;
  globalThis.fetch = async () => { fetchCalled = true; };

  const response = makeResponse();
  await contact({ ...request, body: { ...request.body, website: 'bot-filled' } }, response);

  assert.equal(response.statusCode, 202);
  assert.equal(response.body.ok, true);
  assert.equal(fetchCalled, false);
});
