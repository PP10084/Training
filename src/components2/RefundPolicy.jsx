import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Importing the arrow icon

const RefundPolicy = () => {
  return (
    <div className="policy-content max-w-4xl mx-auto p-8 bg-white text-black ">
      <h1 className="text-4xl font-bold text-orange-500 mb-4 text-center">Refund Policy</h1>
      <p className="text-lg mb-4"><FaArrowRight className="inline mr-2 text-orange-500" />Last Updated: 07/06/2024</p>
      <p className="text-lg mb-4">
        <FaArrowRight className="inline mr-2 text-orange-500" />
        At Ligovis Technical Solutions Pvt. Ltd. ("Company", "we", "our", "us"), we strive to ensure the satisfaction of our students. 
        This Refund Policy outlines the conditions under which refunds are processed for payments made for our cybersecurity courses. 
        Please read this policy carefully before making a payment.
      </p>
      <h2 className="text-2xl font-bold text-orange-500 mb-4">1. Eligibility for Refunds</h2>
      <p className="text-lg mb-4">
        <FaArrowRight className="inline mr-2 text-orange-500" />
        Refunds are only processed if a user opts out of the service within 24 hours after making the payment.
      </p>
      <h2 className="text-2xl font-bold text-orange-500 mb-4">2. Refund Amount</h2>
      <p className="text-lg mb-4">
        <FaArrowRight className="inline mr-2 text-orange-500" />
        The refund amount may not be the full payment made. The refund will be issued after deducting any processing charges or convenience fees, 
        which depend on third-party payment gateway service providers.
      </p>
      <h2 className="text-2xl font-bold text-orange-500 mb-4">3. Refund Request Process</h2>
      <p className="text-lg mb-4">
        <FaArrowRight className="inline mr-2 text-orange-500" />
        To request a refund, please contact us at [Your Contact Email] within 24 hours of making the payment. Include your payment details and the reason for your refund request.
      </p>
      <h2 className="text-2xl font-bold text-orange-500 mb-4">4. Processing Time</h2>
      <p className="text-lg mb-4">
        <FaArrowRight className="inline mr-2 text-orange-500" />
        Once a refund request is approved, the processing time may vary depending on the third-party payment gateway service providers. 
        We will notify you via email once the refund has been processed.
      </p>
      <h2 className="text-2xl font-bold text-orange-500 mb-4">5. Non-Refundable Situations</h2>
      <p className="text-lg mb-4">
        <FaArrowRight className="inline mr-2 text-orange-500" />
        Refunds will not be processed if the request is made after 24 hours from the time of payment. Additionally, any charges incurred due to 
        the processing of the payment by third-party service providers are non-refundable.
      </p>
      <h2 className="text-2xl font-bold text-orange-500 mb-4">6. Contact Us</h2>
      <p className="text-lg mb-4">If you have any questions about this Refund Policy, please contact us at:</p>
      <p className="text-lg mb-4">
       
        Ligovis Technical Solutions Pvt. Ltd.<br />
        Hyderabad<br />
        <a href="mailto:learn@ligovis.com" className="text-orange-500">learn@ligovis.com</a><br />
        +917671091557
      </p>
    </div>
  );
};

export default RefundPolicy;
