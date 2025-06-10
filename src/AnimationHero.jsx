import React, { useEffect, useRef, useState } from 'react';
import './networkHero.css';



const NODE_COUNT = 200;
const WIDTH = window.innerWidth;
const HEIGHT = 700;

const generateNodes = () =>
  Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * WIDTH,
    y: Math.random() * HEIGHT,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: Math.random() * 3 + 1,
  }));

const leftTexts = [
  "Get Real-Time Visibility into your Supply Chain – From Factory to Retail",
  "Expand your Brand reach nation wide through an Established Network",
  "Improve Distribution Efficiency – Drive Higher Profits"
];

const rightTexts = [
  "SetLUp – India’s Fastest Distribution Network",
  "Building India's Fastest Distribution Network",
  "Build Smarter Supply Chains with SetLUp"
];

const images = ["/images/data-analysis.png", "/images/expand-your.png", "/images/indianMap.png"];

export default function AnimationHero() {
  const canvasRef = useRef(null);
  const nodesRef = useRef(generateNodes());

  const [index, setIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  // Animate canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const animate = () => {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      const nodes = nodesRef.current;

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x <= 0 || node.x >= WIDTH) node.vx *= -1;
        if (node.y <= 0 || node.y >= HEIGHT) node.vy *= -1;
      });

      nodes.forEach((a, i) => {
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 130})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });

      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // Cycle content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % leftTexts.length);
      setAnimateKey((prev) => prev + 1); // retrigger animation
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container">
      <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} />
      <div className="hero-content">
        <div key={animateKey + '-left'} className="hero-text-left animate-left">
          <h2>{leftTexts[index]}</h2>
        </div>

        <div key={animateKey + '-image'} className="hero-image5 animate-top">
          <img src={images[index]} alt="SetLUp Showcase" />
        </div>

        <div key={animateKey + '-right'} className="hero-text-right animate-right">
        {/* <img  src="/images/SetLUp.png"/> */}
        <img src="images/SetLUp.png" alt="" />
          <p>{rightTexts[index]}</p>
        </div>
      </div>

      <div className="wave" />
    </section>
  );
}
