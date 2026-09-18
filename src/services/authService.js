/**
 * Authentication Service
 * ---------------------------------------------------------------
 * Clean, replaceable frontend authentication architecture.
 *
 * No authentication previously existed in this project, so this
 * service defines the integration point without any hardcoded
 * usernames, passwords, or fake session logic. Every login role
 * (Head 1-4, Employee, Student) posts to a role-scoped endpoint
 * on the same API host used by the lead service.
 *
 * Wire this up to a real backend by implementing:
 *   POST {API_BASE_URL}/auth/:role/login   { identifier, password }
 *     -> { token, user }  on success (2xx)
 *     -> { message }      on failure (4xx/5xx)
 *
 * Until that backend exists, calls will fail with a clear network
 * error rather than silently pretending to succeed.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
const GOOGLE_AUTH_URL = import.meta.env.VITE_GOOGLE_AUTH_URL || '';

export const AUTH_ROLES = {
  HEAD_1: 'head-1',
  HEAD_2: 'head-2',
  HEAD_3: 'head-3',
  HEAD_4: 'head-4',
  EMPLOYEE: 'employee',
  STUDENT: 'student',
};

const SESSION_KEY = 'sastrava_session';

const parseResponse = async (response) => {
  const data = await response.json().catch(() => ({}));
  return { response, data };
};

const authNetworkError = 'Unable to reach the authentication service. Please try again later.';

export const getGoogleAuthUrl = (returnTo = '/student-dashboard', course = '', role = AUTH_ROLES.STUDENT) => {
  if (!GOOGLE_AUTH_URL) return null;
  const url = new URL(GOOGLE_AUTH_URL, window.location.origin);
  url.searchParams.set('returnTo', returnTo);
  url.searchParams.set('role', role);
  if (course) url.searchParams.set('course', course);
  return url.toString();
};

export const requestPhoneOtp = async (phone) => {
  if (!phone?.trim()) return { success: false, message: 'Please enter your phone number.' };

  try {
    const result = await fetch(`${API_BASE_URL}/auth/student/phone/request-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: phone.trim() }),
    }).then(parseResponse);

    if (!result.response.ok) {
      return { success: false, message: result.data.message || 'We could not send a verification code.' };
    }
    return { success: true };
  } catch (error) {
    console.error('OTP request error:', error);
    return { success: false, message: authNetworkError };
  }
};

export const verifyPhoneOtp = async ({ phone, otp, name, email, returnTo, course }) => {
  if (!phone?.trim() || !otp?.trim()) {
    return { success: false, message: 'Phone number and verification code are required.' };
  }

  try {
    const result = await fetch(`${API_BASE_URL}/auth/student/phone/verify-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: phone.trim(), otp: otp.trim(), name, email, returnTo, course }),
    }).then(parseResponse);

    if (!result.response.ok || !result.data.token) {
      return { success: false, message: result.data.message || 'That verification code is invalid or expired.' };
    }

    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
      role: AUTH_ROLES.STUDENT,
      token: result.data.token,
      user: result.data.user,
    }));
    return { success: true, user: result.data.user };
  } catch (error) {
    console.error('OTP verification error:', error);
    return { success: false, message: authNetworkError };
  }
};

/**
 * Attempts to log in for a given role.
 * @param {string} role - one of AUTH_ROLES
 * @param {{identifier: string, password: string}} credentials
 */
export const login = async (role, credentials) => {
  if (!credentials.identifier?.trim() || !credentials.password) {
    return {
      success: false,
      message: 'Please enter both your ID/email and password.',
    };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/${role}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        success: false,
        message: data.message || 'Invalid credentials. Please try again.',
      };
    }

    if (data.token) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ role, token: data.token, user: data.user }));
    }

    return { success: true, user: data.user };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      message:
        'Unable to reach the authentication service. This login is not connected to a backend yet.',
    };
  }
};

export const logout = () => {
  sessionStorage.removeItem(SESSION_KEY);
};

export const getSession = () => {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const isAuthenticated = (role) => {
  const session = getSession();
  return Boolean(session && (!role || session.role === role));
};
