
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-lg border-b border-primary/10' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-resto-dark group">
          <span className="inline-block relative overflow-hidden">
            <span className="relative z-10 text-resto-dark group-hover:text-primary transition-colors duration-300">XHAYN</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </span>
          <span className="text-primary font-serif italic ml-2">Dinner</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-resto-dark hover:text-primary relative group overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300">{item}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Reservation Button */}
        <Button 
          className="hidden md:flex items-center gap-2 bg-primary text-white hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300"
          onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span>Reserve a Table</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
        </Button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-resto-dark hover:text-primary transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button 
          className="absolute top-6 right-6 text-resto-dark hover:text-primary transition-colors duration-300"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={24} />
        </button>
        
        <div className="space-y-6 text-center">
          {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item, index) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={cn(
                "block text-2xl text-resto-dark hover:text-primary transition-colors duration-300",
                isMenuOpen ? "animate-fadeInUp opacity-0" : ""
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
        
        <Button 
          className="mt-4 bg-primary text-white hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300"
          style={{ animationDelay: '0.5s' }}
          onClick={() => {
            setIsMenuOpen(false);
            document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Reserve a Table
        </Button>
      </div>
    </header>
  );
};

export default Header;
