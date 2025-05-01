import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Footers = () => {
  return (
    <footer className="bg-black text-white py-12 sm:py-16 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FD5201]/10 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#36A8DA]/10 rounded-full blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="i&i Logo" className="h-20" />
              {/* <h3 className="text-lg sm:text-xl font-bold">i&i Portable Mini Projector</h3> */}
            </div>
            <p className="text-gray-500 mb-6">
              The ultimate 4G‑connected, 4K Ultra HD portable recorder for professionals and enthusiasts.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61575830090610" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-[#36A8DA] transition-colors">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="tps://www.instagram.com/myiandiofficial" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-[#FD5201] transition-colors">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://x.com/myiandiofficial" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-500 hover:text-[#36A8DA] transition-colors">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@myiandiofficial" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-500 hover:text-[#FD5201] transition-colors">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-0">
            <h4 className="font-semibold text-lg mb-4 sm:mb-5 text-[#36A8DA]">Product</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#features" className="text-gray-500 hover:text-white hover:underline decoration-[#FD5201] transition-colors">Features</a></li>
              <li><a href="#gallery" className="text-gray-500 hover:text-white hover:underline decoration-[#FD5201] transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-500 hover:text-white hover:underline decoration-[#FD5201] transition-colors">Reviews</a></li>
              <li><a href="#faq" className="text-gray-500 hover:text-white hover:underline decoration-[#FD5201] transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div className="mt-8 md:mt-0">
            <h4 className="font-semibold text-lg mb-4 sm:mb-5 text-[#FD5201]">Support</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#contact" className="text-gray-500 hover:text-white hover:underline decoration-[#36A8DA] transition-colors">Contact Us</a></li>
              <li><Link to="/privacy" className="text-gray-500 hover:text-white hover:underline decoration-[#36A8DA] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-500 hover:text-white hover:underline decoration-[#36A8DA] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 mt-10 sm:mt-12 pt-6 sm:pt-8 text-sm text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} I & I vlog camera. All rights reserved.</p>
          <div className="mt-3 sm:mt-4 space-x-3 sm:space-x-6 flex flex-wrap justify-center">
            <Link to="/privacy" className="text-gray-500 hover:text-[#36A8DA] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-[#FD5201] transition-colors">Terms of Service</Link>
            <Link to="/return" className="text-gray-500 hover:text-[#FD5201] transition-colors">Return Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;