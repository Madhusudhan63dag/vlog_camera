import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Vlog from './vlog/Vlog';
import Projector from './projector/Projector';
import CheckoutPage from './vlog/Checkout';
import ThankYouPage from './vlog/ThankYou';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import CheckoutPages from './projector/Checkouts';
import ThankYouPages from './projector/ThankYous';
import ReturnPolicy from './components/ReturnPolicy';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Vlog />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/projector" element={<Projector />} />
          <Route path="/projector/checkout" element={<CheckoutPages />} />
          <Route path="/projector/thank-you" element={<ThankYouPages />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/return" element={<ReturnPolicy />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App