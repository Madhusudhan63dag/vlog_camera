import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import MobileCallButton from './components/MobileCallButton';

function HomePage({ handleBuyNow }) {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="specs">
        <ProductDetails onBuyNow={handleBuyNow} />
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
    </>
  );
}

function App() {
  // State to track if checkout is active
  const [isCheckoutActive, setIsCheckoutActive] = useState(false);
  // State to track selected product variant, quantity and total price
  const [selectedProduct, setSelectedProduct] = useState({
    variant: {
      name: "Standard Edition",
      basePrice: 299,
      features: ["4G LTE Connectivity", "4K UHD Video", "8-hour Battery Life"]
    },
    quantity: 1, 
    totalPrice: 299
  });
  
  // Reference to checkout section for scrolling
  const checkoutRef = useRef(null);
  
  // Handler for Buy Now button
  const handleBuyNow = (variant, quantity, price) => {
    setSelectedProduct({
      variant,
      quantity,
      totalPrice: price
    });
    setIsCheckoutActive(true);
    window.scrollTo(0, 0);
  };
  
  // Handler for returning to product page
  const handleBackToProducts = () => {
    setIsCheckoutActive(false);
  };

  return (
    <Router>
      <div className="App">
        {/* Only render Header when not in checkout and not on policy pages */}
        <Routes>
          <Route path="/terms" element={<Header />} />
          <Route path="/privacy" element={<Header />} />
          <Route path="*" element={!isCheckoutActive && <Header />} />
        </Routes>
        
        <main>
          <Routes>
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/checkout" element={
              <div id="checkout" ref={checkoutRef}>
                <Checkout 
                  selectedVariant={selectedProduct.variant}
                  quantity={selectedProduct.quantity}
                  totalPrice={selectedProduct.totalPrice}
                  onBack={handleBackToProducts}
                />
              </div>
            } />
            <Route path="/" element={
              isCheckoutActive ? 
              <Navigate to="/checkout" /> : 
              <HomePage handleBuyNow={handleBuyNow} />
            } />
          </Routes>
        </main>
        
        {/* Only render Footer when not in checkout */}
        <Routes>
          <Route path="/terms" element={<Footer />} />
          <Route path="/privacy" element={<Footer />} />
          <Route path="*" element={!isCheckoutActive && <Footer />} />
        </Routes>
        
        {/* Mobile Call Button - only shown on main page and hidden on desktop */}
        {!isCheckoutActive && (
          <Routes>
            <Route path="/" element={<MobileCallButton />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
