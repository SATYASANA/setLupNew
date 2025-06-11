// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App




// import React from "react";
// import { useState } from 'react'
// import Navbar from './components/Navbar'; // Ensure correct path
// import './index.css';
// import HeroSection from "./components/HeroSection";
// import Features from "./components/Features";
// import Community from "./components/Community";
// import BrandingPartners from "./components/Branding";
// import HowItWorks from "./components/HowItWorks";
// import Fordistributor from "./components/For-distributors";
// import ForRetailer from "./components/For-Retailers";
// import WhatPartnersSay from "./components/WhatPartnersSay";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";
// import ForBrands from "./components/For-Brands";
// import ScaleBrands from "./components/ScaleBrands";



// const App = () => {
//   return (
//     <div>
  
//       <Navbar />
//       <HeroSection/>
//       <Features/>
//       <Community/>
//       <BrandingPartners/>
//       <ForBrands/>
//       <HowItWorks/>
//       <ScaleBrands/>
//       <Fordistributor/>
//       <ForRetailer/>
//       <WhatPartnersSay/>
//       <FAQ/>
//       <Footer/>

//       {/* <h1>Welcome to the Static Site</h1> */}
      
//     </div>
//   );
// };

// export default App;


import React from "react";
import { useState } from 'react'
import Navbar from './components/Navbar'; // Ensure correct path
import './index.css';
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Community from "./components/Community";
// import BrandingPartners from "./components/Branding";
import HowItWorks from "./components/HowItWorks";
import Fordistributor from "./components/For-distributors";
import ForRetailer from "./components/For-Retailers";
// import WhatPartnersSay from "./components/WhatPartnersSay";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ForBrands from "./components/For-Brands";
import ScaleBrands from "./components/ScaleBrands";
import { Routes, Route } from "react-router-dom";
// import TermsAndConditions from "./components/TermsAndConditions"; 
import RefundPolicy from "./components/RefundPolicy";


import AnimationHero from "./AnimationHero";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div>
          {/* Your original App layout */}
          <Navbar />
          {/* <HeroSection /> */}
          <AnimationHero/>
          <Features />
          <Community />
          {/* <BrandingPartners /> */}
          <ForBrands />
          <HowItWorks />
          <ScaleBrands />
          <Fordistributor />
          <ForRetailer />
          {/* <WhatPartnersSay /> */}
          <FAQ />

          <Footer />
        </div>
      } />
      
       <Route path="/RefundPolicy" element={<RefundPolicy />} />
    </Routes>
  );
};
export default App;
