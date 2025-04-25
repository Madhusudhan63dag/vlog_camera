import React from 'react';
import ThankYou from './components/ThankYous';
import Header from './components/Headers';
import Footer from './components/Footers';

function ThankYouPages() {
  return (
    <div className="thank-you-page">
      <Header />
      <ThankYou />
      <Footer />
    </div>
  );
}

export default ThankYouPages;