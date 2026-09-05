/**
 * Button Action Utilities
 * Centralized handlers for all CTA button actions across the platform
 */

export const BUTTON_ACTIONS = {
  // Navigation
  NAVIGATE: 'navigate',
  SCROLL: 'scroll',
  
  // Forms & Modals
  OPEN_MODAL: 'openModal',
  OPEN_FORM: 'openForm',
  OPEN_CONTACT: 'openContact',
  OPEN_ENROLLMENT: 'openEnrollment',
  OPEN_SERVICE_INQUIRY: 'openServiceInquiry',
  OPEN_CONSULTATION: 'openConsultation',
  OPEN_INTERNSHIP: 'openInternship',
  
  // External
  EXTERNAL_LINK: 'externalLink',
  EMAIL: 'email',
  PHONE: 'phone',
  WHATSAPP: 'whatsapp',
  
  // Download
  DOWNLOAD: 'download',
};

/**
 * Scroll to Section
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Navigate with React Router
 */
export const navigateTo = (path, navigate) => {
  navigate(path);
};

/**
 * Handle Email Links
 */
export const sendEmail = (email, subject = '', body = '') => {
  const mailtoLink = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}${body ? `&body=${encodeURIComponent(body)}` : ''}`;
  window.location.href = mailtoLink;
};

/**
 * Handle Phone Links
 */
export const callPhone = (phoneNumber) => {
  window.location.href = `tel:${phoneNumber}`;
};

/**
 * Handle WhatsApp
 */
export const openWhatsApp = (phoneNumber, message = '') => {
  const encoded = encodeURIComponent(message || 'Hi, I\'m interested in SASTRAVA\'s services.');
  window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
};

/**
 * Download File
 */
export const downloadFile = (url, filename) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Open External Link
 */
export const openExternalLink = (url, newWindow = true) => {
  if (newWindow) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = url;
  }
};

/**
 * Generic Button Action Handler
 */
export const executeButtonAction = (action, config = {}, navigate = null) => {
  switch (action) {
    case BUTTON_ACTIONS.NAVIGATE:
      if (navigate) {
        navigateTo(config.path, navigate);
      }
      break;

    case BUTTON_ACTIONS.SCROLL:
      scrollToSection(config.sectionId);
      break;

    case BUTTON_ACTIONS.OPEN_MODAL:
      if (config.onOpenModal) {
        config.onOpenModal();
      }
      break;

    case BUTTON_ACTIONS.OPEN_FORM:
    case BUTTON_ACTIONS.OPEN_CONTACT:
    case BUTTON_ACTIONS.OPEN_ENROLLMENT:
    case BUTTON_ACTIONS.OPEN_SERVICE_INQUIRY:
    case BUTTON_ACTIONS.OPEN_CONSULTATION:
    case BUTTON_ACTIONS.OPEN_INTERNSHIP:
      if (config.onOpenForm) {
        config.onOpenForm(action);
      }
      break;

    case BUTTON_ACTIONS.EMAIL:
      sendEmail(config.email, config.subject, config.body);
      break;

    case BUTTON_ACTIONS.PHONE:
      callPhone(config.phone);
      break;

    case BUTTON_ACTIONS.WHATSAPP:
      openWhatsApp(config.phone, config.message);
      break;

    case BUTTON_ACTIONS.EXTERNAL_LINK:
      openExternalLink(config.url, config.newWindow !== false);
      break;

    case BUTTON_ACTIONS.DOWNLOAD:
      downloadFile(config.url, config.filename);
      break;

    default:
      console.warn('Unknown button action:', action);
  }
};

/**
 * CTA Configuration Objects
 * Define button actions for common CTAs
 */
export const CTA_CONFIG = {
  GET_STARTED: {
    label: 'Get Started',
    action: 'openContact',
    variant: 'primary',
  },
  
  LEARN_MORE: {
    label: 'Learn More',
    action: 'openServiceInquiry',
    variant: 'secondary',
  },
  
  ENROLL_NOW: {
    label: 'Enroll Now',
    action: 'openEnrollment',
    variant: 'primary',
  },
  
  CONTACT_US: {
    label: 'Contact Us',
    action: 'openContact',
    variant: 'primary',
  },
  
  EXPLORE_SERVICES: {
    label: 'Explore Services',
    action: 'navigate',
    path: '/services',
    variant: 'secondary',
  },
  
  VIEW_COURSES: {
    label: 'View Courses',
    action: 'navigate',
    path: '/courses',
    variant: 'secondary',
  },
  
  APPLY_NOW: {
    label: 'Apply Now',
    action: 'openInternship',
    variant: 'primary',
  },
  
  SCHEDULE_CONSULTATION: {
    label: 'Schedule Consultation',
    action: 'openConsultation',
    variant: 'primary',
  },
  
  BOOK_DEMO: {
    label: 'Book Demo',
    action: 'openConsultation',
    variant: 'primary',
  },
  
  REQUEST_QUOTE: {
    label: 'Request Quote',
    action: 'openServiceInquiry',
    variant: 'secondary',
  },
  
  DOWNLOAD_BROCHURE: {
    label: 'Download Brochure',
    action: 'download',
    url: '/resources/brochure.pdf',
    variant: 'outline',
  },
  
  CONTACT_SUPPORT: {
    label: 'Contact Support',
    action: 'openContact',
    variant: 'secondary',
  },
};

/**
 * Create Button with Action
 * Higher-order config generator
 */
export const createButton = (baseConfig, overrides = {}) => ({
  ...baseConfig,
  ...overrides,
});
