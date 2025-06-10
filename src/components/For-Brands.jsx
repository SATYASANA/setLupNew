import React, { useState, useEffect } from 'react';
import '../styles/For-Brands.css';

const ForBrands = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const cards = [
    '/images/Brand.png',
    '/images/Brand1.png',
    '/images/Brand2.png',
    '/images/Brand3.png'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="brands-container">
      <div className="brands-background">
        <img src="/images/bgc.png" alt="Background" className="background-image" />
      </div>
      
      <div className="slider-container">
        <button className=" nav-brands" onClick={prevSlide}>
          <img src="/images/a3.png" alt="Previous" className= "nav-button-prev" />
        </button>

        <div className="cards-container">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${
                index === currentSlide ? 'active' : 
                index === (currentSlide + 1) % cards.length ? 'next' :
                index === (currentSlide - 1 + cards.length) % cards.length ? 'prev' : ''
              }`}
            >
              <img src={card} alt={`Card ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="nav-brands" onClick={nextSlide}>
          <img src="/images/a4.png" alt="Next" className= "nav-button-next" />
        </button>
      </div>
    </div>
  );
};

export default ForBrands;