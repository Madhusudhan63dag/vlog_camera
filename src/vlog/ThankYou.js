import React from 'react';
import ThankYou from './components/ThankYou';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function ThankYouPage() {
  // Use location to get order details from the navigation state
  const location = useLocation();
  const { orderDetails } = location.state || {
    orderDetails: {
      orderNumber: '000000',
      customerName: 'Guest',
      customerEmail: 'guest@example.com',
      paymentMethod: 'None',
      paymentId: 'None',
      totalAmount: 0,
      productName: 'i&i Vlog Camera'
    }
  };

  return (
    <div className="thank-you-page">
      <Header />
      <ThankYou orderDetails={orderDetails} />
      <Footer />
    </div>
  );
}

export default ThankYouPage;