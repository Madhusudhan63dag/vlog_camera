import React from 'react';

const MobileCallButton = () => {
  // You can change this phone number to your actual contact number
  const phoneNumber = "+919876543210";

  return (
    <div className="fixed bottom-0 left-0 w-full bg-brand-orange md:hidden z-50">
      <a 
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center py-3 text-white font-medium"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        Call Now
      </a>
    </div>
  );
};

export default MobileCallButton;