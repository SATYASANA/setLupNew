import React, { useState, useEffect } from 'react';
import '../styles/For-Brands.css'; // keep this if other styles are here

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
        <button className="nav-brands" onClick={prevSlide}>
          <img src="/images/a3.png" alt="Previous" className="nav-button-prev" />
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
          <img src="/images/a4.png" alt="Next" className="nav-button-next" />
        </button>
      </div>

      {/* Mobile-only styles fix */}
      <style>{`
        @media (max-width: 575.98px) {
          .card {
            position: absolute;
            width: 200px;
            height: 95px;
            opacity: 0;
            transition: all 0.5s ease;
            transform: translateX(100%) scale(0.8);
            margin-top: 30%;
          }

          .card.active {
            opacity: 1;
            transform: translateX(0) scale(1);
            z-index: 2;
          }

          .card.prev,
          .card.next {
            opacity: 0;
            transform: translateX(100%) scale(0.8);
            z-index: 0;
          }

          .nav-brands {
            margin-top: -50px;
          }

          .nav-button-prev {
            margin-left: 200%;
            margin-top: 400%;
          }

          .nav-button-next {
            margin-left: -220%;
            margin-top: 400%;
          }

          .brands-container {
            height: 40vh;
            margin-top: -19px;
          }

          .background-image {
            object-fit: contain;
          }
        }

        @media (max-width: 375px) {
          .card {
            width: 215px;
            height: 95px;
            margin-top: 50%;
            margin-left: 2%;
          }

          .nav-button-prev {
            margin-left: 200%;
            margin-top: 490%;
          }

          .nav-button-next {
            margin-left: -230%;
            margin-top: 490%;
          }

          .brands-container {
            height: 60vh;
            margin-top: -90px;
          }
        }
      `}</style>
    </div>
  );
};

export default ForBrands;
