import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from './components/SEO';

// Import local vlog components
import Hero from './components/Hero';
import Features from './components/Features';
import ProductDetails from './components/ProductDetails';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Header from './components/Header';
import Footer from './components/Footer';

function Vlog() {
  // State to track selected product details
  const [selectedProduct, setSelectedProduct] = useState({
    variant: {
      name: "Standard Edition",
      basePrice: 5990,
      features: ["4G LTE Connectivity", "4K UHD Video", "8-hour Battery Life"]
    },
    quantity: 1, 
    totalPrice: 5990
  });
  
  const navigate = useNavigate();
  
  // Handler for Buy Now button
  const handleBuyNow = (variant, quantity, price) => {
    setSelectedProduct({
      variant,
      quantity,
      totalPrice: price
    });
    
    // Navigate to checkout with product details
    navigate('/checkout', { 
      state: {
        selectedVariant: variant,
        quantity: quantity,
        totalPrice: price
      }
    });
  };

  return (
    <>
      <SEO 
        title="4G Connected 4K Ultra HD Portable Recorder"
        description="Professional 4G-connected 4K Ultra HD portable recorder with SOS calling & 180° lens. Perfect for vloggers, content creators, and professionals."
        keywords="4G vlog camera, portable recorder, 4K video camera, streaming camera, SOS calling"
        url="/"
        image="/og-image.jpg"
        type="product"
      />
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <ProductDetails onBuyNow={handleBuyNow} />
      </div>
      <div id="specs">
        <Features />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="order">
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}

export default Vlog;