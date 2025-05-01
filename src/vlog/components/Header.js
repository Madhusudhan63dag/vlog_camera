import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll events for sticky header styling and active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Update header styling based on scroll position
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['hero', 'features', 'specs', 'how-it-works', 'applications', 'testimonials', 'faq'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in viewport (with some buffer)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when user clicks outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Navigation links matching the page flow
  const navLinks = [
    { id: 'features', label: 'Features' },
    { id: 'specs', label: 'Specifications' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'faq', label: 'FAQs' }
  ];
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center group">
            <img src={logo} className="w-20" />
          </a>
        
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`/#${link.id}`} 
                className={`px-3 py-2 rounded-md transition-colors duration-300 font-medium ${
                  activeSection === link.id 
                    ? 'text-blue-600 bg-blue-50' 
                    : isScrolled 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
                      : 'text-white hover:text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-3">
            <a href="/#contact" className={`font-medium px-4 py-2 rounded-md transition-colors ${
              isScrolled ? 'text-blue-600 hover:bg-blue-50' : 'text-white hover:bg-white hover:bg-opacity-10'
            }`}>
              Support
            </a>
            <a 
              href="/#product" 
              className="bg-blue-500 text-white hover:bg-blue-600 font-medium py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-md"
            >
              Order Now
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden mobile-menu-container">
            <button 
              type="button"
              aria-label="Toggle menu"
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-blue-900 hover:bg-blue-50' : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" aria-hidden="true">
            <div className="mobile-menu-container h-auto mt-16 bg-white rounded-b-lg shadow-xl border border-t-0 border-gray-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <nav className="flex flex-col">
                <a 
                  href="#hero"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 font-medium border-b border-gray-100"
                >
                  Home
                </a>
                {navLinks.map((link) => (
                  <a 
                    key={link.id}
                    href={`/#${link.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-3 px-4 font-medium border-b border-gray-100 ${
                      activeSection === link.id 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <a 
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 font-medium border-b border-gray-100"
                >
                  Support
                </a>
                <div className="p-4">
                  <a
                    href="/#product"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg block text-center"
                  >
                    Order Now
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;