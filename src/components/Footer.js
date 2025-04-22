import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          {/* Logo and brief description */}
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <div className="flex items-center mb-2">
              <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
              {/* <span className="font-semibold">I & I vlog camera</span> */}
            </div>
            <p className="text-gray-400 text-sm">
              4K Ultra HD portable recorder for professionals
            </p>
          </div>
          
          {/* Quick links */}
          <div className="flex flex-wrap gap-8">
            <div>
              <h4 className="font-semibold text-sm mb-2 text-brand-orange">Product</h4>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#specs" className="text-gray-400 hover:text-white transition-colors">Specifications</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm mb-2 text-brand-orange">Support</h4>
              <ul className="space-y-1 text-xs sm:text-sm">
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-4 pt-4 text-xs text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} I & I vlog camera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;