// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import '../styles/Footer.css';

// // Import social media icons
// import fb from '../assets/fb.png';
// import ig from '../assets/ig.png';
// import yt from '../assets/yt.png';
// import twt from '../assets/twt.png';
// import lc from '../assets/lc.png';
// import call from '../assets/call.png';

// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubscribe = (e) => {
//     e.preventDefault();

//     if (!email) {
//       alert("Please enter an email");
//       return;
//     }

//     const templateParams = {
//       user_email: email,
//     };

//     emailjs
//       .send(
//         "service_wfa0lu6",     // Replace with your EmailJS service ID
//         "template_kq3w9d7",    // Replace with your EmailJS template ID
//         templateParams,
//         "39Ivcoaoctqgui1u7"         // Replace with your EmailJS public key
//       )
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response.status, response.text);
//           alert("Subscription email sent to your Gmail!");
//           setEmail("");
//         },
//         (err) => {
//           console.log("FAILED...", err);
//           alert("Failed to send. Try again.");
//         }
//       );
//   };

//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section">
//           <h3>Solutions</h3>
//           <ul>
//             <li><a href='/' className="text-white">Distribution</a></li>
//             <li><a href='/' className='text-white'>Marketing </a></li>
//             <li><a href='/' className='text-white'>Sales</a></li>
//             <li><a href='/' className='text-white'>Last Mile Fulfillment</a></li>
//             <li><a href='/Terms&Conditions'>Terms & Conditions</a></li>
//             <li>Refund Policy</li>
//           </ul>
//         </div>

//         <div className="footer-section">
//           <h3>Get in Touch</h3>
//           <div className="contact-info">
//             <div className="contact-item">
//               <img src={lc} alt="Location" className="contact-icon" />
//               <p>
//                 Registered office - No 235, 13th cross, Hoyasala Nagar 2nd stage,
//                 <br />
//                 Indiranagar, Bangalore - 560038,
//                 <br />
//                 Karnataka, India
//               </p>
//             </div>
//             <div className="contact-item">
//               <img src={call} alt="Phone" className="contact-icon" />
//               <p>+91 93414 77175</p>
//             </div>
//             <div className="contact-item">
//               <img src={call} alt="Email" className="contact-icon" />
//               <p>business@setup.in</p>
//             </div>
//           </div>
//         </div>

//         <div className="footer-section">
//           <h3>Social Media</h3>
//           <div className="social-icons">
//             <a href="#"><img src={fb} alt="Facebook" /></a>
//             <a href="#"><img src={twt} alt="Twitter" /></a>
//             <a href="#"><img src={ig} alt="Instagram" /></a>
//             <a href="#"><img src={yt} alt="YouTube" /></a>
//           </div>
//         </div>

//         <div className="footer-section">
//           <h3>Join a Newsletter</h3>
//           <form className="newsletter-form" onSubmit={handleSubscribe}>
//             <label>Your Email</label>
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button type="submit">Subscribe</button>
//           </form>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Footer.css";
// Import social media icons
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
// import yt from "../assets/yt.png";
import link from "../assets/link.png";
import lc from "../assets/lc.png";
import call from "../assets/call.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter an email");
      return;
    }
    const templateParams = {
      user_email: email,
    };
    emailjs
      .send(
        "service_wfa0lu6", // Replace with your EmailJS service ID
        "template_kq3w9d7", // Replace with your EmailJS template ID
        templateParams,
        "39Ivcoaoctqgui1u7" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Subscription email sent to your Gmail!");
          setEmail("");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send. Try again.");
        }
      );
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Solutions</h3>
          <ul>
            <li>Distribution</li>
            <li>Marketing</li>
            <li>Sales</li>
            <li>Last Mile Fulfillment</li>
           <li>
  <Link to="/privacy" style={{ color: 'white' }} className="footer-link">
    Privacy
  </Link>
</li>
<li>
  <Link to="/RefundPolicy" style={{ color: 'white' }} className="footer-link">
    Refund Policy
  </Link>
</li>


          </ul>
        </div>
        <div className="footer-section">
  <h3>Get in Touch</h3>
  <div className="contact-info">
    <div className="contact-item">
      <img src={lc} alt="Location" className="contact-icon" />
      <p>
        Registered office - No 235,<br />
        13th Cross,<br />
        Hoyasala Nagar 2nd Stage,<br />
        Indiranagar, Bangalore - 560038,<br />
        Karnataka, India
      </p>
    </div>
    <div className="contact-item">
      <img src={call} alt="Phone" className="contact-icon" />
      <p>+91 93414 77175</p>
    </div>
    <div className="contact-item">
      <img src={call} alt="Email" className="contact-icon" />
      <p>business@setup.in</p>
    </div>
  </div>
{/* </div> */}

        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1A4TiB8Ytv/">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/company/setlup/">
              <img src={link} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/setlup.in?igsh=MXJrZXgzOXo5ejk4Zg==">
              <img src={ig} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Join a Newsletter</h3>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <label>Your Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};
export default Footer;