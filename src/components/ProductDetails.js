import React, { useState, useRef } from 'react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const ProductDetails = ({ onBuyNow }) => {
  const [quantity, setQuantity] = useState(1);
  const checkoutRef = useRef(null);
  // Add state for selected image
  const [selectedImage, setSelectedImage] = useState(img1);

  // Convert object to array so we can use map
  const product_img = [img1, img2, img3, img4];
  
  const productDetails = {
    name: "Standard Edition",
    basePrice: 5490,
    features: ["4G LTE Connectivity", "4K UHD Video"]
  };

  // Handle image selection
  const handleImageSelect = (img) => {
    setSelectedImage(img);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= 10) {
      setQuantity(value);
    }
  };

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = productDetails.basePrice * quantity;

  const formatPrice = (price) => {
    return "₹" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleBuyNowClick = () => {
    if (onBuyNow) {
      onBuyNow(productDetails, quantity, totalPrice);
    } else {
      checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const specCategories = [
    {
      category: "Video & Display",
      icon: "📷",
      specs: [
        { label: "Video Resolution", value: "4K UHD (3840×2160) @ 30 fps; 1080p @ 60 fps" },
        { label: "Display", value: "2.4″ IPS touchscreen" },
        { label: "Night Vision", value: "IR LEDs up to 10 m range" }
      ]
    },
    {
      category: "Connectivity",
      icon: "📶",
      specs: [
        { label: "Cellular", value: "4G LTE (bands B1/B3/B7/B8/B20)" },
        { label: "Wi-Fi", value: "2.4 GHz 802.11b/g/n" }
      ]
    },
    {
      category: "Power & Storage",
      icon: "🔋",
      specs: [
        { label: "Battery", value: "Built for extended use with smart power management" },
        { label: "Storage", value: "MicroSD card slot (up to 256 GB)" },
        { label: "Cloud Backup", value: "Automatic sync when connected" }
      ]
    },
    // {
    //   category: "Physical",
    //   icon: "📏",
    //   specs: [
    //     { label: "Dimensions", value: "120 × 40 × 25 mm" },
    //     { label: "Weight", value: "150 g" },
    //     { label: "Controls", value: "One-click record, one-click call, power/mode switch" }
    //   ]
    // }
  ];

  const applications = [
    {
      title: "Adventure & Sports",
      description: "Adventure: Hands-free POV footage for extreme sports, hiking trails, and water activities with rugged durability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: "/images/adventure-sports.jpg"
    },
    {
      title: "Security & Patrol",
      description: "Security: Motion-triggered alerts for 24/7 monitoring with night vision capability and instant notifications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: "/images/security-patrol.jpg"
    },
    {
      title: "Professional Inspections",
      description: "Inspections: Live stream site audits with 4K detail for remote expert consultations and documentation compliance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      image: "/images/professional-inspection.jpg"
    },
    {
      title: "Emergency Response",
      description: "Emergency: One-touch SOS calling with live video transmission and GPS location tracking for immediate assistance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      image: "/images/emergency-response.jpg"
    }
  ];

  const howItWorksSteps = [
    {
      id: 1,
      title: "Setup",
      description: "Insert your SIM card & MicroSD card.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Power On",
      description: "Choose recording or standby mode via the side switch.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Frame Shot",
      description: "Rotate the lens to frame your shot, then tap record.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Connect",
      description: "Stream, make video calls, or use one-click SOS.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Review",
      description: "Access footage via touchscreen, MicroSD, or cloud.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h18M3 16h18" />
        </svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        <div className="lg:w-1/2">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <img 
              src={selectedImage} 
              alt={`I & I vlog camera ${productDetails.name}`} 
              className="w-full h-auto object-cover"
            />
            <div className="flex justify-center gap-2 p-4 border-t border-gray-700">
              {product_img.map((img, index) => (
                <div 
                  key={index} 
                  className={`w-16 h-16 border rounded-md overflow-hidden cursor-pointer ${selectedImage === img ? 'border-brand-orange' : 'border-gray-700 hover:border-gray-400'}`}
                  onClick={() => handleImageSelect(img)}
                >
                  <img 
                    src={img} 
                    alt={`${productDetails.name} angle ${index+1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id='product' className="lg:w-1/2">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-gray-700 p-6 h-full">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">I & I vlog camera</h1>
                <h2 className="text-xl text-brand-orange font-medium mb-4">{productDetails.name}</h2>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-white mb-1">{formatPrice(productDetails.basePrice)}</p>
                  <p className="text-green-400">Free shipping & 30-day returns</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Key Features:</h3>
                  <ul className="space-y-2">
                    {productDetails.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-300 mb-1">
                      Quantity:
                    </label>
                    <div className="flex items-center">
                      <button
                        className="px-3 py-1 bg-gray-700 rounded-l-md hover:bg-gray-600"
                        onClick={decreaseQuantity}
                      >
                        -
                      </button>
                      <input
                        id="quantity"
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="mx-0 w-12 text-center border-t border-b border-gray-600 bg-gray-800 text-white"
                      />
                      <button
                        className="px-3 py-1 bg-gray-700 rounded-r-md hover:bg-gray-600"
                        onClick={increaseQuantity}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-xl font-bold">
                    Total: {formatPrice(totalPrice)}
                  </div>
                </div>
                <button
                  className="w-full bg-brand-orange hover:bg-brand-orange-light text-white py-3 px-6 rounded-md font-bold text-lg transition-colors"
                  onClick={handleBuyNowClick}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technical Specifications</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Professional-grade hardware engineered for reliability in any environment
        </p>
      </div>
      <div id="specs" className="mb-20">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-700">
            {specCategories.map((category, catIndex) => (
              <div key={catIndex} className={`p-6 ${catIndex >= 2 ? 'border-t border-gray-700' : ''}`}>
                <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                  <span className="mr-2 text-2xl">{category.icon}</span>
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.specs.map((spec, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-brand-orange mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-white">{spec.label}</p>
                        <p className="text-gray-300">{spec.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="how-it-works" className="mb-16 pt-16 -mt-16">
        <h2 className="text-3xl font-bold mb-4 sm:mb-6 text-center text-white">How It Works</h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 text-center">
          Simple operation in just five easy steps
        </p>
        <div className="hidden lg:block mb-16">
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute top-24 left-0 w-full h-1 bg-gray-700 z-0"></div>
            <div className="flex justify-between relative z-10">
              {howItWorksSteps.map((step) => (
                <div key={step.id} className="flex flex-col items-center w-40">
                  <div className="bg-gray-800 border-4 border-brand-orange rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <div className="text-brand-orange">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-center text-white">{step.title}</h3>
                  <p className="text-center text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="absolute top-24 transform translate-y-[-50%] z-5" style={{ left: `${num * 20}%` }}>
                <svg className="h-6 w-6 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden">
          <div className="relative w-full md:w-10/12 lg:w-8/12 mx-auto">
            {howItWorksSteps.map((step, index) => (
              <div key={step.id} className="flex items-start mb-8 w-full pl-12 relative">
                <div className="absolute left-0 mt-1">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange text-white font-bold">
                    {step.id}
                  </div>
                </div>
                {index < howItWorksSteps.length - 1 && (
                  <div className="absolute left-5 top-10 h-full w-0.5 bg-gray-700"></div>
                )}
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <div className="text-brand-orange mr-2">
                      {step.icon}
                    </div>
                    <h3 className="font-medium text-lg text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 max-w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg shadow-md border border-gray-700">
          <div className="relative pb-[56.25%] h-0 rounded overflow-hidden">
            <div className="absolute inset-0 bg-gray-700 flex items-center justify-center border border-gray-700 rounded-md">
              <div className="text-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 text-brand-orange mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-300 mb-2">Watch how easy it is to use the I & I vlog camera</p>
                <button className="bg-brand-orange hover:bg-brand-orange-light text-white px-4 py-2 rounded-md transition-colors">
                  Play Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-orange bg-opacity-10 p-6 md:p-10 rounded-lg border border-brand-orange border-opacity-30">
        <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Our 4G Portable Recorder?</h3>
        <ul className="space-y-4">
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-orange mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span><strong className="text-white">Total Mobility:</strong> <span className="text-gray-300">No Wi‑Fi required—stay connected wherever 4G coverage exists.</span></span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-orange mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span><strong className="text-white">Versatile Use:</strong> <span className="text-gray-300">From extreme sports and vlogging to field inspections and personal safety.</span></span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-orange mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span><strong className="text-white">Reliable Performance:</strong> <span className="text-gray-300">Auto‑save on power loss, low‑power consumption, and robust build quality.</span></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;