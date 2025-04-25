import React, { useState } from 'react';

const FAQs = () => {
  // FAQ items data structure
  const faqItems = [
    {
      question: "How does the Wi-Fi 6 connectivity work?",
      answer: "The projector features built-in Wi-Fi 6 for faster and more stable internet connection. Once connected to your home network, you can access streaming services like Netflix, YouTube, and Prime Video directly from the projector without additional devices."
    },
    {
      question: "What's the maximum resolution supported by this projector?",
      answer: "The i&i Portable Mini Projector displays content at 1080P Full HD resolution and supports playback of content up to 4K. This ensures sharp, clear imagery whether you're watching movies, playing games, or giving presentations."
    },
    {
      question: "How does the Auto Keystone Correction feature work?",
      answer: "The projector automatically adjusts the image to create a perfect rectangular picture even when projected at an angle. It also adjusts the focal length based on the distance from the projection surface, making setup quick and hassle-free."
    },
    {
      question: "Is the projector suitable for outdoor use?",
      answer: "Yes! Weighing only 1.5 lbs, this ultra-lightweight projector is designed for both indoor and outdoor use. It's portable enough to take camping, to backyard movie nights, or on trips. The built-in battery allows for completely wireless operation."
    },
    {
      question: "How does the Bluetooth 5.1 functionality work?",
      answer: "The projector is equipped with Bluetooth 5.1 technology for faster and more stable audio synchronization. You can wirelessly connect Bluetooth speakers or headphones for an enhanced audio experience. Note that Bluetooth connectivity is specifically for audio transmission with audio devices."
    },
    {
      question: "What devices can I connect to the projector?",
      answer: "The projector supports multiple devices including HDMI, TV Stick, PS5, smartphones, and laptops for diverse entertainment and presentation needs. This versatile compatibility ensures you can enjoy content from virtually any source."
    },
    {
      question: "What is included with the warranty?",
      answer: "The i&i Portable Mini Projector comes with a 1-year warranty. If you encounter any issues during this period, you can contact customer support, and they'll resolve your problem as quickly as possible."
    }
  ];
  
  // State to track which FAQ item is open
  const [activeIndex, setActiveIndex] = useState(null);
  
  // Toggle function for showing/hiding answers
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-12 sm:py-16 bg-gradient-to-b from-[#050a10] to-[#0c1218] relative">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#FD5201]/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#36A8DA]/10 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-white">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FD5201] to-[#36A8DA] mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about our i&i Portable Mini Projector 
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4 sm:mb-6">
              <button
                className={`w-full text-left p-4 sm:p-5 rounded-lg flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#36A8DA] transition-colors ${
                  activeIndex === index 
                    ? 'bg-[#0a1622] text-white border border-[#36A8DA]/30' 
                    : 'bg-[#0a1622]/70 text-gray-300 hover:bg-[#FD5201]/10 border border-gray-800 hover:border-[#FD5201]/30'
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="font-medium text-sm sm:text-base pr-8">{item.question}</span>
                <svg 
                  className={`h-5 w-5 transform transition-transform ${
                    activeIndex === index ? 'rotate-180 text-[#FD5201]' : 'rotate-0 text-[#36A8DA]'
                  }`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a 1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index 
                    ? 'max-h-96 opacity-100 pt-4 px-4 sm:px-5 bg-[#0a1622]/50 rounded-b-lg border-l border-r border-b border-[#36A8DA]/20' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-400 text-sm sm:text-base">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-[#FD5201] to-[#FD5201]/90 hover:from-[#FD5201]/90 hover:to-[#FD5201] text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQs;