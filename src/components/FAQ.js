import React, { useState } from 'react';

const FAQ = () => {
  // FAQ items data structure
  const faqItems = [
    {
      question: "How does the 4G connectivity work?",
      answer: "Our device accepts any standard 4G LTE SIM card. Once inserted, you can stream video directly from the device to platforms like YouTube, Facebook, or your own servers. The device can also make video calls and send SOS alerts with GPS location via 4G networks wherever there's coverage."
    },
    {
      question: "What's the maximum recording resolution and frame rate?",
      answer: "The device records at 4K Ultra HD (3840x2160) at 30fps, or 1080p Full HD at up to 60fps. All footage is encoded in H.264/H.265 for efficient storage while maintaining quality. The 180° rotatable lens allows you to easily frame your shots without moving the entire device."
    },
    {
      question: "How long does the battery last?",
      answer: "The standard edition includes an 8-hour battery life when recording at 1080p. The Pro Edition features an extended 12-hour battery life. Both versions include low-power standby modes and auto-save on power loss to protect your recordings."
    },
    {
      question: "Is the device waterproof or weatherproof?",
      answer: "The standard edition has an IP65 rating (dust-tight and protected against water jets). The Pro and Ultimate editions feature IP67 rating (dust-tight and can withstand immersion in water up to 1m for 30 minutes). All editions are designed to operate in temperatures from -10°C to 45°C."
    },
    {
      question: "How does the SOS emergency feature work?",
      answer: "The dedicated SOS button can be configured to send alerts with your GPS coordinates to pre-selected contacts when pressed for 3 seconds. This works wherever there's cellular coverage, making it ideal for remote workers, adventurers, and security personnel."
    },
    {
      question: "Can I access and manage recordings remotely?",
      answer: "Yes, through our mobile app (iOS/Android) or web dashboard, you can remotely access live feeds, manage stored recordings, adjust device settings, and receive notifications. The Pro and Ultimate editions also support remote management for multiple devices through a single dashboard."
    }
  ];
  
  // State to track which FAQ item is open
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Toggle function for showing/hiding answers
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our 4G portable recorder
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4 sm:mb-6">
              <button
                className={`w-full text-left p-4 sm:p-5 rounded-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  activeIndex === index 
                    ? 'bg-blue-50 text-blue-900' 
                    : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="font-medium text-sm sm:text-base pr-8">{item.question}</span>
                <svg 
                  className={`h-5 w-5 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  }`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index 
                    ? 'max-h-96 opacity-100 pt-4 px-4 sm:px-5' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 text-sm sm:text-base">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;