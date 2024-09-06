import React, { useState, useEffect } from 'react';
import './home-banner.css';

const HomeBanner = ({ characters }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [direction, setDirection] = useState('right'); // 'right' or 'left'
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const showDuration = 3000; // Temps pendant lequel le personnage est affiché
    const animationDuration = 2000; // Durée de l'animation d'entrée/sortie

    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((prevIndex) => (prevIndex + 1) % characters.length);
        setDirection((prevDirection) => (prevDirection === 'right' ? 'left' : 'right'));
        setIsAnimating(false);
      }, animationDuration);
    }, showDuration + animationDuration);

    return () => clearInterval(interval);
  }, [nextIndex, characters.length]);

  return (
    <div className="home-banner-wrapper">
      <div
        className={`home-banner-slide from-right ${
          isAnimating
            ? direction === 'right'
              ? 'home-banner-slide-out-right'
              : 'home-banner-slide-out-left'
            : ''
        }`}
      >
        <div className="home-banner-content">
          <div className="fighter-infos">
            <span>{characters[currentIndex].name}</span>
            <span>{characters[currentIndex].description}</span>
          </div>
          <div className="img-fighter-container">
            <img src={characters[currentIndex].image} alt={characters[currentIndex].name} />
          </div>
        </div>
      </div>

      <div
        className={`home-banner-slide from-left ${
          isAnimating
            ? direction === 'right'
              ? 'home-banner-slide-in-left'
              : 'home-banner-slide-in-right'
            : ''
        }`}
      >
        <div className="home-banner-content">
          <div className="fighter-infos">
            <span>{characters[nextIndex].name}</span>
            <span>{characters[nextIndex].description}</span>
          </div>
          <div className="img-fighter-container">
            <img src={characters[nextIndex].image} alt={characters[nextIndex].name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
