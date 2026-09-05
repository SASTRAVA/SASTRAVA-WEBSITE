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

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

export const AUTH_ROLES = {
  HEAD_1: 'head-1',
  HEAD_2: 'head-2',
  HEAD_3: 'head-3',
  HEAD_4: 'head-4',
  EMPLOYEE: 'employee',
  STUDENT: 'student',
};

const SESSION_KEY = 'sastrava_session';

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
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ role, token: data.token }));
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
