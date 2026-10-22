const consentStorageKey = 'sastrava-analytics-consent';
const defaultMeasurementId = 'G-744LFGFCXQ';

export const analyticsMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || defaultMeasurementId;

export function readAnalyticsConsent() {
  try {
    const value = window.localStorage.getItem(consentStorageKey);
    return value === 'accepted' || value === 'rejected' ? value : null;
  } catch {
    return null;
  }
}

function clearGoogleAnalyticsCookies() {
  if (typeof document === 'undefined') return;
  const cookieNames = document.cookie.split(';').map((cookie) => cookie.trim().split('=')[0]);
  const googleAnalyticsCookies = cookieNames.filter((name) => /^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name));
  const hostParts = window.location.hostname.split('.');
  const domains = [window.location.hostname];
  if (hostParts.length > 1) domains.push(`.${hostParts.slice(-2).join('.')}`);
  for (const name of googleAnalyticsCookies) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}; SameSite=Lax`;
  }
}

export function setAnalyticsConsent(value) {
  if (value !== 'accepted' && value !== 'rejected') return;
  try {
    window.localStorage.setItem(consentStorageKey, value);
  } catch {
    // Apply the choice for this page view even when browser storage is unavailable.
  }

  if (analyticsMeasurementId) {
    window[`ga-disable-${analyticsMeasurementId}`] = value !== 'accepted';
    if (typeof window.gtag === 'function') {
      const granted = value === 'accepted' ? 'granted' : 'denied';
      window.gtag('consent', 'update', {
        analytics_storage: granted,
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }
  }
  if (value === 'rejected') clearGoogleAnalyticsCookies();
  window.dispatchEvent(new CustomEvent('sastrava-analytics-consent-change', { detail: value }));
}
