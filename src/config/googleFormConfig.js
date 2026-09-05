/**
 * Google Form Integration Configuration
 * ---------------------------------------------------------------
 * The Contact page "Send Message" form is intended to submit
 * directly to a Google Form connected to neeraj@sastrava.com.
 *
 * This project did not previously contain a Google Form
 * integration, so no form URL or field IDs have been invented.
 * To activate the integration, create a Google Form owned by
 * (or with responses forwarded to) neeraj@sastrava.com, then:
 *
 *   1. Open the Form -> Send -> Link icon, or view the live
 *      form's page source and find the <form action="...">
 *      URL. It looks like:
 *      https://docs.google.com/forms/d/e/FORM_ID/formResponse
 *   2. For each field, inspect the live form's HTML to find its
 *      `entry.XXXXXXXXX` name attribute and map it below.
 *   3. Paste both into the constants below.
 *
 * Until FORM_ACTION_URL is filled in, the Contact form will show
 * a clear "not yet connected" message instead of silently
 * pretending the message was delivered.
 */

export const GOOGLE_FORM_CONFIG = {
  // Paste the Google Form's "formResponse" action URL here.
  formActionUrl: '',

  // Map each Contact form field name to the Google Form's
  // corresponding entry ID (entry.XXXXXXXXX).
  entryIds: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  },

  // Contact this address if the Google Form needs to be
  // re-created or its ownership verified.
  ownerEmail: 'neeraj@sastrava.com',
};

export const isGoogleFormConfigured = () =>
  Boolean(GOOGLE_FORM_CONFIG.formActionUrl);

/**
 * Submits form data to the configured Google Form.
 * Google Forms' `formResponse` endpoint does not support CORS,
 * so the browser cannot read back a real success/failure status.
 * We only call this once formActionUrl is configured, and treat
 * a network-level failure (e.g. offline, blocked request) as an
 * error; otherwise we report the best-effort submission as sent.
 */
export const submitToGoogleForm = async (formData) => {
  const { formActionUrl, entryIds } = GOOGLE_FORM_CONFIG;

  if (!formActionUrl) {
    throw new Error('Google Form is not configured yet.');
  }

  const body = new FormData();
  Object.entries(entryIds).forEach(([fieldName, entryId]) => {
    if (entryId && formData[fieldName] !== undefined) {
      body.append(entryId, formData[fieldName]);
    }
  });

  // 'no-cors' is required for cross-origin Google Forms submission;
  // the response is opaque, so we can only detect network-level errors.
  await fetch(formActionUrl, {
    method: 'POST',
    mode: 'no-cors',
    body,
  });

  return { success: true };
};
