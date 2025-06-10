// import React from "react";
// import "../styles/branding.css";

// const logos = [
//   "/images/logo-1.png",
//   "/images/logo-2.png",
//   "/images/logo-3.png",
//   "/images/logo-4.png",
//   "/images/logo-5.png",
// ];

// const BrandingPartners = () => {
//   return (
//     <section className="branding">
//       <h2>Our Branding Partners</h2>
//       <div className="logo-marquee">
//         <div className="logo-track">
//           {[...logos, ...logos].map((logo, index) => (
//             <div key={index} className="logo-box">
//               <img src={logo} alt={`Partner ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BrandingPartners;


import React from "react";
import "../styles/branding.css";

const logos = [
  "/images/logo-1.png",
  "/images/logo-2.png",
  "/images/logo-3.png",
  "/images/logo-4.png",
  "/images/logo-5.png",
];

const BrandingPartners = () => {
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="branding mt-5">
      <h2 className="section-title">Our Branding Partners</h2>
      <div className="logo-marquee">
        <div className="logo-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="logo-box">
              <img src={logo} alt={`Partner ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingPartners;

