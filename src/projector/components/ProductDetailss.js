import React, { useState, useRef, useEffect } from 'react';
import product from '../assets/product.jpg';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';
import product5 from '../assets/product5.jpg';
import product6 from '../assets/product6.jpg';
import product7 from '../assets/product7.jpg';
import product8 from '../assets/product8.jpg';
import video from '../assets/video.mp4';


const ProductDetailss = ({ onBuyNow }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('standard');
  const [activeTab, setActiveTab] = useState('specs');
  const [activeSpecCategory, setActiveSpecCategory] = useState('Video & Display');
  const [selectedImage, setSelectedImage] = useState(0);
  const checkoutRef = useRef(null);
  const productRef = useRef(null);
  const galleryRef = useRef(null);

  const variants = {
    standard: {
      name: "Standard Edition",
      basePrice: 6990,
      discountPrice: 6990, // added discount price
      originalPrice: 8000, // adding original price that will be shown with strikethrough
      features: ["1080P Full HD Resolution", "Wi-Fi 6 Connectivity", "Bluetooth 5.1", "Built-in Netflix & YouTube", "Enhanced Speaker System", "Extended Battery Life"]
    },
  };

  // Product images for each variant (main + angles)
  const productImageSets = {
    standard: [
      product1,
      product5,
      product4, 
      video
    ],
  };
  
  // Check if item is a video
  const isVideo = (item) => typeof item === 'string' && item.includes('.mp4');

  // Gallery images (all variants)
  const galleryImages = [
    {
      src: product7,
      title: "Front View",
      description: "Standard Edition - Front View"
    },
    // {
    //   src: product1,
    //   title: "Side Angle",
    //   description: "Sleek Profile Design"
    // },
    {
      src: product3,
      title: "In Action",
      description: "Movie Night Projection"
    },
    {
      src: product4,
      title: "Professional Setup",
      description: "Pro Edition in Use"
    },
    {
      src: product5,
      title: "Portable Design",
      description: "Easy to Carry Anywhere"
    },
    {
      src: product6,
      title: "Interface Demo",
      description: "User-Friendly Controls"
    },
    {
      src: product,
      title: "Color Quality",
      description: "Vibrant Color Reproduction"
    },
    {
      src: product8,
      title: "Ultimate Edition",
      description: "Premium Model"
    }
  ];

  // Handle 3D rotation effect
  useEffect(() => {
    const productCard = productRef.current;
    if (!productCard) return;
    
    const handleMouseMove = (e) => {
      const { left, top, width, height } = productCard.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      productCard.style.transform = `
        perspective(1000px) 
        rotateY(${x * 10}deg) 
        rotateX(${y * -10}deg)
        translateZ(20px)
      `;
    };
    
    const handleMouseLeave = () => {
      productCard.style.transform = `
        perspective(1000px) 
        rotateY(0deg) 
        rotateX(0deg)
        translateZ(0px)
      `;
    };
    
    productCard.addEventListener('mousemove', handleMouseMove);
    productCard.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      productCard.removeEventListener('mousemove', handleMouseMove);
      productCard.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [selectedVariant]);

  // Modal for full-size gallery
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  
  const openGallery = (index) => {
    setCurrentGalleryImage(index);
    setGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeGallery = () => {
    setGalleryOpen(false);
    document.body.style.overflow = '';
  };
  
  const nextGalleryImage = (e) => {
    e.stopPropagation();
    setCurrentGalleryImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevGalleryImage = (e) => {
    e.stopPropagation();
    setCurrentGalleryImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!galleryOpen) return;
      
      if (e.key === 'Escape') {
        closeGallery();
      } else if (e.key === 'ArrowRight') {
        setCurrentGalleryImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentGalleryImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [galleryOpen, galleryImages.length]);

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

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    setSelectedImage(0);
  };

  const totalPrice = variants[selectedVariant].basePrice * quantity;

  const formatPrice = (price) => {
    return "₹" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleBuyNowClick = () => {
    if (onBuyNow) {
      onBuyNow(variants[selectedVariant], quantity, totalPrice);
    } else {
      checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const specCategories = [
    {
      category: "Video & Display",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      color: "#F59E0B",
      specs: [
        { label: "Display Resolution", value: "1080P Full HD (supports up to 4K)" },
        { label: "Brightness", value: "400 ANSI Lumens" },
        { label: "Keystone Correction", value: "Auto Keystone Correction" }
      ]
    },
    {
      category: "Connectivity",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      color: "#3B82F6",
      specs: [
        { label: "Wi-Fi", value: "Wi-Fi 6" },
        { label: "Bluetooth", value: "5.1 for audio transmission" },
        { label: "Ports", value: "HDMI, USB, AUX" }
      ]
    },
    {
      category: "Power & Storage",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "#10B981",
      specs: [
        { label: "Battery", value: "Built-in rechargeable battery" },
        { label: "Weight", value: "Only 1.5 lbs (ultra-lightweight)" },
        { label: "Power Input", value: "Standard power adapter" }
      ]
    },
    {
      category: "Physical",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: "#8B5CF6",
      specs: [
        { label: "Dimensions", value: "12 × 8 × 6 inches" },
        { label: "Weight", value: "3.5 pounds" },
        { label: "Design", value: "Cute cartoon dog shape in yellow color" }
      ]
    }
  ];

  const applications = [
    {
      title: "Home Entertainment",
      description: "Transform any wall into a cinema screen with stunning 1080P HD clarity. Perfect for movie nights, gaming sessions, and binge-watching on Netflix, YouTube, and Prime Video.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: "/images/home-entertainment.jpg",
      color: "#F97316"
    },
    {
      title: "Kid's Room Fun",
      description: "Create magical experiences in children's rooms with animated content, educational videos, and fun projections. The cute dog-like design makes it a perfect bedside companion.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: "/images/kids-room.jpg",
      color: "#3B82F6"
    },
    {
      title: "Outdoor Adventures",
      description: "Take movie night anywhere with ultra-lightweight portability at just 1.5 lbs. Perfect for camping trips, backyard gatherings, or impromptu presentations while traveling.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      image: "/images/outdoor-adventures.jpg",
      color: "#10B981"
    },
    {
      title: "Gaming & Presentations",
      description: "Connect seamlessly to PS5, laptops, and other devices via HDMI and USB. Auto keystone correction ensures perfect image alignment from any angle.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      image: "/images/business-presentations.jpg",
      color: "#EF4444"
    }
  ];

  const howItWorksSteps = [
    {
      id: 1,
      title: "Unbox & Power",
      description: "Unpack your projector and connect to power source.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Connect Wi-Fi",
      description: "Connect to Wi-Fi 6 for streaming Netflix, YouTube, and Prime Video.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Adjust Focus",
      description: "The projector automatically adjusts focal length for different distances.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Connect Audio",
      description: "Use built-in speakers or connect Bluetooth headphones/speakers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Enjoy!",
      description: "Sit back and enjoy stunning visuals and audio anywhere.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h18M3 16h18" />
        </svg>
      )
    }
  ];

  return (
    <section id="product-details" className="py-16 bg-gradient-to-br from-[#050a10] to-[#0a1018] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="hidden lg:block absolute top-40 -left-20 w-72 h-72 rounded-full bg-[#FD5201]/5 blur-3xl animate-pulse"></div>
      <div className="hidden lg:block absolute bottom-40 -right-20 w-80 h-80 rounded-full bg-[#36A8DA]/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-white font-medium text-sm mb-3 bg-gradient-to-r from-[#FD5201] to-[#36A8DA] px-5 py-1.5 rounded-full shadow-lg shadow-[#FD5201]/20">
            Smart Entertainment
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            i&i Portable Mini Projector
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cute design with powerful performance - Wi-Fi 6, Bluetooth 5.1, and 1080P Full HD
          </p>
        </div>

        {/* Hero product section with 3D card effect */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          {/* Product Image - Left Side */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div 
              ref={productRef} 
              className="bg-gradient-to-br from-[#0a1622]/90 to-[#050a10] rounded-2xl overflow-hidden shadow-2xl border border-gray-800 transition-all duration-300 transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {isVideo(productImageSets[selectedVariant][selectedImage]) ? (
                  <video 
                    src={productImageSets[selectedVariant][selectedImage]} 
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img 
                    src={productImageSets[selectedVariant][selectedImage]} 
                    alt={`I & I Portable Mini Projector ${variants[selectedVariant].name}`} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
                
                {/* Dynamic status indicators */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="inline-flex items-center bg-[#FD5201]/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                    <span className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></span>
                    4K
                  </span>
                  <span className="inline-flex items-center bg-[#36A8DA]/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white">
                    <span className="w-2 h-2 bg-white rounded-full mr-1.5 animate-pulse"></span>
                    Wi-Fi
                  </span>
                </div>
                
                {/* Price badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/50 backdrop-blur-md rounded-full py-1.5 px-4 text-white font-bold">
                    {formatPrice(variants[selectedVariant].basePrice)}
                  </div>
                </div>

                {/* Expand image button */}
                <button 
                  onClick={() => openGallery(productImageSets[selectedVariant].indexOf(productImageSets[selectedVariant][selectedImage]))}
                  className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="View full size image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                </button>
              </div>
              
              {/* Image thumbnails for different angles */}
              <div className="flex justify-center gap-2 p-4 border-t border-gray-800">
                {productImageSets[selectedVariant].map((img, index) => (
                  <div 
                    key={index} 
                    className={`w-16 h-16 border-2 rounded-md overflow-hidden cursor-pointer transition-all duration-300 ${
                      selectedImage === index 
                        ? 'border-[#FD5201] scale-110 shadow-lg shadow-[#FD5201]/20' 
                        : 'border-gray-700 opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    {isVideo(img) ? (
                      <div className="relative w-full h-full flex items-center justify-center bg-gray-800">
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={img} 
                        alt={`${variants[selectedVariant].name} angle ${index}`} 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product Details - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gradient-to-br from-[#0a1622]/90 to-black/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-800/60 p-8">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">i&i Portable Mini Projector</h1>
                  <h2 className="text-xl text-[#36A8DA] font-medium mb-6">
                    {variants[selectedVariant].name}
                  </h2>
                  
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 mb-1.5">
                      <p className="text-3xl font-bold text-white">{formatPrice(variants[selectedVariant].discountPrice || variants[selectedVariant].basePrice)}</p>
                      {variants[selectedVariant].originalPrice && (
                        <p className="text-xl text-gray-400 line-through">{formatPrice(variants[selectedVariant].originalPrice)}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-1 text-[#FD5201]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p>Free shipping & 30-day returns</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-3 text-gray-300">Key Features:</h3>
                    <ul className="space-y-3">
                      {variants[selectedVariant].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#FD5201]/20 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FD5201]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="ml-3 text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Variant Selection */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-3 text-gray-300">Select Edition:</h3>
                    <div className="flex flex-wrap gap-3">
                      {Object.keys(variants).map((key) => (
                        <button
                          key={key}
                          className={`px-6 py-2.5 rounded-lg transition-all duration-300 ${selectedVariant === key 
                            ? 'bg-gradient-to-r from-[#FD5201] to-[#FD5201]/80 text-white shadow-lg shadow-[#FD5201]/20' 
                            : 'bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 hover:text-white'}`}
                          onClick={() => handleVariantChange(key)}
                        >
                          {variants[key].name.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-800/60">
                  {/* Quantity Selector */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-400 mb-1.5">
                        Quantity:
                      </label>
                      <div className="flex items-center">
                        <button
                          className="w-10 h-10 flex items-center justify-center bg-[#0a1622] rounded-l-lg hover:bg-[#36A8DA]/20 text-gray-300 border border-gray-700/60 transition-colors"
                          onClick={decreaseQuantity}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <input
                          id="quantity"
                          type="number"
                          value={quantity}
                          onChange={handleQuantityChange}
                          className="mx-0 w-14 h-10 text-center border-y border-gray-700/60 bg-[#0a1622] text-white focus:outline-none"
                        />
                        <button
                          className="w-10 h-10 flex items-center justify-center bg-[#0a1622] rounded-r-lg hover:bg-[#36A8DA]/20 text-gray-300 border border-gray-700/60 transition-colors"
                          onClick={increaseQuantity}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-xl font-bold text-white">
                      Total: {formatPrice(totalPrice)}
                    </div>
                  </div>
                  
                  {/* Buy Now Button */}
                  <button
                    className="w-full bg-gradient-to-r from-[#FD5201] to-[#FD5201]/80 hover:from-[#FD5201]/90 hover:to-[#FD5201] text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
                    onClick={handleBuyNowClick}
                  >
                    <span className="mr-2">Buy Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Image Gallery - New Section */}
          
        <div id="gallery" className="mb-20">
          {/* <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Product Gallery</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FD5201] to-[#36A8DA] mx-auto mb-4"></div>
            <p className="text-gray-400">Explore our product from every angle</p>
          </div> */}
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-xl overflow-hidden border border-gray-800/60 shadow-lg shadow-black/50 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                onClick={() => openGallery(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h4 className="text-white font-bold">{image.title}</h4>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabbed content section - Existing content */}
       

        {/* Bottom CTA card - Keep same as original */}
      </div>
      
      {/* Full-screen image gallery */}
      {galleryOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeGallery}
        >
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={closeGallery}
              className="bg-gray-800/70 hover:bg-gray-700/70 p-2 rounded-full text-white transition-colors"
              aria-label="Close gallery"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Image counter */}
          <div className="absolute top-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
            {currentGalleryImage + 1} / {galleryImages.length}
          </div>

          {/* Image container */}
          <div className="md:w-[60%] md:h-[80%]  relative">
            <img
              src={galleryImages[currentGalleryImage].src}
              alt={galleryImages[currentGalleryImage].title}
              className="w-full h-full"
            />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevGalleryImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition-colors"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextGalleryImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition-colors"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProductDetailss;


//  <div className="mb-20">
//           {/* Tab Navigation */}
//           <div className="flex justify-center mb-8">
//             <div className="inline-flex bg-[#0a1622]/50 rounded-lg p-1">
//               <button 
//                 className={`px-6 py-3 rounded-md transition-all duration-300 ${
//                   activeTab === 'specs' 
//                     ? 'bg-gradient-to-r from-[#FD5201] to-[#FD5201]/80 text-white shadow-md' 
//                     : 'text-gray-400 hover:text-white'
//                 }`}
//                 onClick={() => setActiveTab('specs')}
//               >
//                 Technical Specs
//               </button>
//               <button 
//                 className={`px-6 py-3 rounded-md transition-all duration-300 ${
//                   activeTab === 'applications' 
//                     ? 'bg-gradient-to-r from-[#36A8DA] to-[#36A8DA]/80 text-white shadow-md' 
//                     : 'text-gray-400 hover:text-white'
//                 }`}
//                 onClick={() => setActiveTab('applications')}
//               >
//                 Use Cases  
//               </button>
//               <button 
//                 className={`px-6 py-3 rounded-md transition-all duration-300 ${
//                   activeTab === 'howItWorks' 
//                     ? 'bg-gradient-to-r from-[#8B5CF6] to-[#8B5CF6]/80 text-white shadow-md' 
//                     : 'text-gray-400 hover:text-white'
//                 }`}
//                 onClick={() => setActiveTab('howItWorks')}
//               >
//                 How It Works
//               </button>
//             </div>
//           </div>

//           {/* Tab Content - Keep same as original */}
//           <div className="min-h-[500px]">
//             {/* Content unchanged from original */}
//           </div>
//         </div>
// discount price should add