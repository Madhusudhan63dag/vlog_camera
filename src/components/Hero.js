import React from 'react';
import hero from '../assets/hero.jpg'; // Assuming you have a hero image in your assets folder

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-black text-white py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-orange rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-orange rounded-full opacity-10 blur-xl"></div>
        <div className="absolute top-40 right-0 w-40 h-40 bg-brand-orange-light rounded-full opacity-5 blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <div className="inline-block mb-3 px-4 py-1 border-2 border-brand-orange rounded-full">
              <span className="text-brand-orange font-medium text-sm">The Ultimate Vlogging Experience</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Capture, Stream & Call <span className="text-brand-orange">Anywhere in 4K</span></h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0 text-gray-300">Ultimate 4G Portable Recorder with SOS Calling & 180° Lens—powered by a super‑long‑lasting battery for professionals and enthusiasts.</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="#product">
                <button className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-light text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
                  Order Now
                </button>
              </a>
              <a href="#specs">
                <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:border-brand-orange hover:text-brand-orange text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Learn More
                </button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 px-4 sm:px-8 md:px-0">
            <div className="relative">
              {/* Product image with trendy styling */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-64 sm:h-80 md:h-[26rem] w-full flex items-center justify-center shadow-2xl overflow-hidden border border-gray-700 p-4">
                <img src={hero} alt="Hero" className="w-full h-full" />
                
                {/* Glass-like highlight effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-brand-orange opacity-10 rounded-2xl"></div> */}
                
                {/* Geometric accent elements */}
                <div className="absolute -top-5 -right-5 w-20 h-20 sm:w-24 sm:h-24 bg-brand-orange rounded-full opacity-20"></div>
                <div className="absolute -bottom-10 -left-10 w-28 h-28 sm:w-32 sm:h-32 bg-brand-orange rounded-full opacity-20"></div>
                <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-brand-orange rounded-full opacity-10 blur-md"></div>
              </div>
              
              {/* Feature highlight badges */}
              <div className="absolute top-4 right-4 bg-brand-orange text-white rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold shadow-lg">
                4G Connected
              </div>
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 backdrop-blur-sm text-white border border-brand-orange rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold">
                4K Ultra HD
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;