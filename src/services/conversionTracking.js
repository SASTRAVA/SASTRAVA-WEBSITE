/**
 * Conversion Tracking Service
 * Track user actions, conversions, and analytics events
 */

/**
 * Event types for conversion tracking
 */
export const CONVERSION_EVENTS = {
  // Page views
  PAGE_VIEW: 'page_view',
  
  // Service interactions
  SERVICE_VIEWED: 'service_viewed',
  SERVICE_DETAILS_OPENED: 'service_details_opened',
  COURSE_CARD_CLICKED: 'course_card_clicked',
  
  // Lead generation
  FORM_OPENED: 'form_opened',
  FORM_SUBMITTED: 'form_submitted',
  FORM_FIELD_FOCUSED: 'form_field_focused',
  FORM_FIELD_FILLED: 'form_field_filled',
  
  // Calls to action
  CTA_CLICKED: 'cta_clicked',
  BUTTON_CLICKED: 'button_clicked',
  LINK_CLICKED: 'link_clicked',
  
  // Contact actions
  PHONE_CALL: 'phone_call',
  EMAIL_SENT: 'email_sent',
  WHATSAPP_OPENED: 'whatsapp_opened',
  
  // Purchase/Enrollment
  CHECKOUT_STARTED: 'checkout_started',
  PAYMENT_INITIATED: 'payment_initiated',
  PAYMENT_COMPLETED: 'payment_completed',
  COURSE_ENROLLED: 'course_enrolled',
  
  // Social
  SOCIAL_SHARE: 'social_share',
  REVIEW_SUBMITTED: 'review_submitted'
};

/**
 * Track event to analytics
 */
export const trackEvent = (eventName, eventData = {}) => {
  try {
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventData);
    }

    // Google Tag Manager
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventData
      });
    }

    // Send to backend for conversion tracking
    sendConversionToBackend(eventName, eventData);

    console.log(`[Analytics] Event tracked: ${eventName}`, eventData);
  } catch (error) {
    console.error('[Analytics] Error tracking event:', error);
  }
};

/**
 * Track form submission
 */
export const trackFormSubmission = (formType, formData = {}) => {
  trackEvent(CONVERSION_EVENTS.FORM_SUBMITTED, {
    form_type: formType,
    form_name: formType,
    value: 0,
    currency: 'INR',
    ...formData
  });
};

/**
 * Track service view
 */
export const trackServiceView = (serviceId, serviceName, pillar) => {
  trackEvent(CONVERSION_EVENTS.SERVICE_VIEWED, {
    item_id: serviceId,
    item_name: serviceName,
    item_category: pillar,
    content_type: 'service'
  });
};

/**
 * Track CTA click
 */
export const trackCTAClick = (ctaText, ctaType, destination) => {
  trackEvent(CONVERSION_EVENTS.CTA_CLICKED, {
    cta_text: ctaText,
    cta_type: ctaType,
    destination: destination
  });
};

/**
 * Track course enrollment
 */
export const trackCourseEnrollment = (courseId, courseName, price) => {
  trackEvent(CONVERSION_EVENTS.COURSE_ENROLLED, {
    item_id: courseId,
    item_name: courseName,
    value: price,
    currency: 'INR',
    content_type: 'course'
  });
};

/**
 * Track phone call
 */
export const trackPhoneCall = (phoneNumber) => {
  trackEvent(CONVERSION_EVENTS.PHONE_CALL, {
    phone_number: phoneNumber
  });
};

/**
 * Track button click
 */
export const trackButtonClick = (buttonText, buttonLocation, buttonAction) => {
  trackEvent(CONVERSION_EVENTS.BUTTON_CLICKED, {
    button_text: buttonText,
    button_location: buttonLocation,
    button_action: buttonAction
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', {
    percent_scrolled: depth
  });
};

/**
 * Track video engagement
 */
export const trackVideoEngagement = (videoId, videoTitle, action, duration) => {
  trackEvent(`video_${action}`, {
    video_id: videoId,
    video_title: videoTitle,
    duration: duration
  });
};

/**
 * Track checkout process
 */
export const trackCheckout = (cartValue, cartItems) => {
  trackEvent(CONVERSION_EVENTS.CHECKOUT_STARTED, {
    value: cartValue,
    currency: 'INR',
    items: cartItems.length,
    cart_items: cartItems.map(item => ({
      item_id: item.id,
      item_name: item.name,
      price: item.price,
      quantity: item.quantity
    }))
  });
};

/**
 * Track payment completion
 */
export const trackPayment = (paymentId, amount, paymentMethod, orderData = {}) => {
  trackEvent(CONVERSION_EVENTS.PAYMENT_COMPLETED, {
    transaction_id: paymentId,
    value: amount,
    currency: 'INR',
    payment_method: paymentMethod,
    tax: 0,
    shipping: 0,
    ...orderData
  });
};

/**
 * Send conversion to backend
 */
const sendConversionToBackend = async (eventName, eventData) => {
  try {
    // This would connect to your backend API
    // For now, just logging
    if (typeof window !== 'undefined') {
      const response = await fetch('/api/analytics/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event: eventName,
          data: eventData,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: window.navigator.userAgent
        })
      });

      if (!response.ok) {
        console.warn('[Analytics] Backend tracking failed:', response.statusText);
      }
    }
  } catch (error) {
    console.warn('[Analytics] Could not send to backend:', error);
  }
};

/**
 * Initialize analytics tracking
 */
export const initializeAnalytics = (config = {}) => {
  if (typeof window === 'undefined') return;

  const {
    googleAnalyticsId = '',
    googleTagManagerId = '',
    hotjarId = ''
  } = config;

  // Initialize Google Analytics
  if (googleAnalyticsId) {
    window.gtag = window.gtag || function() {
      (window.dataLayer = window.dataLayer || []).push(arguments);
    };
  }

  // Initialize Google Tag Manager
  if (googleTagManagerId) {
    window.dataLayer = window.dataLayer || [];
  }

  console.log('[Analytics] Initialized');
};

export default {
  trackEvent,
  trackFormSubmission,
  trackServiceView,
  trackCTAClick,
  trackCourseEnrollment,
  trackPhoneCall,
  trackButtonClick,
  trackScrollDepth,
  trackVideoEngagement,
  trackCheckout,
  trackPayment,
  initializeAnalytics,
  CONVERSION_EVENTS
};
