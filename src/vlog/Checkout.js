import React from 'react';
import Checkout from './components/Checkout';
import { useLocation } from 'react-router-dom';
import SEO from './components/SEO';
import Header from './components/Header';
import Footer from './components/Footer';

function CheckoutPage() {
  // Use location to get state passed from navigation
  const location = useLocation();
  const { selectedVariant, quantity, totalPrice } = location.state || {
    selectedVariant: {
      name: "Standard Edition",
      basePrice: 5990,
      features: ["4G LTE Connectivity", "4K UHD Video", "8-hour Battery Life"]
    },
    quantity: 1,
    totalPrice: 5990
  };

  // Handler for going back to products
  const handleBackToProducts = () => {
    window.history.back();
  };

  return (
    <div className="checkout-page">
      <SEO 
        title={`Checkout - ${selectedVariant.name}`}
        description={`Complete your order for the I&I Vlog Camera ${selectedVariant.name}. Professional 4K Ultra HD portable recorder.`}
        url="/checkout"
        noindex={true}
      />
      <Header />
      <div id="checkout">
        <Checkout
          selectedVariant={selectedVariant}
          quantity={quantity}
          totalPrice={totalPrice}
          onBack={handleBackToProducts}
          productType="vlog-camera"
        />
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutPage;