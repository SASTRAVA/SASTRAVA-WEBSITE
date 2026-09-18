const MAX_BODY_BYTES = 20_000;

export default function cspReport(request, response) {
  if (!['POST', 'REPORT'].includes(request.method)) {
    response.setHeader('Allow', 'POST, REPORT');
    return response.status(405).end();
  }
  if (Number(request.headers['content-length'] || 0) > MAX_BODY_BYTES) return response.status(413).end();

  const report = request.body?.['csp-report'] ?? request.body ?? {};
  console.warn('CSP violation report', {
    blockedUri: typeof report['blocked-uri'] === 'string' ? report['blocked-uri'].slice(0, 500) : undefined,
    effectiveDirective: typeof report['effective-directive'] === 'string' ? report['effective-directive'].slice(0, 100) : undefined,
    violatedDirective: typeof report['violated-directive'] === 'string' ? report['violated-directive'].slice(0, 500) : undefined,
    documentUri: typeof report['document-uri'] === 'string' ? report['document-uri'].slice(0, 500) : undefined,
  });
  return response.status(204).end();
}