import React from 'react';

const TermsAndConditions = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Terms and Conditions</h1>
          <p className="text-gray-600">Last updated: April 25, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Introduction</h2>
            <p className="mb-4">
              These Terms and Conditions ("Terms") govern your access to and use of our website, mobile applications, and services, including any content, functionality, and services offered on or through our website (the "Service"), whether as a guest or a registered user.
            </p>
            <p className="mb-4">
              Please read these Terms carefully before you start to use the Service. By using the Service, purchasing products through our website, or clicking to accept or agree to the Terms when this option is made available to you, you accept and agree to be bound and abide by these Terms and our Privacy Policy, incorporated herein by reference. If you do not want to agree to these Terms or the Privacy Policy, you must not access or use the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Products</h2>
            <p className="mb-4">
              All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this website is void where prohibited.
            </p>
            <p className="mb-4">
              We have made every effort to display as accurately as possible the colors and features of our products that appear on the website. We cannot guarantee that your computer monitor's display of any color will be accurate.
            </p>
            <p className="mb-4">
              We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products and pricing are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product at any time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Pricing and Payment</h2>
            <p className="mb-4">
              All prices shown on our website are in the displayed currency and do not include taxes, shipping, or handling unless explicitly stated. Taxes will be calculated based on your shipping address and the tax rates in effect at the time your order is processed.
            </p>
            <p className="mb-4">
              We accept various payment methods as indicated on our website. By submitting your payment information, you authorize us to charge your payment method for the total amount of your order including taxes, shipping, and handling, if applicable.
            </p>
            <p className="mb-4">
              We reserve the right to refuse any order placed through the Service. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Shipping and Delivery</h2>
            <p className="mb-4">
              We will make our best efforts to ship all orders within the estimated timeframes indicated on our website. However, shipping times are estimates and not guarantees. We are not responsible for any delays caused by shipping carriers, customs clearance, weather conditions, or other circumstances beyond our control.
            </p>
            <p className="mb-4">
              Risk of loss and title for items purchased from our website pass to you upon delivery of the items to the carrier. You are responsible for filing any claims with carriers for damaged and/or lost shipments.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Returns and Refunds</h2>
            <p className="mb-4">
              You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).
            </p>
            <p className="mb-4">
              You should expect to receive your refund within 2-3 weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days).
            </p>
            <p className="mb-4">
              For detailed information on our return policy, please refer to our Return Policy page on our website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Warranty</h2>
            <p className="mb-4">
              Unless otherwise specified, we offer a standard manufacturer's warranty on all products. The length and terms of the warranty vary by product. Please refer to the product documentation included with your purchase for specific warranty information.
            </p>
            <p className="mb-4">
              To the extent permitted by law, we disclaim all other warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide accurate, complete, and current information at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
            <p className="mb-4">
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
            </p>
            <p className="mb-4">
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Intellectual Property</h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of our company and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of our company.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Generated Content</h2>
            <p className="mb-4">
              Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the Service, including its legality, reliability, and appropriateness.
            </p>
            <p className="mb-4">
              By posting content to the Service, you grant us the right and license to use, modify, perform, display, reproduce, and distribute such content on and through the Service.
            </p>
            <p className="mb-4">
              You represent and warrant that:
            </p>
            <ol className="list-decimal pl-8 mb-4">
              <li className="mb-2">The content is yours (you own it) or you have the right to use it and grant us the rights as provided in these Terms.</li>
              <li className="mb-2">The posting of your content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Prohibited Uses</h2>
            <p className="mb-4">
              You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
            </p>
            <ol className="list-decimal pl-8 mb-4">
              <li className="mb-2">In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li className="mb-2">For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li className="mb-2">To send, knowingly receive, upload, download, use, or re-use any material which does not comply with these Terms.</li>
              <li className="mb-2">To transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
              <li className="mb-2">To impersonate or attempt to impersonate our company, a company employee, another user, or any other person or entity.</li>
              <li className="mb-2">To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which may harm our company or users of the Service.</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Limitation of Liability</h2>
            <p className="mb-4">
              In no event will our company, our affiliates or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Service, any websites linked to it, any content on the Service or such other websites or any services or items obtained through the Service or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
            </p>
            <p className="mb-4">
              The foregoing does not affect any liability which cannot be excluded or limited under applicable law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Indemnification</h2>
            <p className="mb-4">
              You agree to defend, indemnify, and hold harmless our company, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Governing Law</h2>
            <p className="mb-4">
              These Terms and your use of the Service shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law principles.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="mb-4">
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
            </p>
          </section>

          {/* <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mb-4">
              [Company Name]<br />
              [Your Physical Address]<br />
              [Your City, State, Postal Code]<br />
              [Your Country]<br />
              Email: support@example.com<br />
              Phone: [Your Phone Number]
            </p>
          </section> */}
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

export default TermsAndConditions;