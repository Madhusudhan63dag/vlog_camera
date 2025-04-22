import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Capture, Stream & Call Anywhere in 4K</h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0">Ultimate 4G Portable Recorder with SOS Calling & 180° Lens—powered by a super‑long‑lasting battery for professionals and enthusiasts.</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a href="#product">
                <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                  Order Now
                </button>
              </a>
              <a href="#specs">
                <button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Learn More
                </button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 px-4 sm:px-8 md:px-0">
            <div className="relative">
              {/* Placeholder for product image */}
              <div className="bg-gray-200 rounded-lg h-64 sm:h-80 md:h-96 w-full flex items-center justify-center shadow-2xl overflow-hidden">
                <p className="text-gray-600">Product Image</p>
                
                {/* Add decorative elements */}
                <div className="absolute -top-5 -right-5 w-20 h-20 sm:w-24 sm:h-24 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-10 -left-10 w-28 h-28 sm:w-32 sm:h-32 bg-blue-500 rounded-full opacity-20"></div>
              </div>
              
              {/* Feature highlight badges */}
              <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold">
                4G Connected
              </div>
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-bold">
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