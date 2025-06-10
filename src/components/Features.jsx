import "../styles/Features.css";
import SupportIcon from "../assets/Support.png";
import networkIcon from "../assets/network.png";
import logisticsIcon from "../assets/logistics.png";
import servicesIcon from "../assets/services.png";
import RobustIcon from "../assets/Robust.png";
import financeIcon from "../assets/finance.png";
const Features = () => {
  return (
    <div className="features-container">
      {/* Mobile-only full image */}
      {/* <div className="mobile-full-image-container">
        <img src="/images/Full.png" alt="Features Overview" className="mobile-full-image" />
      </div> */}
      {/* Desktop-only content */}
      <div className="desktop-only-content">
        {/* Background */}
        <div className="background-image-features" />
        {/* Heading and Subheading */}
        <div className="features-heading animate-rise">
          <h1>
            <span className="highlight">SetLUp</span> Full Stack B2B Marketplace
          </h1>
          <h2>Our Features</h2>
        </div>
        {/* Animated Left-side Image */}
        <img src="/images/an.png" alt="Animated Left" className="left-animation" />
        {/* Animated Dashboard and Cards */}
        <div className="dashboard-wrapper">
          <img src="/images/db.png" alt="Dashboard" className="dashboard-image" />
          <div className="cards-container">
           <div className="feature-card-wrapper">
             <div className="feature-card">
              <img src={networkIcon} alt="Network" />
              <p>Verified Network of Buyers & Sellers </p>
            </div>
            <div className="feature-card">
              <img src={servicesIcon} alt="Services" />
             <p>End to End Distribution<br/> Services</p>
            </div>
            <div className="feature-card">
              <img src={logisticsIcon} alt="Logistics" />
             <p>Crowd Sources <br/>Logistics</p>
            </div>
            <div className="feature-card  ">
              <img src={financeIcon} alt="Finance"/>
              <p> B2B <br/>Finance</p>
            </div>
            <div className="feature-card ">
              <img src={RobustIcon} alt="Robust" />
              <p>Robust Technology <br/>Stack</p>
            </div>
            <div className="feature-card ">
              <img src={SupportIcon} alt="Support" />
              <p>Dedicated Customer <br/>Support</p>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;