
import React, { useState } from 'react';
import "../styles/navbar.css";
import setlogo from '../assets/setlogo.png';
import { Menu, X, ArrowLeft, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
       <div
       className="navbar-logo"
       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
       style={{ cursor: "pointer" }}
       >
        <img src={setlogo} alt="SetLUp Logo" />
      </div>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="navbar-links desktop-nav">
          <a href="#community">The Community</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#services">Services</a>
          {/* <button href="#FA" className="get-started-btn">Get Started</button> */}
          <button
          className="get-started-btn" 
  onClick={() => {
    const faqSection = document.getElementById("FA");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Get Started
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <ArrowRight size={24} onClick={toggleSidebar} className="back-arrow" />
          </div>
          <div className="sidebar-content">
            <a href="#community" onClick={toggleSidebar}>The Community</a>
            <a href="#how-it-works" onClick={toggleSidebar}>How It Works</a>
            <a href="#services" onClick={toggleSidebar}>Services</a>
            <button className="get-started-btn" onClick={toggleSidebar}>Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;