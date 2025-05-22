import React, { useState, useEffect } from 'react';
import { heroSlides } from '../utils/constants';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].bgColor} transition-all duration-1000`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="text-white space-y-2 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-pulse">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl opacity-90">
                {heroSlides[currentSlide].subtitle}
              </p>
              <button className="bg-white text-gray-900 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 text-sm sm:text-base">
                Shop Now
              </button>
            </div>
            <div className="hidden sm:block">
              <img 
                src={heroSlides[currentSlide].image} 
                alt={heroSlides[currentSlide].title}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain animate-bounce"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;