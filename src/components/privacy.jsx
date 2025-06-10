import React from "react";
import "../styles/privacy.css";

const Privacy = () => {
  return (
    <main className="privacy-container py-5">
      <div className="privacy-body bg-light p-4 p-md-5 rounded shadow-sm">
        <h1 className="privacy-title mb-4 text-center">Privacy Policy</h1>

        <p>
          <strong>Website:</strong>{" "}
          <a href="https://www.setlup.in" target="_blank" rel="noopener noreferrer">
            https://www.setlup.in
          </a>
        </p>

        <p>
          Welcome to Setlup.in. By accessing this website, we assume you accept these terms and conditions. Do not
          continue to use Setlup if you do not agree to all the terms and conditions stated on this page.
        </p>

        <section className="privacy-section mt-4">
          <h2>1. Introduction</h2>
          <p>
            Setlup.in is a professional platform providing startup legal services, company registration, tax filings,
            business compliance, and consultancy services across India. Our aim is to simplify legal and regulatory
            compliance for individuals and businesses through expert guidance and timely service delivery.
          </p>
        </section>

        <section className="privacy-section mt-4">
          <h2>2. Cookies</h2>
          <p>
            We employ the use of cookies. By accessing Setlup.in, you agree to use cookies in agreement with our Privacy
            Policy. Cookies are used to enhance user experience, analyze site traffic, and serve relevant content.
          </p>
        </section>

        <section className="privacy-section mt-4">
          <h2>3. License</h2>
          <p>
            Unless otherwise stated, Setlup and/or its licensors own the intellectual property rights for all material
            on Setlup.in. All intellectual property rights are reserved. You may access this from Setlup for your own
            personal use, subject to restrictions set in these terms and conditions.
          </p>
          <ul>
            <li>Republish material from Setlup</li>
            <li>Sell, rent, or sub-license material from Setlup</li>
            <li>Reproduce, duplicate or copy material from Setlup</li>
            <li>Redistribute content from Setlup (unless content is specifically made for redistribution)</li>
          </ul>
        </section>

        <section className="privacy-section mt-4">
          <h2>4. User Comments</h2>
          <p>
            Parts of this website may offer the opportunity for users to post and exchange opinions and information.
            Setlup does not filter, edit, publish or review comments prior to their presence on the website. Comments
            do not reflect the views and opinions of Setlup, its agents, or affiliates.
          </p>
          <p>
            Setlup reserves the right to monitor all comments and to remove any comments which can be considered
            inappropriate, offensive, or cause breach of these Terms and Conditions.
          </p>
          <p>You warrant and represent that:</p>
          <ul>
            <li>You are entitled to post the comments and have all necessary licenses and consents to do so.</li>
            <li>The comments do not infringe any intellectual property rights.</li>
            <li>The comments do not contain defamatory, offensive, indecent, or otherwise unlawful material.</li>
          </ul>
        </section>

        <section className="privacy-section mt-4">
          <h2>5. Hyperlinking to Our Content</h2>
          <p>The following organizations may link to our website without prior written approval:</p>
          <ul>
            <li>Government agencies</li>
            <li>Search engines</li>
            <li>News organizations</li>
            <li>Online directory distributors</li>
          </ul>
          <p>These organizations may link to our website as long as the link:</p>
          <ul>
            <li>Is not deceptive</li>
            <li>Does not falsely imply sponsorship or endorsement</li>
            <li>Fits within the context of the linking party’s site</li>
          </ul>
          <p>We may consider and approve other link requests from:</p>
          <ul>
            <li>Educational institutions and trade associations</li>
            <li>Legal and consulting firms</li>
            <li>Online service providers</li>
          </ul>
          <p>Approved organizations may link to our Website as follows:</p>
          <ul>
            <li>By use of our corporate name</li>
            <li>By use of the URL being linked to</li>
            <li>By use of any other description that fits the context of the linking party’s site</li>
          </ul>
        </section>

        <section className="privacy-section mt-4">
          <h2>6. iFrames</h2>
          <p>
            Without prior approval and written permission, you may not create frames around our web pages that alter
            the visual presentation or appearance of our website.
          </p>
        </section>

        <section className="privacy-section mt-4">
          <h2>7. Content Liability</h2>
          <p>
            We shall not be held responsible for any content that appears on your website if you link to us. You agree to
            protect and defend us against all claims arising on your website. No link(s) should appear on any website
            that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or
            advocates the infringement or other violation of, any third-party rights.
          </p>
        </section>

        <section className="privacy-section mt-4">
          <h2>8. Reservation of Rights</h2>
          <p>
            We reserve the right to request that you remove all links or any particular link to our website. You agree to
            immediately remove all links upon request. We also reserve the right to amend these terms and conditions and
            our linking policy at any time. By continuing to link to our website, you agree to be bound by and follow
            these terms.
          </p>
        </section>

        <section className="privacy-section mt-4">
          <h2>9. Disclaimer</h2>
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties, and
            conditions relating to our website and the use of this website.
          </p>
          <p>We do not warrant that:</p>
          <ul>
            <li>The website will always be available, or available at all</li>
            <li>The information on this website is complete, true, accurate, or non-misleading</li>
          </ul>
          <p>Nothing in this disclaimer will:</p>
          <ul>
            <li>Limit or exclude our or your liability for death or personal injury resulting from negligence</li>
            <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
            <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
          </ul>
        </section>

        <section className="privacy-section mt-4">
          <h2>10. Credit & Contact Information</h2>
          <p>
            This Terms and Conditions page was prepared for Setlup.in by professional drafting for legal and business
            purposes.
          </p>
          <p>If you have any questions regarding any of our terms, please contact us at:</p>
          <ul>
            <li>Email: <a href="mailto:support@setlup.in">support@setlup.in</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Privacy;
