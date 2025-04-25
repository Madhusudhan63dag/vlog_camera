import React from 'react';
import { Link } from 'react-router-dom';

const ThankYous = () => {
  // Mock data for order details - in a real app, this would come from your state management or API
  const orderDetails = {
    orderNumber: "ORD-" + Math.floor(100000 + Math.random() * 900000),
    productName: "i&i Portable Mini Projector",
    totalAmount: 299.99,
    paymentMethod: "Credit Card",
    paymentId: "PAY-" + Math.floor(100000 + Math.random() * 900000),
    customerEmail: "customer@example.com"
  };

  return (
    <section className="min-h-screen py-16 bg-gradient-to-b from-black to-[#0a1622] text-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#0a1622]/90 to-black/70 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-800/60 p-8">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#FD5201]/20 to-[#36A8DA]/20 rounded-full mx-auto flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#FD5201]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Thank You for Your Order!</h1>
            <p className="text-xl text-gray-300">Your order has been successfully placed.</p>
          </div>
          
          <div className="border border-gray-800 rounded-lg p-6 mb-8 bg-black/30">
            <h2 className="text-xl font-semibold mb-4 text-[#36A8DA]">Order Information</h2>
            
            <div className="space-y-3">
              <div className="flex flex-wrap justify-between">
                <span className="text-gray-400">Order Number:</span>
                <span className="font-medium text-white">{orderDetails.orderNumber}</span>
              </div>
              
              <div className="flex flex-wrap justify-between">
                <span className="text-gray-400">Product:</span>
                <span className="font-medium text-white">{orderDetails.productName}</span>
              </div>
              
              <div className="flex flex-wrap justify-between">
                <span className="text-gray-400">Total Amount:</span>
                <span className="font-medium text-white">
                  ₹{orderDetails.totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
              
              <div className="flex flex-wrap justify-between">
                <span className="text-gray-400">Payment Method:</span>
                <span className="font-medium text-white">{orderDetails.paymentMethod}</span>
              </div>
              
              {orderDetails.paymentId && (
                <div className="flex flex-wrap justify-between">
                  <span className="text-gray-400">Payment ID:</span>
                  <span className="font-medium text-white">{orderDetails.paymentId}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-[#FD5201]/10 border border-[#FD5201]/30 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-2 text-[#FD5201]">What's Next?</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FD5201] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>
                  You'll receive a confirmation email at <span className="text-white font-medium">{orderDetails.customerEmail}</span> with your order details.
                </span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FD5201] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <span>
                  Our team will process your order within 24 hours.
                </span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FD5201] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span>
                  {orderDetails.paymentMethod === 'Cash on Delivery' ? 
                    'Your order will be delivered within 5-7 business days. Payment will be collected upon delivery.' : 
                    'Your order will be shipped within 1-2 business days and delivered within 5-7 business days.'}
                </span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FD5201] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>
                  If you have any questions about your order, feel free to contact our support team.
                </span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/recorder" 
              className="bg-gradient-to-r from-[#36A8DA] to-[#36A8DA]/80 hover:from-[#36A8DA]/80 hover:to-[#36A8DA] text-white py-3 px-8 rounded-lg font-bold transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Return to Home
            </Link>
            <Link 
              to="/recorder#contact" 
              className="bg-gradient-to-r from-[#0a1622] to-[#0a1622]/90 hover:from-[#0a1622]/90 hover:to-[#0a1622] text-white py-3 px-8 rounded-lg font-bold border border-[#FD5201] transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYous;