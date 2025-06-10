import React from "react";
import "../styles/setupBrands.css";
import setupBrandImg from "/images/setup-for-brands.png"; // Replace with your actual image

const SetupForBrands = () => {
  return (
    <section className="setup-brands">
      <div className="setup-container">
        <div className="setup-text">
          <h2>SetUp for Brands</h2>
          <p>
            Our Full Stack Tech and Services support helps brands simplify distribution and reach retailers directly across India.
          </p>
        </div>
        <div className="setup-image">
          <img src={setupBrandImg} alt="SetUp for Brands" />
        </div>
      </div>
    </section>
  );
};

export default SetupForBrands;
