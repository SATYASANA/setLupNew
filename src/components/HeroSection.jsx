
// import React, { useState, useEffect } from "react";
// import "../styles/hero.css";

// const HeroSection = () => {
//   const [currentImage, setCurrentImage] = useState(0);
  
//   const images = [
//     "./images/hero.gif",
//     "./images/Hero2.png"
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev === 0 ? 1 : 0));
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="hero-wrapper">
//       <div className="hero-image-container">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Hero Section ${index + 1}`}
//             className={`hero-image ${index === currentImage ? 'active' : ''}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import React from "react";
// import "../styles/hero.css"; 
// import hero from '../assets/hero.gif';


// const HeroSection = () => {
//   return (
//     <div className="hero-wrapper">
//       <div className="hero-image-container">
//         <img
//           src={hero}
//           alt="Hero Animation"
//           className="hero-image img-fluid"
//         />
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


import React from "react";
import "../styles/hero.css";
import heroGif from "../assets/hero.gif";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="hero-image-container">
              <img
                src={heroGif}
                alt="Hero Animation"
                className="hero-image img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;