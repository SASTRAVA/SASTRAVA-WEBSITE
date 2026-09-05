import { useState, useCallback } from 'react';
import { LEAD_TYPES, COURSE_ENROLLMENT_FORM_CONFIG, SERVICE_INQUIRY_FORM_CONFIG, INTERNSHIP_FORM_CONFIG, CONSULTATION_FORM_CONFIG, CONTACT_FORM_CONFIG } from '../services/leadTypes';

/**
 * useLeadForm Hook
 * Manages form modal state and configuration
 * Provides centralized form handling across the application
 */
export const useLeadForm = () => {
  const [openForm, setOpenForm] = useState(null); // null or form type
  const [formMetadata, setFormMetadata] = useState({});

  const openContactForm = useCallback((metadata = {}) => {
    setOpenForm(LEAD_TYPES.CONTACT_INQUIRY);
    setFormMetadata(metadata);
  }, []);

  const openEnrollmentForm = useCallback((courseId = '', metadata = {}) => {
    setOpenForm(LEAD_TYPES.COURSE_ENROLLMENT);
    setFormMetadata({ ...metadata, courseId });
  }, []);

  const openServiceInquiryForm = useCallback((serviceId = '', metadata = {}) => {
    setOpenForm(LEAD_TYPES.SERVICE_INQUIRY);
    setFormMetadata({ ...metadata, serviceId });
  }, []);

  const openConsultationForm = useCallback((consultationType = '', metadata = {}) => {
    setOpenForm(LEAD_TYPES.CONSULTATION_REQUEST);
    setFormMetadata({ ...metadata, consultationType });
  }, []);

  const openInternshipForm = useCallback((programId = '', metadata = {}) => {
    setOpenForm(LEAD_TYPES.INTERNSHIP_APPLICATION);
    setFormMetadata({ ...metadata, programId });
  }, []);

  const openFreelancingForm = useCallback((serviceId = '', metadata = {}) => {
    setOpenForm(LEAD_TYPES.FREELANCING_REQUEST);
    setFormMetadata({ ...metadata, serviceId });
  }, []);

  const closeForm = useCallback(() => {
    setOpenForm(null);
    setFormMetadata({});
  }, []);

  // Get form configuration based on type
  const getFormConfig = useCallback((formType) => {
    switch (formType) {
      case LEAD_TYPES.COURSE_ENROLLMENT:
        return COURSE_ENROLLMENT_FORM_CONFIG;
      case LEAD_TYPES.SERVICE_INQUIRY:
        return SERVICE_INQUIRY_FORM_CONFIG;
      case LEAD_TYPES.INTERNSHIP_APPLICATION:
        return INTERNSHIP_FORM_CONFIG;
      case LEAD_TYPES.CONSULTATION_REQUEST:
        return CONSULTATION_FORM_CONFIG;
      case LEAD_TYPES.CONTACT_INQUIRY:
      default:
        return CONTACT_FORM_CONFIG;
    }
  }, []);

  // Get form title based on type
  const getFormTitle = useCallback((formType) => {
    switch (formType) {
      case LEAD_TYPES.COURSE_ENROLLMENT:
        return 'Enroll in Course';
      case LEAD_TYPES.SERVICE_INQUIRY:
        return 'Inquiry About Services';
      case LEAD_TYPES.INTERNSHIP_APPLICATION:
        return 'Apply for Internship';
      case LEAD_TYPES.CONSULTATION_REQUEST:
        return 'Schedule Consultation';
      case LEAD_TYPES.FREELANCING_REQUEST:
        return 'Freelancing Request';
      case LEAD_TYPES.CONTACT_INQUIRY:
      default:
        return 'Get in Touch';
    }
  }, []);

  return {
    openForm,
    formMetadata,
    closeForm,
    openContactForm,
    openEnrollmentForm,
    openServiceInquiryForm,
    openConsultationForm,
    openInternshipForm,
    openFreelancingForm,
    getFormConfig,
    getFormTitle,
  };
};

/**
 * useScrollToSection Hook
 * Smooth scroll to sections with optional focus
 */
export const useScrollToSection = () => {
  return useCallback((sectionId, offset = 80) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);
};

/**
 * useFormFocus Hook
 * Manages focus and validation states for forms
 */
export const useFormFocus = (initialFields = {}) => {
  const [focused, setFocused] = useState(initialFields);
  const [touched, setTouched] = useState({});

  const handleFocus = useCallback((fieldName) => {
    setFocused(prev => ({ ...prev, [fieldName]: true }));
  }, []);

  const handleBlur = useCallback((fieldName) => {
    setFocused(prev => ({ ...prev, [fieldName]: false }));
    setTouched(prev => ({ ...prev, [fieldName]: true }));
  }, []);

  return {
    focused,
    touched,
    handleFocus,
    handleBlur,
  };
};

/**
 * useButtonAction Hook
 * Execute button actions with form context
 */
export const useButtonAction = (navigate = null) => {
  const {
    openContactForm,
    openEnrollmentForm,
    openServiceInquiryForm,
    openConsultationForm,
    openInternshipForm,
  } = useLeadForm();

  const executeAction = useCallback((action, config = {}) => {
    switch (action) {
      case 'openContact':
        openContactForm(config.metadata);
        break;
      case 'openEnrollment':
        openEnrollmentForm(config.courseId, config.metadata);
        break;
      case 'openServiceInquiry':
        openServiceInquiryForm(config.serviceId, config.metadata);
        break;
      case 'openConsultation':
        openConsultationForm(config.consultationType, config.metadata);
        break;
      case 'openInternship':
        openInternshipForm(config.programId, config.metadata);
        break;
      case 'navigate':
        if (navigate) navigate(config.path);
        break;
      case 'scroll':
        scrollToSection(config.sectionId);
        break;
      case 'email':
        window.location.href = `mailto:${config.email}`;
        break;
      case 'phone':
        window.location.href = `tel:${config.phone}`;
        break;
      case 'whatsapp':
        const message = encodeURIComponent(config.message || 'Hi, I\'m interested in SASTRAVA\'s services.');
        window.open(`https://wa.me/${config.phone}?text=${message}`, '_blank');
        break;
      default:
        console.warn('Unknown action:', action);
    }
  }, [openContactForm, openEnrollmentForm, openServiceInquiryForm, openConsultationForm, openInternshipForm, navigate]);

  return { executeAction };
};

/**
 * Utility: Helper function for scroll
 */
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default useLeadForm;
