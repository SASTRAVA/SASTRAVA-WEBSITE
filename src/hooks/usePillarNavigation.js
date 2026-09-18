/**
 * usePillarNavigation Hook
 * Manage pillar navigation and state
 */

import { useState, useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ECOSYSTEM_PILLARS } from '../config/businessModel';

export const usePillarNavigation = (defaultPillar = 'LEARN') => {
  const [activePillar, setActivePillar] = useState(defaultPillar.toUpperCase());
  const [pillarHistory, setPillarHistory] = useState([defaultPillar.toUpperCase()]);
  const location = useLocation();
  const navigate = useNavigate();

  // Get current pillar from URL
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const pillarPath = pathSegments[1];
    
    const pillarMap = {
      'learn': 'LEARN',
      'build': 'BUILD',
      'grow': 'GROW',
      'secure': 'SECURE'
    };

    if (pillarMap[pillarPath]) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- URL changes are an external synchronization source.
      setActivePillar(pillarMap[pillarPath]);
    }
  }, [location.pathname]);

  // Navigate to pillar
  const navigateToPillar = useCallback((pillarId) => {
    const pillarName = pillarId.toUpperCase();
    setActivePillar(pillarName);
    
    // Add to history
    setPillarHistory(prev => [...new Set([...prev, pillarName])]);
    
    // Navigate
    const pillarPath = pillarName.toLowerCase();
    navigate(`/${pillarPath}`);
  }, [navigate]);

  // Get pillar object
  const currentPillar = useCallback(() => {
    return ECOSYSTEM_PILLARS[activePillar] || ECOSYSTEM_PILLARS.LEARN;
  }, [activePillar]);

  // Get all pillars
  const getAllPillars = useCallback(() => {
    return Object.values(ECOSYSTEM_PILLARS);
  }, []);

  // Get pillar by ID
  const getPillarById = useCallback((pillarId) => {
    return ECOSYSTEM_PILLARS[pillarId.toUpperCase()];
  }, []);

  // Check if pillar is active
  const isPillarActive = useCallback((pillarId) => {
    return activePillar === pillarId.toUpperCase();
  }, [activePillar]);

  // Go to next pillar
  const goToNextPillar = useCallback(() => {
    const pillars = Object.keys(ECOSYSTEM_PILLARS);
    const currentIndex = pillars.indexOf(activePillar);
    const nextIndex = (currentIndex + 1) % pillars.length;
    navigateToPillar(pillars[nextIndex]);
  }, [activePillar, navigateToPillar]);

  // Go to previous pillar
  const goToPreviousPillar = useCallback(() => {
    const pillars = Object.keys(ECOSYSTEM_PILLARS);
    const currentIndex = pillars.indexOf(activePillar);
    const prevIndex = (currentIndex - 1 + pillars.length) % pillars.length;
    navigateToPillar(pillars[prevIndex]);
  }, [activePillar, navigateToPillar]);

  return {
    // State
    activePillar,
    pillarHistory,
    
    // Current pillar info
    currentPillar: currentPillar(),
    
    // Navigation
    navigateToPillar,
    goToNextPillar,
    goToPreviousPillar,
    
    // Query methods
    getAllPillars,
    getPillarById,
    isPillarActive
  };
};

export default usePillarNavigation;
