/**
 * Business Positioning Service
 * Logic for pillar positioning, service filtering, and business model operations
 */

import { ECOSYSTEM_PILLARS, SERVICE_HIERARCHY } from '../config/businessModel';
import { SERVICES_CATALOG } from '../config/servicesCatalog';

/**
 * Get pillar by identifier (name or ID)
 */
export const getPillarByIdentifier = (identifier) => {
  const pillarName = identifier.toUpperCase();
  return ECOSYSTEM_PILLARS[pillarName];
};

/**
 * Get all services for a pillar
 */
export const getServicesByPillar = (pillarId) => {
  const pillar = ECOSYSTEM_PILLARS[pillarId.toUpperCase()];
  if (!pillar) return [];
  return pillar.services;
};

/**
 * Get service details from catalog
 */
export const getServiceDetail = (pillarId, serviceId) => {
  const catalog = SERVICES_CATALOG[pillarId.toUpperCase()];
  if (!catalog) return null;
  
  return Object.values(catalog).find(
    service => service.id === serviceId
  );
};

/**
 * Filter services by category
 */
export const filterServicesByCategory = (pillarId, category) => {
  const catalog = SERVICES_CATALOG[pillarId.toUpperCase()];
  if (!catalog) return [];
  
  return Object.values(catalog).filter(
    service => service.category === category
  );
};

/**
 * Filter services by price range
 */
export const filterServicesByPrice = (pillarId, minPrice, maxPrice) => {
  const catalog = SERVICES_CATALOG[pillarId.toUpperCase()];
  if (!catalog) return [];
  
  return Object.values(catalog).filter(service => {
    const price = parseInt(service.price?.replace(/[^\d]/g, '') || '0');
    return price >= minPrice && price <= maxPrice;
  });
};

/**
 * Get similar services (from same or related pillars)
 */
export const getSimilarServices = (serviceId, limit = 3) => {
  const allServices = [];
  
  Object.values(SERVICES_CATALOG).forEach(pillarServices => {
    Object.values(pillarServices).forEach(service => {
      allServices.push(service);
    });
  });
  
  const currentService = allServices.find(s => s.id === serviceId);
  if (!currentService) return [];
  
  return allServices
    .filter(s => s.category === currentService.category && s.id !== serviceId)
    .slice(0, limit);
};

/**
 * Get service hierarchy for a pillar
 */
export const getServiceHierarchy = (pillarId) => {
  return SERVICE_HIERARCHY[pillarId.toLowerCase()];
};

/**
 * Get all pillars with their metadata
 */
export const getAllPillars = () => {
  return Object.values(ECOSYSTEM_PILLARS);
};

/**
 * Get pillar color (primary, light, or dark)
 */
export const getPillarColor = (pillarId, type = 'primary') => {
  const pillar = ECOSYSTEM_PILLARS[pillarId.toUpperCase()];
  if (!pillar) return '#000000';
  return pillar.color[type] || pillar.color.primary;
};

/**
 * Create service bundles (combinations of services)
 */
export const createServiceBundle = (serviceIds) => {
  const services = [];
  let totalPrice = 0;
  let savings = 0;
  
  serviceIds.forEach(serviceId => {
    Object.values(SERVICES_CATALOG).forEach(pillarServices => {
      const service = Object.values(pillarServices).find(s => s.id === serviceId);
      if (service) {
        services.push(service);
        // Parse price (assuming format like "₹15,000")
        const price = parseInt(service.price?.replace(/[^\d]/g, '') || '0');
        totalPrice += price;
      }
    });
  });
  
  // Apply 10% bundle discount
  savings = Math.round(totalPrice * 0.1);
  const bundlePrice = totalPrice - savings;
  
  return {
    services,
    totalPrice,
    bundlePrice,
    savings,
    discount: '10%'
  };
};

/**
 * Get recommended services for user journey
 */
export const getRecommendedServices = (userType = 'student') => {
  const recommendations = {
    student: [
      SERVICES_CATALOG.LEARN.PYTHON_PROGRAMMING,
      SERVICES_CATALOG.LEARN.WEB_DEVELOPMENT,
      SERVICES_CATALOG.GROW.CONTENT_MARKETING
    ],
    business: [
      SERVICES_CATALOG.BUILD.CUSTOM_SOFTWARE_DEVELOPMENT,
      SERVICES_CATALOG.GROW.SOCIAL_MEDIA_MARKETING,
      SERVICES_CATALOG.SECURE.SECURITY_AUDITS
    ],
    entrepreneur: [
      SERVICES_CATALOG.LEARN.DIGITAL_MARKETING_FUNDAMENTALS,
      SERVICES_CATALOG.BUILD.ECOMMERCE_SOLUTIONS,
      SERVICES_CATALOG.GROW.BRAND_STRATEGY_POSITIONING
    ],
    enterprise: [
      SERVICES_CATALOG.BUILD.DEVOPS_INFRASTRUCTURE,
      SERVICES_CATALOG.SECURE.MANAGED_SECURITY_SERVICES,
      SERVICES_CATALOG.GROW.SOCIAL_MEDIA_MARKETING
    ]
  };
  
  return recommendations[userType] || recommendations.student;
};

/**
 * Get pillar positioning statement
 */
export const getPillarPositioning = (pillarId) => {
  const pillar = ECOSYSTEM_PILLARS[pillarId.toUpperCase()];
  if (!pillar) return '';
  
  return `${pillar.name}: ${pillar.description}`;
};

/**
 * Export all positioning functions
 */
export default {
  getPillarByIdentifier,
  getServicesByPillar,
  getServiceDetail,
  filterServicesByCategory,
  filterServicesByPrice,
  getSimilarServices,
  getServiceHierarchy,
  getAllPillars,
  getPillarColor,
  createServiceBundle,
  getRecommendedServices,
  getPillarPositioning
};
