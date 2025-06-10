import React from "react";
import '../styles/refund.css';

const RefundPolicy = () => {
  return (
    <main className="refund-container">
      <div className="refund-body">
        <h1 className="refund-title text-center mb-4">Refund Policy</h1>

        <p>
          At Setlup.in, we strive to provide top-quality legal and business compliance services. We understand that sometimes you may want to request a refund. Please read our refund policy carefully to understand the conditions under which refunds may be issued.
        </p>

        <section className="refund-section mt-4">
          <h2>1. Services Covered</h2>
          <p>
            Our refund policy applies to all services provided through Setlup.in, including but not limited to startup legal services, company registration, tax filings, and consultancy.
          </p>
        </section>

        <section className="refund-section mt-4">
          <h2>2. Refund Eligibility</h2>
          <p>
            Refunds are generally <strong>not provided</strong> once a service has been rendered or filings submitted to government authorities, due to the nature of legal and compliance services.
          </p>
          <p>However, refunds may be considered in the following situations:</p>
          <ul>
            <li>If you cancel a service <strong>before any work has begun</strong> or before submission to any government body.</li>
            <li>If there is a <strong>proven error or fault</strong> on our part that affects service delivery.</li>
            <li>If you have been <strong>charged incorrectly</strong> or more than once for the same service.</li>
          </ul>
        </section>

        <section className="refund-section mt-4">
          <h2>3. Refund Process</h2>
          <p>To request a refund:</p>
          <ul>
            <li>Contact our support team at <a href="mailto:support@setlup.in">support@setlup.in</a> within <strong>7 days</strong> of the transaction date.</li>
            <li>Provide your order details, payment receipt, and reason for the refund request.</li>
            <li>Our team will review your request and respond within <strong>5 business days</strong>.</li>
          </ul>
          <p>
            If approved, refunds will be processed to the original payment method within <strong>7-10 business days</strong>.
          </p>
        </section>

        <section className="refund-section mt-4">
          <h2>4. Non-Refundable Fees</h2>
          <p>Please note that certain fees may be non-refundable, including but not limited to:</p>
          <ul>
            <li>Government filing fees or statutory charges once paid or submitted.</li>
            <li>Fees for work already performed or services partially completed.</li>
            <li>Consultation fees after the consultation session has been delivered.</li>
          </ul>
        </section>

        <section className="refund-section mt-4">
          <h2>5. Changes to Refund Policy</h2>
          <p>
            Setlup reserves the right to update or modify this Refund Policy at any time. Changes will be effective immediately upon posting on the website. Continued use of our services after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="refund-section mt-4">
          <h2>6. Contact Us</h2>
          <p>For questions or clarifications regarding this Refund Policy, please contact us:</p>
          <ul>
            <li>Email: <a href="mailto:support@setlup.in">support@setlup.in</a></li>
            {/* <li>Phone: [Insert official phone number]</li>
            <li>Address: [Insert registered business address]</li> */}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default RefundPolicy;
