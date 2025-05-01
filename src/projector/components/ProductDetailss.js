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
import video2 from '../assets/video2.mp4';


const ProductDetailss = ({ onBuyNow }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('standard');
  const [activeTab, setActiveTab] = useState('specs');
  const [activeSpecCategory, setActiveSpecCategory] = useState('Video & Display');
  const [selectedImage, setSelectedImage] = useState(0);
  const [videoPlayed, setVideoPlayed] = useState(false);
  const checkoutRef = useRef(null);
  const productRef = useRef(null);
  const galleryRef = useRef(null);
  const videoRef = useRef(null);

  const variants = {
    standard: {
      name: "Standard Edition",
      basePrice: 6990,
      discountPrice: 6990, // added discount price
      originalPrice: 8000, // adding original price that will be shown with strikethrough
      features: [
        "HD 720P Resolution with LCD Technology", 
        "Android 13.0 OS with Built-in Apps",
        "Wi-Fi 6 & Wireless Screen Mirroring", 
        "Bluetooth 5.0 Audio Connectivity",
        "3W Cavity Design Speaker System", 
        "Auto Keystone Correction"
      ]
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

  // Add this array with the specifications data
  const specifications = [
    { name: 'Projection Technology', value: 'LCD' },
    { name: 'Resolution', value: 'HD 720P' },
    { name: 'Throw Ratio', value: 'TR0.83' },
    { name: 'OS', value: 'Android 13.0' },
    { name: 'Wireless Screen Mirroring', value: 'Support' },
    { name: 'Remote Control', value: 'Infrared Remote Controller' },
    { name: 'Keystone', value: 'Vertical Auto / Four Point Correction' },
    { name: 'Focus', value: 'Manual Focus' },
    { name: 'Sound', value: '3W Cavity Design' },
    { name: 'Interface', value: 'HDMI / USB / Audio Out' },
    { name: 'Input Voltage / Power', value: 'AC100–240V / 45W' },
    { name: 'Projector Color', value: 'Cream White (Supports Customization)' },
  ];

  const handlePlayDemoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setVideoPlayed(true);
      } else {
        videoRef.current.pause();
      }
    }
  };

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
            Cute design with powerful performance - Wi-Fi 6, Bluetooth 5.0, and 720P Full HD
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
                    id="buy_now_projector"
                    className="w-full bg-gradient-to-r from-[#FD5201] to-[#FD5201]/80 hover:from-[#FD5201]/90 hover:to-[#FD5201] text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
                    onClick={handleBuyNowClick}
                  >
                    <span  className="mr-2 button_has_clicked_two">Buy Now</span>
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

          <div className="mt-12 w-2xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg shadow-md border border-gray-700">
          <div className="relative pb-[56.25%] h-0 rounded overflow-hidden">
            <video 
              ref={videoRef}
              src={video2} 
              className="absolute inset-0 w-full h-full object-cover"
              controls
              autoPlay
              muted
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF6B00' d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6l5-3-5-3z'/%3E%3C/svg%3E"
              onClick={handlePlayDemoClick}
              onPlay={() => setVideoPlayed(true)}
            />
            {!videoPlayed && (
              <div className="absolute inset-0 flex items-center justify-center hover:bg-black hover:bg-opacity-30 transition-colors cursor-pointer" onClick={handlePlayDemoClick}>
                <div className="bg-brand-orange bg-opacity-90 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
          
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
        <div className="mb-20">
          <div className="border-b border-gray-800 mb-8">
            <div className="flex space-x-8">
              <button
                className={`pb-4 text-lg font-medium ${
                  activeTab === 'specs' 
                    ? 'border-b-2 border-[#FD5201] text-white' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => setActiveTab('specs')}
              >
                Specifications
              </button>
              <button
                className={`pb-4 text-lg font-medium ${
                  activeTab === 'features' 
                    ? 'border-b-2 border-[#FD5201] text-white' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => setActiveTab('features')}
              >
                Key Features
              </button>
            </div>
          </div>

          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specifications.map((spec, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 p-6 rounded-xl border border-gray-800/60"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-gray-400 text-sm">{spec.name}</span>
                    <span className="text-white font-medium text-right ml-4">{spec.value}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {variants[selectedVariant].features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start bg-gray-900/50 p-6 rounded-xl border border-gray-800/60"
                >
                  <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#FD5201]/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FD5201]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-4 text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

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

// Projection Technology: LCD

// Resolution: HD 720P

// Brightness: 160 Ansi Lumens

// Throw Ratio: TR0.83

// Projection Size: 50–150 Inch

// OS: Android 13.0

// Wireless Screen Mirroring: Support

// Remote Control: Infrared Remote Controller

// Keystone: Vertical Auto / Four Point Correction

// Focus: Manual Focus

// Sound: 3W Cavity Design

// Interface: HDMI / USB / Audio Out

// Input Voltage / Power: AC100–240V / 45W

// Projector Size: 240×180×130mm (without ears)

// Net Weight: 650g

// Projector Color: Cream White (Supports Customization)