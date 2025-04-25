import React from 'react';

const Testimonialss = () => {

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i}
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ${i < rating ? 'text-[#FD5201]' : 'text-gray-700'}`}
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
      name: "Emily Parker",
      role: "Parent & Home Cinema Enthusiast",
      quote: "My kids absolutely adore the cute dog design, and I'm impressed by the quality. We've created a wonderful movie night tradition with this projector in our backyard.",
      rating: 5,
      avatar: "EP"
    },
    {
      id: 2,
      name: "David Wong",
      role: "Digital Nomad",
      quote: "The ultra-lightweight design makes this perfect for my travels. I've used it in hotel rooms, Airbnbs, and even camping. Wi-Fi 6 connectivity is remarkably fast!",
      rating: 5,
      avatar: "DW"
    },
    {
      id: 3,
      name: "Sophia Martinez",
      role: "Elementary School Teacher",
      quote: "This projector has been a game-changer for my classroom. The children love the cute design, and the built-in apps make educational content easily accessible.",
      rating: 4,
      avatar: "SM"
    },
    {
      id: 4,
      name: "Marcus Johnson",
      role: "Gaming Enthusiast",
      quote: "I was skeptical about a mini projector for gaming, but connecting my PS5 was seamless. The auto keystone correction ensures a perfect image even at angles.",
      rating: 5,
      avatar: "MJ"
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Small Business Owner",
      quote: "This projector has elevated our client presentations. It's professional despite its cute design, and the versatile connectivity options work with all our devices.",
      rating: 4,
      avatar: "PP"
    },
    {
      id: 6,
      name: "Thomas Wilson",
      role: "Outdoor Adventure Guide",
      quote: "I take this projector on guided camping trips to show nature documentaries under the stars. The battery life is impressive and it's surprisingly durable!",
      rating: 5,
      avatar: "TW"
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-gradient-to-br from-[#050a10] to-[#0c1218] relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FD5201]/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#36A8DA]/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">What Our Users Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FD5201] to-[#36A8DA] mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Our i&i Portable Mini Projector is loved by families, professionals, and adventurers alike
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#0a1622]/80 backdrop-blur-sm p-5 sm:p-6 rounded-lg shadow-lg relative border border-gray-800 hover:border-[#36A8DA]/30 transition-colors">
              {/* Quotation mark decoration */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-[#36A8DA] rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-white shadow-md shadow-[#36A8DA]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M18.97 8.793a1 1 0 0 0-1.415-1.414l-6.364 6.364a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 1-1.414 1.414l-6.364-6.364a3 3 0 0 1 0-4.242l6.364-6.364a3 3 0 0 1 4.242 0l1.414 1.414a3 3 0 0 1 0 4.242l-2.828 2.828 4.242 4.243a1 1 0 1 0 1.414-1.414L18.97 8.793zm-13.435 0a1 1 0 1 0-1.414-1.414L.757 10.743a3 3 0 0 0 0 4.242l4.243 4.243a1 1 0 0 0 1.414-1.414L2.171 13.57l3.364-3.364a1 1 0 0 0 0-1.414z" />
                </svg>
              </div>
              
              <div className="flex justify-end mb-3 sm:mb-4">
                <div className="flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <p className="text-gray-300 italic mb-5 sm:mb-6">"{testimonial.quote}"</p>
              
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#FD5201] to-[#FD5201]/90 text-white flex items-center justify-center font-bold mr-3 shadow-lg shadow-[#FD5201]/10">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-white">{testimonial.name}</h3>
                  <p className="text-[#36A8DA] text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonialss;