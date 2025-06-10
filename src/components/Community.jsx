import React from "react";
import "../styles/community.css";

import Brands from "/images/Brands.png"; // Replace with your actual image paths
import Distributors from "/images/Distributors.png";
import Retailers from "/images/Retailers.png";

const communityData = [
  {  image: Brands },
  {  image: Distributors },
  {  image: Retailers}
];

const Community = () => {
  return (
    <section   id="community" className="community mt-5">
      <h2>The Community</h2>
      <p>We Are Building For</p>
      <div className="community-cards">
        {communityData.map((item, index) => (
          <div className="community-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Community;
