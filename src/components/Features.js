import React from 'react';

const Features = () => {
  const featuresList = [
    {
      id: 1,
      title: "4K Ultra HD Recording",
      description: "Capture breathtaking clarity with 3840×2160 resolution—perfect for professional content that stands out on any screen.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "180° Rotatable Lens",
      description: "Capture dynamic angles without moving the device—ideal for action sports, creative vlogging, and detailed inspections.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      id: 3,
      title: "4G Internet & Video Calls",
      description: "Stay connected anywhere with cellular coverage—stream live events, conduct remote meetings, or make emergency calls with one click.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Long-Lasting Battery",
      description: "Record up to 8 hours continuously or 24+ hours on standby—never miss important moments with auto-save technology.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13v-1a4 4 0 00-4-4H9.4a4 4 0 00-4 4v1m8-1v2m0 4h.01M17 21H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Infrared Night Vision",
      description: "See clearly up to 10m in complete darkness—essential for overnight security monitoring and wildlife observation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Motion Detection",
      description: "Save battery and storage with smart recording that activates only when movement is detected—perfect for surveillance and time-lapse creation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Dual Storage Options",
      description: "Store up to 256GB locally on TF cards plus secure AES-256 encrypted cloud backup—access your footage anywhere, anytime.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      )
    },
    {
      id: 8,
      title: "Professional Mounting Clip",
      description: "Hands-free recording with our robust, low-profile clip—securely attaches to uniforms, helmets, backpacks, or vehicle dashboards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Background accent shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-orange opacity-10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-orange font-medium text-sm mb-2 bg-brand-orange bg-opacity-10 px-4 py-1 rounded-full">Advanced Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Key Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Advanced technology designed for professionals and enthusiasts who demand the best in portable recording</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {featuresList.map((feature) => (
            <div key={feature.id} className="group relative bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-brand-orange transition-all duration-300 h-full flex flex-col overflow-hidden">
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-orange-light opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <div className="flex items-center mb-4">
                <div className="text-brand-orange mr-3 bg-brand-orange bg-opacity-10 p-3 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 flex-grow text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;