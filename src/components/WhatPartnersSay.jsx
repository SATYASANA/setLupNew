import React, { useState, useEffect } from 'react';
import '../styles/WhatPartnersSay.css';

const testimonials = [
  { id: 1, image: '/images/Test-1.png' },
  { id: 2, image: '/images/Test-2.png' },
  { id: 3, image: '/images/Test-3.png' }
];

const WhatPartnersSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Auto-rotate every 4 seconds

    return () => clearInterval(interval);
  }, []); // Run once on mount to avoid resetting interval

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="testimonial-container">
      <h1>What Partners say about SetLUp</h1>
      
      <div className="carousel-container">
        <button className="nav-button prev" onClick={handlePrev}>
          <img src="/images/a3.png" alt="Previous" />
        </button>

        <div className="testimonial-carousel">
          {testimonials.map((testimonial, index) => {
            let position = 'next';
            if (index === currentIndex) {
              position = 'active';
            } else if (
              index === (currentIndex - 1 + testimonials.length) % testimonials.length
            ) {
              position = 'prev';
            }

            return (
              <div key={testimonial.id} className={`testimonial-card ${position}`}>
                <img src={testimonial.image} alt={`Testimonial ${testimonial.id}`} className="testimonial-image" />
              </div>
            );
          })}
        </div>

        <button className="nav-button next" onClick={handleNext}>
        <img src="/images/a4.png" alt="Next" />
        </button>
      </div>

      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WhatPartnersSay;
