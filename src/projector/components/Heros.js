import React, { useState, useEffect, useRef } from 'react';
import banner1 from '../assets/banner1.jpg';

const Heros = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef();
  
  // Example banner images - replace with your actual image paths
  const bannerImages = [
    banner1,
  ];
  
  // Auto slide functionality
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    
    const interval = setInterval(play, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide(current => 
      current === bannerImages.length - 1 ? 0 : current + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide(current => 
      current === 0 ? bannerImages.length - 1 : current - 1
    );
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Banner slider container with fixed dimensions */}
      <div className="mx-auto relative h-[40vh] md:h-[600px] ">
        
        {/* Slider track */}
        <div className="w-full h-full relative overflow-hidden">
          {/* Banner images */}
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
              style={{ opacity: currentSlide === index ? 1 : 0 }}
            >
              <img 
                src={image} 
                alt={`Banner ${index + 1}`}
                className="w-screen h-full "
              />
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full z-10"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full z-10"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Dots navigation */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Heros;