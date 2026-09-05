/**
 * useConversionTracking Hook
 * Track conversions and analytics events
 */

import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import {
  trackEvent,
  trackFormSubmission,
  trackServiceView,
  trackCTAClick,
  trackCourseEnrollment,
  trackPhoneCall,
  trackButtonClick,
  trackPayment,
  CONVERSION_EVENTS
} from '../services/conversionTracking';

export const useConversionTracking = () => {
  const location = useLocation();

  // Track page view
  useEffect(() => {
    trackEvent(CONVERSION_EVENTS.PAGE_VIEW, {
      page_path: location.pathname,
      page_title: document.title,
      timestamp: new Date().toISOString()
    });
  }, [location.pathname]);

  // Track form submission
  const trackFormSubmit = useCallback((formType, formData = {}) => {
    trackFormSubmission(formType, formData);
  }, []);

  // Track service view
  const trackServiceViewed = useCallback((serviceId, serviceName, pillar) => {
    trackServiceView(serviceId, serviceName, pillar);
  }, []);

  // Track CTA click
  const trackCTA = useCallback((ctaText, ctaType, destination) => {
    trackCTAClick(ctaText, ctaType, destination);
  }, []);

  // Track enrollment
  const trackEnrollment = useCallback((courseId, courseName, price) => {
    trackCourseEnrollment(courseId, courseName, price);
  }, []);

  // Track phone call
  const trackCall = useCallback((phoneNumber) => {
    trackPhoneCall(phoneNumber);
  }, []);

  // Track button click
  const trackButton = useCallback((buttonText, location, action) => {
    trackButtonClick(buttonText, location, action);
  }, []);

  // Track payment
  const trackPaymentEvent = useCallback((paymentId, amount, method, orderData) => {
    trackPayment(paymentId, amount, method, orderData);
  }, []);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (scrollPercent > 25 && scrollPercent < 35) {
        trackEvent('scroll_depth', { percent: 25 });
      } else if (scrollPercent > 50 && scrollPercent < 60) {
        trackEvent('scroll_depth', { percent: 50 });
      } else if (scrollPercent > 75 && scrollPercent < 85) {
        trackEvent('scroll_depth', { percent: 75 });
      } else if (scrollPercent > 95) {
        trackEvent('scroll_depth', { percent: 100 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    trackFormSubmit,
    trackServiceViewed,
    trackCTA,
    trackEnrollment,
    trackCall,
    trackButton,
    trackPaymentEvent,
    trackEvent
  };
};

export default useConversionTracking;
