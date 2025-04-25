import ReactGA from 'react-ga4';

// Track button clicks
export const trackButtonClick = (buttonName, category = 'Button Interaction') => {
  ReactGA.event({
    category,
    action: 'click',
    label: buttonName,
  });
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track form submissions
export const trackFormSubmit = (formName, status = 'success') => {
  ReactGA.event({
    category: 'Form Interaction',
    action: 'submit',
    label: `${formName} - ${status}`,
  });
};

// Track custom events
export const trackEvent = (category, action, label, value) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};