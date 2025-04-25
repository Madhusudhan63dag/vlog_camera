import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Razorpay script dynamically
const loadRazorpayScript = () => {
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const API_URL = 'https://razorpaybackend-wgbh.onrender.com';

const Checkout = ({ selectedVariant, quantity, totalPrice, onBack }) => {
  // Add navigate hook
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India',
  });

  // Error state
  const [errors, setErrors] = useState({});
  
  // Step state (1: Shipping, 2: Payment, 3: Review)
  const [step, setStep] = useState(1);
  
  // Order completed state
  const [orderComplete, setOrderComplete] = useState(false);
  
  // Payment state
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [razorpayOrderId, setRazorpayOrderId] = useState(null);
  const [paymentId, setPaymentId] = useState(null);
  
  // Generate a unique order number
  const [orderNumber] = useState(() => {
    return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  });

  // Load Razorpay script when component mounts
  useEffect(() => {
    loadRazorpayScript();
  }, []);
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Format price with commas and Rupee symbol
  const formatPrice = (price) => {
    return "₹" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  // Validate form based on current step
  const validateForm = () => {
    const newErrors = {};
    
    if (step === 1) {
      // Shipping validation
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zipCode) newErrors.zipCode = 'PIN code is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle next step
  const handleNextStep = () => {
    if (validateForm()) {
      window.scrollTo(0, 0);
      if (step < 3) {
        setStep(step + 1);
      } else {
        // Submit order
        handleSubmitOrder();
      }
    }
  };
  
  // Handle previous step
  const handlePrevStep = () => {
    window.scrollTo(0, 0);
    setPaymentError('');
    
    if (step > 1) {
      setStep(step - 1);
    } else {
      // Go back to product page
      onBack();
    }
  };
  
  // Create Razorpay order
  const createRazorpayOrder = async () => {
    try {
      setIsProcessingPayment(true);
      setPaymentError('');
      
      // Create order in backend
      const response = await fetch(`${API_URL}/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: totalPrice,
          currency: 'INR',
          receipt: `rcpt_${orderNumber}`,
          notes: {
            productName: selectedVariant.name,
            quantity: quantity
          }
        }),
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || 'Failed to create order');
      }
      
      setRazorpayOrderId(data.order.id);
      return data;
      
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      setPaymentError(error.message || 'Failed to initialize payment. Please try again.');
      setIsProcessingPayment(false);
      return null;
    }
  };
  
  // Handle Razorpay payment
  const initiateRazorpayPayment = async () => {
    try {
      const orderData = await createRazorpayOrder();
      if (!orderData) return;
      
      const options = {
        key: orderData.key,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: 'I & I vlog camera',
        description: `${selectedVariant.name} x ${quantity}`,
        order_id: orderData.order.id,
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          address: `${formData.address}, ${formData.city}, ${formData.state}, ${formData.zipCode}, ${formData.country}`
        },
        theme: {
          color: '#3B82F6'
        },
        handler: function(response) {
          handlePaymentSuccess(response);
        }
      };
      
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      paymentObject.on('payment.failed', function(response) {
        handlePaymentFailure(response);
      });
      
    } catch (error) {
      console.error('Razorpay payment error:', error);
      setPaymentError('Payment initialization failed. Please try again.');
      setIsProcessingPayment(false);
    }
  };
  
  // Handle payment success
  const handlePaymentSuccess = async (response) => {
    try {
      // Verify payment with backend
      const verifyResponse = await fetch(`${API_URL}/verify-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature
        }),
      });
      
      const verifyData = await verifyResponse.json();
      
      if (verifyData.success) {
        setPaymentId(response.razorpay_payment_id);
        // Complete the order
        sendOrderConfirmationEmail(response.razorpay_payment_id);
        
        // Instead of setting orderComplete to true, redirect to the thank you page
        const orderDetails = {
          orderNumber,
          customerName: `${formData.firstName} ${formData.lastName}`,
          customerEmail: formData.email,
          paymentMethod: 'Razorpay',
          paymentId: response.razorpay_payment_id,
          totalAmount: totalPrice,
          productName: `i&i Vlog Camera (${selectedVariant.name})`
        };
        
        navigate('/thank-you', { state: { orderDetails } });
      } else {
        setPaymentError('Payment verification failed. Please contact support with your payment ID.');
      }
      
    } catch (error) {
      console.error('Payment verification error:', error);
      setPaymentError('Payment verification failed. Please contact support.');
    } finally {
      setIsProcessingPayment(false);
    }
  };
  
  // Handle payment failure
  const handlePaymentFailure = (response) => {
    console.error('Payment failed:', response.error);
    setPaymentError(`Payment failed: ${response.error.description}`);
    setIsProcessingPayment(false);
  };
  
  // Process Cash on Delivery order
  const processCodOrder = async () => {
    try {
      setIsProcessingPayment(true);
      setPaymentError('');
      
      // Generate a fake payment ID for COD
      const codPaymentId = `COD_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
      
      // Send confirmation email
      await sendOrderConfirmationEmail(codPaymentId);
      
      // Instead of setting orderComplete to true, redirect to thank you page
      const orderDetails = {
        orderNumber,
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        paymentMethod: 'Cash on Delivery',
        paymentId: codPaymentId,
        totalAmount: totalPrice,
        productName: `i&i Vlog Camera (${selectedVariant.name})`
      };
      
      navigate('/thank-you', { state: { orderDetails } });
      
    } catch (error) {
      console.error('Error processing COD order:', error);
      setPaymentError('Failed to process your order. Please try again.');
    } finally {
      setIsProcessingPayment(false);
    }
  };
  
  // Send order confirmation email
  const sendOrderConfirmationEmail = async (paymentId) => {
    try {
      // Prepare product array for email
      const products = [
        {
          name: `I & I vlog camera (${selectedVariant.name})`,
          quantity: quantity,
          price: selectedVariant.basePrice
        }
      ];
      
      await fetch(`${API_URL}/send-order-confirmation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerEmail: formData.email,
          orderDetails: {
            orderNumber: orderNumber,
            products: products,
            currency: '₹',
            totalAmount: totalPrice,
            paymentMethod: paymentMethod === 'cod' ? 'Cash on Delivery' : 'Razorpay',
            paymentId: paymentId
          },
          customerDetails: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zip: formData.zipCode,
            country: formData.country
          }
        }),
      });
      
      console.log('Order confirmation email sent');
      
    } catch (error) {
      console.error('Error sending order confirmation email:', error);
    }
  };
  
  // Handle order submission
  const handleSubmitOrder = async () => {
    if (paymentMethod === 'razorpay') {
      await initiateRazorpayPayment();
    } else if (paymentMethod === 'cod') {
      await processCodOrder();
    }
  };
  
  // Handle new order (reset form)
  const handleNewOrder = () => {
    setOrderComplete(false);
    setStep(1);
    setPaymentMethod('razorpay');
    setPaymentError('');
    setIsProcessingPayment(false);
    setRazorpayOrderId(null);
    setPaymentId(null);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'India',
    });
    onBack();
  };
  
  // Render checkout steps content
  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div>
            <h3 className="text-xl font-medium mb-6 text-white">Shipping Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label htmlFor="firstName" className="block mb-1 font-medium text-gray-300">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
                />
                {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1 font-medium text-gray-300">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
                />
                {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium text-gray-300">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
                />
                {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div className="md:col-span-2">
                <label htmlFor="address" className="block mb-1 font-medium text-gray-300">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
                />
                {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address}</p>}
              </div>
              <div>
                <label htmlFor="city" className="block mb-1 font-medium text-gray-300">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
                />
                {errors.city && <p className="text-red-400 text-sm mt-1">{errors.city}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="state" className="block mb-1 font-medium text-gray-300">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md ${errors.state ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
                  />
                  {errors.state && <p className="text-red-400 text-sm mt-1">{errors.state}</p>}
                </div>
                <div>
                  <label htmlFor="zipCode" className="block mb-1 font-medium text-gray-300">PIN Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className={`w-full p-2 border rounded-md ${errors.zipCode ? 'border-red-500' : 'border-gray-600'} bg-gray-700 text-white`}
                  />
                  {errors.zipCode && <p className="text-red-400 text-sm mt-1">{errors.zipCode}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="country" className="block mb-1 font-medium text-gray-300">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white"
                >
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-xl font-medium mb-6 text-white">Payment Information</h3>
            
            {/* Payment method selection */}
            <div className="mb-6">
              <h4 className="font-medium mb-3 text-white">Select Payment Method</h4>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('razorpay')}
                  className={`flex items-center border rounded-lg px-3 sm:px-4 py-2 sm:py-3 ${
                    paymentMethod === 'razorpay' 
                      ? 'border-brand-orange bg-brand-orange bg-opacity-20 text-white' 
                      : 'border-gray-600 bg-gray-700 text-white'
                  }`}
                >
                  <img 
                    src="https://razorpay.com/favicon.png" 
                    alt="Razorpay" 
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2" 
                  />
                  <span className="font-medium text-sm sm:text-base">Razorpay</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`flex items-center border rounded-lg px-3 sm:px-4 py-2 sm:py-3 ${
                    paymentMethod === 'cod' 
                      ? 'border-brand-orange bg-brand-orange bg-opacity-20 text-white' 
                      : 'border-gray-600 bg-gray-700 text-white'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="font-medium text-sm sm:text-base">Cash on Delivery</span>
                </button>
              </div>
              
              {paymentMethod === 'razorpay' && (
                <div className="mt-4 p-4 bg-gray-700 bg-opacity-50 rounded-lg border border-gray-600">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-2 text-sm text-gray-300">
                      You'll be redirected to secure Razorpay payment gateway to complete your purchase.
                    </p>
                  </div>
                </div>
              )}
              
              {paymentMethod === 'cod' && (
                <div className="mt-4 p-4 bg-gray-700 bg-opacity-50 rounded-lg border border-gray-600">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-orange" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-2 text-sm text-gray-300">
                      <p>Pay with cash upon delivery.</p>
                      <p className="mt-1">Please make sure someone is available at the delivery address to receive the product and make the payment.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {paymentError && (
              <div className="mb-6 p-4 bg-red-900 bg-opacity-30 border border-red-500 rounded-md">
                <p className="text-red-300">{paymentError}</p>
              </div>
            )}
            
            <div className="flex items-center mt-6">
              <div className="flex-shrink-0 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-gray-300">Your payment information is secure and encrypted</p>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-xl font-medium mb-6 text-white">Review Order</h3>
            
            <div className="bg-gray-700 p-4 rounded-md mb-6 border border-gray-600">
              <h4 className="font-medium mb-2 text-white">Product</h4>
              <div className="flex justify-between mb-2 text-gray-300">
                <span>I & I vlog camera ({selectedVariant.name}) x {quantity}</span>
                <span className="text-white">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-300">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="border-t border-gray-600 my-2"></div>
              <div className="flex justify-between font-bold text-white">
                <span>Total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 text-white">Shipping Information</h4>
                <p className="text-gray-300">{formData.firstName} {formData.lastName}</p>
                <p className="text-gray-300">{formData.address}</p>
                <p className="text-gray-300">{formData.city}, {formData.state} {formData.zipCode}</p>
                <p className="text-gray-300">{formData.country}</p>
                <p className="text-gray-300">{formData.email}</p>
                <p className="text-gray-300">{formData.phone}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-white">Payment Method</h4>
                {paymentMethod === 'razorpay' ? (
                  <div className="flex items-center text-gray-300">
                    <img 
                      src="https://razorpay.com/favicon.png" 
                      alt="Razorpay" 
                      className="w-5 h-5 mr-2" 
                    />
                    <p>Razorpay</p>
                  </div>
                ) : (
                  <div className="flex items-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <p>Cash on Delivery</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Checkout steps indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {['Shipping', 'Payment', 'Review'].map((label, index) => (
                <div key={index} className="flex-1 text-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full mx-auto mb-2 ${
                    step > index + 1 ? 'bg-brand-orange text-white' : 
                    step === index + 1 ? 'bg-brand-orange text-white' : 
                    'bg-gray-700 text-gray-300'
                  }`}>
                    {step > index + 1 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div className={`text-sm font-medium ${step === index + 1 ? 'text-brand-orange' : 'text-gray-300'}`}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-2 px-12">
              <div className="h-1 flex-1 bg-brand-orange"></div>
              <div className={`h-1 flex-1 ${step >= 2 ? 'bg-brand-orange' : 'bg-gray-700'}`}></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-md border border-gray-700">
            {/* Render step content */}
            {renderStepContent()}
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-8 pt-4 border-t border-gray-700">
              <button
                className="px-4 py-2 border border-gray-600 rounded-md hover:border-gray-500 text-white transition-colors"
                onClick={handlePrevStep}
                disabled={isProcessingPayment}
              >
                {step === 1 ? 'Back to Products' : 'Previous'}
              </button>
              <button
                className={`px-6 py-2 bg-brand-orange text-white rounded-md hover:bg-brand-orange-light flex items-center transition-colors ${
                  isProcessingPayment ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                onClick={handleNextStep}
                disabled={isProcessingPayment}
                style={{ pointerEvents: isProcessingPayment ? 'none' : 'auto' }}
              >
                {isProcessingPayment ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : step === 3 ? 'Place Order' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;