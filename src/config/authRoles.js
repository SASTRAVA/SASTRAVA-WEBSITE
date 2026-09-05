import { AUTH_ROLES } from '../services/authService';

/**
 * Login Role Configuration
 * Central source of truth for every login role: its label, route,
 * group (head / employee / student), and accent color drawn from
 * the existing SASTRAVA design system (gold / peacock).
 */
export const LOGIN_ROLES = {
  [AUTH_ROLES.HEAD_1]: {
    label: 'Head 1',
    group: 'head',
    path: '/login/head-1',
    accent: 'gold',
  },
  [AUTH_ROLES.HEAD_2]: {
    label: 'Head 2',
    group: 'head',
    path: '/login/head-2',
    accent: 'gold',
  },
  [AUTH_ROLES.HEAD_3]: {
    label: 'Head 3',
    group: 'head',
    path: '/login/head-3',
    accent: 'gold',
  },
  [AUTH_ROLES.HEAD_4]: {
    label: 'Head 4',
    group: 'head',
    path: '/login/head-4',
    accent: 'gold',
  },
  [AUTH_ROLES.EMPLOYEE]: {
    label: 'Employee Login',
    group: 'employee',
    path: '/login/employee',
    accent: 'peacock',
  },
  [AUTH_ROLES.STUDENT]: {
    label: 'Student Login',
    group: 'student',
    path: '/login/student',
    accent: 'peacock',
  },
};

export const HEAD_ROLE_KEYS = [
  AUTH_ROLES.HEAD_1,
  AUTH_ROLES.HEAD_2,
  AUTH_ROLES.HEAD_3,
  AUTH_ROLES.HEAD_4,
];
