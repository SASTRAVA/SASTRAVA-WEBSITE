/**
 * useServiceFilter Hook
 * Filter and search services by various criteria
 */

import { useState, useMemo } from 'react';
import { SERVICES_CATALOG } from '../config/servicesCatalog';
import { PRICING_TIERS } from '../config/pricingTiers';

export const useServiceFilter = (initialPillar = 'LEARN') => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPillar, setSelectedPillar] = useState(initialPillar.toUpperCase());
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });
  const [sortBy, setSortBy] = useState('name'); // name, price, rating

  // Get all services from selected pillar
  const pillarServices = useMemo(() => {
    const catalog = SERVICES_CATALOG[selectedPillar];
    return catalog ? Object.values(catalog) : [];
  }, [selectedPillar]);

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let result = [...pillarServices];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(service =>
        service.name.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(service => service.category === selectedCategory);
    }

    // Apply price filter
    result = result.filter(service => {
      const price = parseInt(service.price?.replace(/[^\d]/g, '') || '0');
      return price >= priceRange.min && price <= priceRange.max;
    });

    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === 'price') {
        const priceA = parseInt(a.price?.replace(/[^\d]/g, '') || '0');
        const priceB = parseInt(b.price?.replace(/[^\d]/g, '') || '0');
        return priceA - priceB;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    return result;
  }, [pillarServices, searchQuery, selectedCategory, priceRange, sortBy]);

  // Get unique categories for current pillar
  const availableCategories = useMemo(() => {
    const categories = new Set();
    pillarServices.forEach(service => {
      if (service.category) categories.add(service.category);
    });
    return Array.from(categories).sort();
  }, [pillarServices]);

  // Reset filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setPriceRange({ min: 0, max: 1000000 });
    setSortBy('name');
  };

  return {
    // State
    searchQuery,
    selectedPillar,
    selectedCategory,
    priceRange,
    sortBy,
    
    // Results
    filteredServices,
    totalResults: filteredServices.length,
    availableCategories,
    
    // Setters
    setSearchQuery,
    setSelectedPillar,
    setSelectedCategory,
    setPriceRange,
    setSortBy,
    resetFilters
  };
};

export default useServiceFilter;
