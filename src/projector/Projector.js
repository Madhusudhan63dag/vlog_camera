import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Headers from './components/Headers';
import Heros from './components/Heros';
import Featuress from './components/Featuress';
import ProductDetailss from './components/ProductDetailss';
import Checkouts from './components/Checkouts';
import Testimonialss from './components/Testimonialss';
import FAQs from './components/FAQs';
import CallToActions from './components/CallToActions';
import Footers from './components/Footers';
import TermsAndConditionss from './components/TermsAndConditionss';
import PrivacyPolicys from './components/PrivacyPolicys';
import ThankYous from './components/ThankYous';
import CallButton from './components/CallButton';

function Projector() {
  // State to track selected product details
  const [selectedProduct, setSelectedProduct] = useState({
    variant: {
      name: "Standard Projector",
      basePrice: 6990,
      features: ["4K Display", "Bluetooth Connectivity", "10-hour Battery Life"]
    },
    quantity: 1,
    totalPrice: 6990
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
    navigate('/projector/checkout', { 
      state: {
        selectedVariant: variant,
        quantity: quantity,
        totalPrice: price
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>4K Ultra HD Smart Projector | Premium Home Entertainment</title>
        <meta name="description" content="Experience cinema-quality visuals at home with our 4K Ultra HD Smart Projector. Featuring Bluetooth connectivity, 10-hour battery life, and stunning display quality." />
        <meta name="keywords" content="4K projector, smart projector, home cinema, bluetooth projector, portable projector" />
        <meta property="og:title" content="4K Ultra HD Smart Projector" />
        <meta property="og:description" content="Experience cinema-quality visuals at home with our premium projector." />
        <meta property="og:type" content="product" />
        <link rel="canonical" href="https://yourdomain.com/projector" />
      </Helmet>
      <Headers />
      <div id="projector-hero">
        <Heros />
      </div>
      <div id="projector-features">
        <ProductDetailss onBuyNow={handleBuyNow} />
      </div>
      <div id="projector-specs">
        <Featuress />
      </div>
      <div id="projector-testimonials">
        <Testimonialss />
      </div>
      <div id="projector-faq">
        <FAQs />
      </div>
      <div id="projector-order">
        <CallToActions />
      </div>
      <Footers />
      <CallButton phoneNumber="+91 9030938333" />
    </>
  );
}

export default Projector
export { Checkouts, ThankYous }