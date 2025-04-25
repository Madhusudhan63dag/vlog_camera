import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageView } from '../utils/analytics';

/**
 * Component that tracks page views when the route changes
 * This component doesn't render anything visible
 */
const PageTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Send pageview with updated location
    pageView(location.pathname + location.search);
  }, [location]);

  return null; // This component doesn't render anything
};

export default PageTracker;