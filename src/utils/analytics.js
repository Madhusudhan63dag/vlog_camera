// Google Analytics utility functions
const TRACKING_ID = 'G-9E63ESZQ7Y'; // Replace with your actual Google Analytics tracking ID

// Initialize Google Analytics
export const initGA = () => {
  // Add Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`;
  
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${TRACKING_ID}', { 'send_page_view': false });
  `;
  
  document.head.appendChild(script1);
  document.head.appendChild(script2);
};

// Track page views
export const pageView = (path) => {
  if (!window.gtag) return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href
  });
};

// Track events
export const trackEvent = (category, action, label, value) => {
  if (!window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, buttonLocation) => {
  if (!window.gtag) return;
  window.gtag('event', 'click', {
    event_category: 'Button Interaction',
    event_label: buttonName,
    button_location: buttonLocation || 'Not specified'
  });
};

// Track form submissions
export const trackFormSubmit = (formName, formData) => {
  if (!window.gtag) return;
  window.gtag('event', 'form_submit', {
    event_category: 'Form Interaction',
    event_label: formName,
    form_location: formData?.location || 'Not specified'
  });
};