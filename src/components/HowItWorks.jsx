import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="setup-container how-it mt-5">
      {/* Left Thunderbolt */}
      <img 
        src="/images/ThunderBolt.png" 
        alt="Thunderbolt left" 
        className="thunder thunder-left"
      />

      {/* Right Thunderbolt */}
      <img 
        src="/images/ThunderBolt.png" 
        alt="Thunderbolt right" 
        className="thunder thunder-right"
      />

      <h2>How it works?</h2>
      <p>Scaling a Brand has never been easier!</p>
      
      <img 
        src="/images/How-it-worksvisuals.png" 
        alt="How it works - Brand scaling process"
        className="setup-image setup-new"
      />
    </div>
  );
};

export default HowItWorks;
