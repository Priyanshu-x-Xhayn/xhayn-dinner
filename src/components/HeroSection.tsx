
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown, Utensils, Calendar } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Indian thali
    'https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80', // Modern restaurant interior
    'https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'  // Indian spices
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Image slideshow effect
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-gradient-to-b from-resto-cream to-white">
      {/* Decorative patterns */}
      <div className="absolute inset-0 indian-pattern opacity-10 mix-blend-multiply"></div>
      <div className="absolute inset-0 spice-bg opacity-20 mix-blend-multiply"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Images */}
          <div className="w-full md:w-1/2 h-[450px] relative rounded-xl overflow-hidden shadow-2xl">
            {/* Background images slider */}
            {heroImages.map((img, index) => (
              <div 
                key={img}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out rounded-xl",
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                <img 
                  src={img} 
                  alt="Xhayn Dinner cuisine" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* Image frame decorative elements */}
            <div className="absolute top-3 left-3 w-16 h-16 border-t-4 border-l-4 border-primary z-20"></div>
            <div className="absolute bottom-3 right-3 w-16 h-16 border-b-4 border-r-4 border-primary z-20"></div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-1/2 text-left">
            <div className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              <h1 className="heading-xl mb-4 text-resto-dark font-serif">
                <span className="block opacity-0 animate-fadeInUp">Experience the Taste of</span>
                <span className="text-primary opacity-0 animate-fadeInUp delay-200 inline-block font-bold relative">
                  Xhayn Dinner
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary opacity-60 animate-shimmer"></span>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-resto-dark/80 max-w-2xl mb-8 opacity-0 animate-fadeInUp delay-300">
                Where traditional Indian flavors meet futuristic culinary innovations in an unforgettable dining experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeInUp delay-400">
                <Button className="btn-primary group flex items-center gap-2" 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Utensils className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Explore Menu</span>
                </Button>
                <Button className="btn-outline group flex items-center gap-2" 
                  onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Reserve a Table</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <button 
          className="flex flex-col items-center text-resto-dark hover:text-primary transition-colors duration-300"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm mb-2 opacity-80">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
