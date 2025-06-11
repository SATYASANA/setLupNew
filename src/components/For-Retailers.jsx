import React, { useEffect, useRef, useState } from 'react';
import '../styles/For-distributors.css';

const countersData = [
  { image: "/images/counter-1.png", target: 30, suffix: "+", label: "Cities & Towns" },
  { image: "/images/counter-2.png", target: 50, suffix: "+", label: "DISTRIBUTION PARTNERS" },
  { image: "/images/counter-3.png", target: 5000, suffix: "+", label: "RETAIL COUNTERS" },
];

const Counter = ({ image, target, suffix, label, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    setCount(0); // Reset count before starting
    let current = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 30));

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [trigger, target]);

  return (
    <div className='counter-inner'>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h4>{count}{suffix}</h4>
        <p>{label}</p>
      </div>
    </div>
  );
};

const ForRetailer = () => {
  const counterRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          
          setVisible(false);
          setTimeout(() => setVisible(true), 50);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  return (
    <div>
      <div className="Retailer-container">
        <div className='retailer-name'>
          <h2><span><img src="/images/SetLUp.png" alt="" /></span> for retailer</h2>
        </div>

        <div className='retailer-boy'>
          <img src="/images/create-chat.png" alt="" />
        </div>

        <div className='retailer-inner'>
          {[...Array(5)].map((_, i) => (
            <div key={i}><img src="/images/highrOI.png" alt="" /></div>
          ))}
        </div>
      </div>

      <div className="our-reach" ref={counterRef}>
        <h3>Our Reach</h3>
        <div className='reach-counter'>
          {countersData.map((item, i) => (
            <Counter
              key={i}
              image={item.image}
              target={item.target}
              suffix={item.suffix}
              label={item.label}
              trigger={visible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForRetailer;
