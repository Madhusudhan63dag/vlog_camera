import React from 'react';

const ReturnPolicy = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Return Policy</h1>
          <p className="text-gray-600">Last updated: April 25, 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Return Policy Overview</h2>
            <p className="mb-4">
              We want you to be completely satisfied with your purchase. If you're not entirely happy with your order, we're here to help.
            </p>
            <p className="mb-4">
              This Return Policy outlines the guidelines and procedures for returning products purchased through our website or authorized retailers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Return Eligibility</h2>
            <p className="mb-4">
              You may return most new, unopened items within 30 days of delivery for a full refund. Used or opened products may be eligible for a partial refund or store credit at our discretion, depending on the condition of the returned item.
            </p>
            <p className="mb-4">
              To be eligible for a return, your item must be:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li className="mb-2">In the same condition that you received it</li>
              <li className="mb-2">In the original packaging, when possible</li>
              <li className="mb-2">Accompanied by the original receipt or proof of purchase</li>
            </ul>
            <p className="mb-4">
              Certain items are non-returnable due to health and hygiene reasons or other considerations. These may include:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li className="mb-2">Personalized or custom-made products</li>
              <li className="mb-2">Digital products or software that has been downloaded or accessed</li>
              <li className="mb-2">Items marked as non-returnable or final sale</li>
              <li className="mb-2">Items that have been used beyond reasonable inspection</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Return Process</h2>
            <p className="mb-4">
              To initiate a return, please follow these steps:
            </p>
            <ol className="list-decimal pl-8 mb-4">
              <li className="mb-2">
                <strong>Contact Customer Service:</strong> Email us at returns@example.com or call our customer service line at [Phone Number] to request a return authorization. Please include your order number and the reason for your return.
              </li>
              <li className="mb-2">
                <strong>Return Authorization:</strong> Once your return request is approved, we will email you a Return Merchandise Authorization (RMA) number and return instructions.
              </li>
              <li className="mb-2">
                <strong>Package Your Return:</strong> Securely pack the item(s) in the original packaging if possible. Include the RMA number on the outside of the package and any return forms provided.
              </li>
              <li className="mb-2">
                <strong>Ship Your Return:</strong> Send your return to the address provided in the return instructions. We recommend using a trackable shipping method.
              </li>
            </ol>
            <p className="mb-4">
              Please note that you will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Refunds</h2>
            <p className="mb-4">
              Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
            </p>
            <p className="mb-4">
              If your return is approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 10-14 business days. Please note that depending on your credit card company, it may take an additional 2-10 business days for the refund to appear on your statement.
            </p>
            <p className="mb-4">
              For approved returns, we offer the following refund options:
            </p>
            <ul className="list-disc pl-8 mb-4">
              <li className="mb-2"><strong>Full refund:</strong> For new, unopened items returned within 30 days</li>
              <li className="mb-2"><strong>Store credit:</strong> May be offered for items that have been opened or used</li>
              <li className="mb-2"><strong>Partial refund:</strong> For items that show signs of use or are returned without original packaging or accessories</li>
            </ul>
            <p className="mb-4">
              If your refund is denied, you will receive a notification explaining the reason. You may contact our customer service team for further clarification or to discuss alternative options.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Exchanges</h2>
            <p className="mb-4">
              If you need to exchange an item for a different size, color, or model, please contact our customer service team first. We will guide you through the exchange process and provide a return authorization if necessary.
            </p>
            <p className="mb-4">
              For exchanges, we will provide a prepaid shipping label for your return, and we will ship the replacement item to you at no additional cost.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Damaged or Defective Items</h2>
            <p className="mb-4">
              If you receive an item that is damaged or defective, please contact us within 48 hours of receiving your order. Please provide photos of the damaged item and packaging, if possible.
            </p>
            <p className="mb-4">
              For damaged or defective items, we will cover the cost of return shipping and send a replacement item at no additional cost. If a replacement is not available, we will issue a full refund, including any shipping costs.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Late or Missing Refunds</h2>
            <p className="mb-4">
              If you haven't received a refund yet, first check your bank account or credit card statement. Then contact your credit card company, as it may take some time before your refund is officially posted. Next, contact your bank, as there is often some processing time before a refund is posted.
            </p>
            <p className="mb-4">
              If you've done all of this and you still have not received your refund, please contact our customer service team.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sale Items</h2>
            <p className="mb-4">
              Only regularly priced items may be refunded. Sale items are not eligible for refunds unless specifically noted. Items marked as "Final Sale" or "Clearance" cannot be returned or exchanged.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">International Returns</h2>
            <p className="mb-4">
              For international orders, the same return policy applies, but please note that you will be responsible for any customs fees, duties, or taxes that may be incurred during the return process. Additionally, international shipping times for returns may be longer.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Changes to This Policy</h2>
            <p className="mb-4">
              We reserve the right to modify this Return Policy at any time. Changes and clarifications will take effect immediately upon their posting on the website. We encourage you to check this policy periodically for any changes.
            </p>
          </section>

          {/* <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our Return Policy, please contact us at:
            </p>
            <p className="mb-4">
              Email: returns@example.com<br />
              Phone: [Your Phone Number]<br />
              Address: [Your Return Address]
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

export default ReturnPolicy;