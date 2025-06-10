


import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How does SetLUp help in identifying product-market fit?",
      answer: "We conduct on-ground pre-launch studies, including surveys with retailers and end consumers, to validate demand and optimize your product positioning before a full-scale rollout."
    },
    {
      question: "What kind of distribution network does SetLUp provide?",
      answer: "SetLUp offers a plug-and-play network of experienced distributors across multiple territories, backed by technology for real-time visibility and performance tracking."
    },
    {
      question: "Do I retain control over pricing and branding?",
      answer: "SetLUp works as a distribution-led partner that purchases products from brands and then takes ownership of pricing strategy, retail placement, and market execution. While we collaborate closely with brand teams to stay aligned with the overall positioning, SetLUp drives all downstream decisions to ensure market success."
    },
    {
      question: "Can SetLUp support our marketing efforts?",
      answer: "Absolutely. We offer end-to-end brand building — from retail activation to influencer marketing and digital campaigns — tailored to your target audience."
    },
    {
      question: "How soon can we launch in a new market?",
      answer: "With our pre-onboarded distribution network, brands can go from market validation to on-ground availability in as little as 2-3 weeks, depending on scale and readiness."
    },
    {
      question: "What kind of brands does SetLUp offer for distribution?",
      answer: "We onboard fast-growing, well-supported FMCG brands with high market potential and strong repeat value."
    },
    {
      question: "Do I get exclusive rights to a territory?",
      answer: "Yes. Our digital territory mapping ensures that each distributor has exclusive rights within their allocated geography, eliminating overlap and conflict."
    },
    {
      question: "Does SetLUp provide sales support for the brands & products distributors invest in?",
      answer: "We provide complete sales support — including field team coordination, marketing material, retailer onboarding, and performance tracking through our tech platform."
    },
    {
      question: "Is there an app to manage orders and payments?",
      answer: "Yes. Our mobile app lets you track orders, manage inventory, monitor payments, and access schemes in real-time — all in one place."
    },
    {
      question: "What are the payment terms?",
      answer: "Payments are primarily made in advance or on delivery. However, eligible distributors may access B2B credit lines through our financing partners. Credit availability is subject to evaluation and approval based on predefined criteria."
    },
    {
      question: "How do I start ordering products through SetLUp?",
      answer: "Simply register with us via the app or through our local sales team. Once onboarded, you’ll get access to a wide range of high-ROI FMCG brands."
    },
    {
      question: "Will I receive orders on time?",
      answer: "Yes. Our distribution partners are tech-enabled for timely fulfilment, ensuring consistent stock availability at your store."
    },
    {
      question: "Are there benefits for regular purchases?",
      answer: "Definitely. We offer exciting trade schemes, loyalty rewards, and seasonal incentives that boost your margins."
    },
    {
      question: "Can I return unsold inventory?",
      answer: "Returns are managed brand-wise, depending on the policy. We facilitate clear return guidelines upfront to avoid confusion."
    },
    {
      question: "Who do I contact for support?",
      answer: "Our local support teams and helpline are always available for any operational, delivery, or payment-related issues."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="FA" className="faq-container">
      <div className="faq-image-section">
        <img src="/images/Person.png" alt="FAQ Illustration" className="faq-image" />
      </div>

      <div className="faq-content">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <span className="faq-icon">{activeIndex === index ? '×' : '+'}</span>
              </button>

              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
