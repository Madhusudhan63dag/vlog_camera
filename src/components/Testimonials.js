import React from 'react';

const Testimonials = () => {

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i}
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };
  
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Wildlife Photographer",
      quote: "The 4G connectivity and rugged design of this recorder has transformed my field work. I can stream wildlife footage directly from remote locations.",
      rating: 5,
      avatar: "AJ"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Travel Vlogger",
      quote: "I've used many portable recorders, but none match the battery life and video quality of this one. It's been with me across 15 countries!",
      rating: 5,
      avatar: "SC"
    },
    {
      id: 3,
      name: "Miguel Rodriguez",
      role: "Security Consultant",
      quote: "The SOS calling feature and reliable streaming options make this device essential for our security personnel in the field.",
      rating: 4,
      avatar: "MR"
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 sm:mb-4">What Our Users Say</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Our 4G portable recorder is trusted by professionals across various industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-5 sm:p-6 rounded-lg shadow-lg relative">
              {/* Quotation mark decoration */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-blue-500 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M18.97 8.793a1 1 0 0 0-1.415-1.414l-6.364 6.364a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 1-1.414 1.414l-6.364-6.364a3 3 0 0 1 0-4.242l6.364-6.364a3 3 0 0 1 4.242 0l1.414 1.414a3 3 0 0 1 0 4.242l-2.828 2.828 4.242 4.243a1 1 0 1 0 1.414-1.414L18.97 8.793zm-13.435 0a1 1 0 1 0-1.414-1.414L.757 10.743a3 3 0 0 0 0 4.242l4.243 4.243a1 1 0 0 0 1.414-1.414L2.171 13.57l3.364-3.364a1 1 0 0 0 0-1.414z" />
                </svg>
              </div>
              
              <div className="flex justify-end mb-3 sm:mb-4">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-gray-700 italic mb-5 sm:mb-6">"{testimonial.quote}"</p>
              
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;