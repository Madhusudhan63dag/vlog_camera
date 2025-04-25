import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    </>
  );
}

export default Projector
export { Checkouts, ThankYous }