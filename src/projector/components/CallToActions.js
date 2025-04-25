import React, { useState } from 'react';

const CallToActions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    isSubmitting: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Start submission process and show loading state
    setFormStatus({
      ...formStatus,
      isSubmitting: true
    });

    try {
      // Send data to the backend API
      const response = await fetch('https://razorpaybackend-wgbh.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'support@iandivlog.com', // Change this to your support email
          subject: `Contact Form Submission from ${formData.name}`,
          message: `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone || 'Not provided'}
            
            Message:
            ${formData.message}
          `
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        // Success response
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you for contacting us! We will get back to you soon.',
          isSubmitting: false
        });
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        // API returned error
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: false,
        error: true,
        message: 'There was a problem sending your message. Please try again later.',
        isSubmitting: false
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black to-[#0a1622] text-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#FD5201] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#36A8DA] rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-[#FD5201] font-medium text-sm mb-2 bg-[#FD5201] bg-opacity-10 px-4 py-1 rounded-full">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FD5201] to-[#36A8DA] mx-auto mb-4"></div>
          <p className="text-xl max-w-2xl mx-auto text-gray-300">
            Have questions about our 4G-connected, 4K Ultra HD portable recorder? 
            Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {formStatus.submitted ? (
            <div className="bg-[#FD5201] bg-opacity-20 border border-[#FD5201] rounded-lg p-6 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#FD5201] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl">{formStatus.message}</p>
              <button 
                onClick={() => setFormStatus({submitted: false, error: false, message: '', isSubmitting: false})}
                className="mt-4 bg-gradient-to-r from-[#FD5201] to-[#FD5201]/90 hover:from-[#FD5201]/90 hover:to-[#FD5201] text-white font-bold py-2 px-6 rounded-lg transition duration-300 shadow-md"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#0a1622]/90 backdrop-filter backdrop-blur-sm rounded-lg p-8 shadow-xl border border-gray-800">
              {formStatus.error && (
                <div className="bg-red-500 bg-opacity-20 border border-red-300 rounded-lg p-4 mb-6 text-center">
                  <p className="text-white">{formStatus.message}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a1622]/50 rounded-lg border border-gray-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FD5201] focus:border-transparent placeholder-gray-500 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a1622]/50 rounded-lg border border-gray-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FD5201] focus:border-transparent placeholder-gray-500 text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">Phone Number (optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#0a1622]/50 rounded-lg border border-gray-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FD5201] focus:border-transparent placeholder-gray-500 text-white"
                  placeholder="+1 (123) 456-7890"
                />
              </div>
              
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5" 
                  className="w-full bg-[#0a1622]/50 rounded-lg border border-gray-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FD5201] focus:border-transparent placeholder-gray-500 text-white"
                  placeholder="Tell us about your questions or requirements..."
                ></textarea>
              </div>
              
              <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0">
                <button 
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`bg-gradient-to-r from-[#FD5201] to-[#FD5201]/90 hover:from-[#FD5201]/90 hover:to-[#FD5201] text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {formStatus.isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
                
                <div className="flex space-x-4">
                  <a href="mailto:support@iandivlog.com" className="text-gray-300 hover:text-[#36A8DA] transition-colors">
                    <span className="sr-only">Email</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a href="tel:+18881234567" className="text-gray-300 hover:text-[#FD5201] transition-colors">
                    <span className="sr-only">Phone</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </form>
          )}
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-[#0a1622]/90 rounded-lg p-6 border border-gray-800 hover:border-[#FD5201]/50 transition-all duration-300">
              <div className="text-[#36A8DA] bg-[#36A8DA] bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Phone Support</h3>
              <p className="text-gray-400">Mon-Fri: 9AM - 6PM</p>
              <p className="font-medium mt-2 text-[#FD5201]">+91 (903) 093-8333 </p>
            </div>
            
            <div className="bg-[#0a1622]/90 rounded-lg p-6 border border-gray-800 hover:border-[#FD5201]/50 transition-all duration-300">
              <div className="text-[#FD5201] bg-[#FD5201] bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Email Us</h3>
              <p className="text-gray-400">We'll respond within 24 hours</p>
              <p className="font-medium mt-2 text-[#36A8DA]">israelitesshopping171@gmail.com</p>
            </div>
            
            <div className="bg-[#0a1622]/90 rounded-lg p-6 border border-gray-800 hover:border-[#FD5201]/50 transition-all duration-300">
              <div className="text-[#36A8DA] bg-[#36A8DA] bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Main Office</h3>
              <p className="text-gray-400">Begumpet, Hyderabad</p>
              <p className="font-medium mt-2 text-[#FD5201]">Telangana 500016</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActions;