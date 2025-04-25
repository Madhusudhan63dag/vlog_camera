import React from 'react';

const TermsAndConditionss = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Terms and Conditions</h1>
          <p className="text-gray-600">Last updated: April 22, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
            <p className="mb-4">
              Welcome to I & I vlog camera ("Company", "we", "our", "us")! These Terms and Conditions ("Terms", "Terms and Conditions") govern your use of our website and our products (together or individually "Service") operated by I & I vlog camera.
            </p>
            <p className="mb-4">
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages and products. Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
            </p>
            <p className="mb-4">
              If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at support@iandivlog.com so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use our Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Communications</h2>
            <p className="mb-4">
              By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing support@iandivlog.com.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">3. Purchases</h2>
            <p className="mb-4">
              If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including but not limited to, your credit or debit card number, the expiration date of your card, your billing address, and your shipping information.
            </p>
            <p className="mb-4">
              You represent and warrant that: (i) you have the legal right to use any card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
            </p>
            <p className="mb-4">
              We may employ the use of third-party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.
            </p>
            <p className="mb-4">
              We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
            </p>
            <p className="mb-4">
              We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">4. Warranty</h2>
            <p className="mb-4">
              Our products are covered under a limited warranty period of one year from the date of purchase. This warranty covers manufacturing defects in materials and workmanship. The warranty does not cover damage resulting from accidents, misuse, tampering, or unauthorized repairs.
            </p>
            <p className="mb-4">
              To obtain warranty service, please contact our customer service department with proof of purchase.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">5. Product Availability</h2>
            <p className="mb-4">
              All products are subject to availability. We reserve the right to discontinue any product at any time. If a product is not available after you place your order, we will notify you and provide you with a refund for the unavailable product.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">6. Return Policy</h2>
            <p className="mb-4">
              We offer a 30-day satisfaction guarantee on all our products. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund or exchange. The product must be in its original packaging and in the same condition you received it. Shipping charges are non-refundable.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">7. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall I & I vlog camera, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">8. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of the country in which the Company is registered, without regard to its conflict of law provisions.
            </p>
            <p className="mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">9. Changes to Terms and Conditions</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">10. Contact Us</h2>
            <p className="mb-4">
              If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at support@iandivlog.com.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => window.history.back()} 
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Back to Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionss;