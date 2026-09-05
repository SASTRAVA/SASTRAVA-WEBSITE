/**
 * Lead Management Types & Interfaces
 * Defines all data structures for lead collection across the platform
 */

export const LEAD_TYPES = {
  COURSE_ENROLLMENT: 'course_enrollment',
  SERVICE_INQUIRY: 'service_inquiry',
  CONTACT_INQUIRY: 'contact_inquiry',
  INTERNSHIP_APPLICATION: 'internship_application',
  CONSULTATION_REQUEST: 'consultation_request',
  FREELANCING_REQUEST: 'freelancing_request',
  CAREER_APPLICATION: 'career_application',
  GENERAL_INQUIRY: 'general_inquiry',
};

export const LEAD_STATUS = {
  NEW: 'new',
  CONTACTED: 'contacted',
  INTERESTED: 'interested',
  QUALIFIED: 'qualified',
  REJECTED: 'rejected',
  ENROLLED: 'enrolled',
  COMPLETED: 'completed',
};

export const SERVICES = [
  'Education & Training',
  'Cybersecurity Services',
  'Artificial Intelligence Solutions',
  'Research & Development',
  'Digital Marketing Services',
  'Software Development',
  'Product Development',
  'Business Consulting',
  'Internship Programs',
  'Industry Projects',
  'Freelancing Services',
  'Content Creation',
  'Corporate Training',
  'Skill Development Programs',
  'Technology Consulting',
];

export const COURSES = [
  'Cybersecurity Essentials',
  'Penetration Testing Pro',
  'SOC & Threat Intelligence',
  'AI/ML Fundamentals',
  'Advanced AI Systems',
  'Data Science Professional',
  'Cloud Security',
  'Web Development',
  'Mobile App Development',
  'DevOps Engineering',
  'Digital Marketing Mastery',
  'Content Strategy & Creation',
];

export const CITIES = [
  'Bangalore',
  'Mumbai',
  'Delhi',
  'Pune',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Ahmedabad',
  'Jaipur',
  'Lucknow',
  'Surat',
  'Indore',
  'Chandigarh',
  'Kochi',
  'Visakhapatnam',
  'Other',
];

export const QUALIFICATIONS = [
  'High School (12th)',
  'Bachelor\'s (B.Tech, B.Sc, B.Com)',
  'Bachelor\'s Student (Pursuing)',
  'Master\'s (M.Tech, M.Sc, MBA)',
  'Master\'s Student (Pursuing)',
  'PhD',
  'Professional Certificate',
  'Self-Taught',
];

/**
 * Lead Data Structure
 * Complete schema for storing leads in database
 */
export const createLeadObject = ({
  // Basic Info
  firstName = '',
  lastName = '',
  email = '',
  phone = '',
  company = '',
  jobTitle = '',
  
  // Location
  city = '',
  country = 'India',
  
  // Lead Details
  leadType = LEAD_TYPES.GENERAL_INQUIRY,
  status = LEAD_STATUS.NEW,
  
  // Service/Course Info
  selectedService = '',
  selectedCourse = '',
  
  // Additional Info
  message = '',
  qualification = '',
  batchPreference = '',
  
  // Tracking
  sourcePage = '',
  sourceButton = '',
  campaign = '',
  
  // System Fields
  submittedAt = new Date().toISOString(),
  updatedAt = new Date().toISOString(),
  ipAddress = '',
  userAgent = '',
  referrer = '',
} = {}) => ({
  // Basic Info
  firstName,
  lastName,
  email,
  phone,
  company,
  jobTitle,
  
  // Location
  city,
  country,
  
  // Lead Details
  leadType,
  status,
  
  // Service/Course Info
  selectedService,
  selectedCourse,
  
  // Additional Info
  message,
  qualification,
  batchPreference,
  
  // Tracking
  sourcePage,
  sourceButton,
  campaign,
  
  // System Fields
  submittedAt,
  updatedAt,
  ipAddress,
  userAgent,
  referrer,
});

/**
 * Form Configuration Objects
 */
export const CONTACT_FORM_CONFIG = {
  fields: [
    { name: 'firstName', label: 'First Name', type: 'text', required: true },
    { name: 'lastName', label: 'Last Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: true },
    { name: 'company', label: 'Company', type: 'text', required: false },
    { name: 'message', label: 'Message', type: 'textarea', required: true },
  ],
};

export const COURSE_ENROLLMENT_FORM_CONFIG = {
  fields: [
    { name: 'firstName', label: 'First Name', type: 'text', required: true },
    { name: 'lastName', label: 'Last Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: true },
    { name: 'city', label: 'City', type: 'select', options: CITIES, required: true },
    { name: 'qualification', label: 'Qualification', type: 'select', options: QUALIFICATIONS, required: true },
    { name: 'selectedCourse', label: 'Course', type: 'select', options: COURSES, required: true },
    { name: 'batchPreference', label: 'Preferred Batch', type: 'text', required: false },
    { name: 'message', label: 'Additional Message', type: 'textarea', required: false },
  ],
};

export const SERVICE_INQUIRY_FORM_CONFIG = {
  fields: [
    { name: 'firstName', label: 'First Name', type: 'text', required: true },
    { name: 'lastName', label: 'Last Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: true },
    { name: 'company', label: 'Company Name', type: 'text', required: false },
    { name: 'selectedService', label: 'Service Interested In', type: 'select', options: SERVICES, required: true },
    { name: 'message', label: 'Tell us about your needs', type: 'textarea', required: true },
  ],
};

export const INTERNSHIP_FORM_CONFIG = {
  fields: [
    { name: 'firstName', label: 'First Name', type: 'text', required: true },
    { name: 'lastName', label: 'Last Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: true },
    { name: 'city', label: 'City', type: 'select', options: CITIES, required: true },
    { name: 'qualification', label: 'Current Qualification', type: 'select', options: QUALIFICATIONS, required: true },
    { name: 'selectedCourse', label: 'Interested In', type: 'select', options: COURSES, required: true },
    { name: 'message', label: 'Why you want to join?', type: 'textarea', required: false },
  ],
};

export const CONSULTATION_FORM_CONFIG = {
  fields: [
    { name: 'firstName', label: 'First Name', type: 'text', required: true },
    { name: 'lastName', label: 'Last Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: true },
    { name: 'company', label: 'Company Name', type: 'text', required: false },
    { name: 'jobTitle', label: 'Job Title', type: 'text', required: false },
    { name: 'selectedService', label: 'Consultation Type', type: 'select', options: SERVICES, required: true },
    { name: 'message', label: 'Describe your requirements', type: 'textarea', required: true },
  ],
};
