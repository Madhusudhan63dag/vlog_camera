import React from 'react';

const PrivacyPolicys = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: April 22, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Introduction</h2>
            <p className="mb-4">
              Welcome to I & I vlog camera's Privacy Policy. This Privacy Policy describes how your personal information is collected, used, and shared when you visit our website, purchase our products, or use our services.
            </p>
            <p className="mb-4">
              We respect your privacy and are committed to protecting your personal data. We want to be transparent about how we collect and use your data and to inform you about your privacy rights.
            </p>
            <p className="mb-4">
              Please read this Privacy Policy carefully before using our Service, as it will help you understand our practices regarding your personal information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Information We Collect</h2>
            <p className="mb-4">
              When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. We refer to this automatically-collected information as "Device Information."
            </p>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">We collect Device Information using the following technologies:</h3>
            <ul className="list-disc pl-8 mb-4">
              <li className="mb-2">"Cookies" are data files that are placed on your device and often include a unique identifier. For more information about cookies and how to disable them, visit http://www.allaboutcookies.org.</li>
              <li className="mb-2">"Log files" track actions occurring on the website and collect data including your IP address, browser type, referring/exit pages, and date/time stamps.</li>
              <li className="mb-2">"Web beacons", "tags", and "pixels" are electronic files used to record information about how you browse the website.</li>
            </ul>
            <p className="mb-4">
              Additionally, when you make a purchase or attempt to make a purchase through our website, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as "Order Information."
            </p>
            <p className="mb-4">
              When we talk about "Personal Information" in this Privacy Policy, we are talking both about Device Information and Order Information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How We Use Your Personal Information</h2>
            <p className="mb-4">
              We use the Order Information that we collect generally to fulfill any orders placed through our website (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
            </p>
            <p className="mb-4">
              Additionally, we use this Order Information to:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li className="mb-2">Communicate with you;</li>
              <li className="mb-2">Screen our orders for potential risk or fraud;</li>
              <li className="mb-2">Provide you with information or advertising relating to our products or services, when in line with the preferences you have shared with us;</li>
              <li className="mb-2">Improve and optimize our website (for example, by generating analytics about how our customers browse and interact with the website).</li>
            </ul>
            <p className="mb-4">
              We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sharing Your Personal Information</h2>
            <p className="mb-4">
              We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use third-party payment processors to process payments - when you provide payment information, you are providing it to our third-party payment processor and not to us directly.
            </p>
            <p className="mb-4">
              We also use Google Analytics to help us understand how our customers use our website. You can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/
            </p>
            <p className="mb-4">
              Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Rights</h2>
            <p className="mb-4">
              If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
            </p>
            <p className="mb-4">
              Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the website), or otherwise to pursue our legitimate business interests listed above. Please note that your information will be transferred outside of Europe, including to the United States.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Data Retention</h2>
            <p className="mb-4">
              When you place an order through our website, we will maintain your Order Information for our records unless and until you ask us to delete this information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Changes</h2>
            <p className="mb-4">
              We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
            <p className="mb-4">
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at privacy@iandivlog.com or by mail using the details provided below:
            </p>
            <p className="mb-4">
              I & I vlog camera<br />
              [Your Physical Address]<br />
              [Your City, State, Postal Code]<br />
              [Your Country]
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

export default PrivacyPolicys;