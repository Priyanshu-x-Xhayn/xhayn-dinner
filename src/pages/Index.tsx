
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ReservationSection from '@/components/ReservationSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href?.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              behavior: 'smooth',
              top: element.getBoundingClientRect().top + window.pageYOffset - 80, // Accounting for header
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    // Scroll animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const animationObserver = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(element => {
      animationObserver.observe(element);
    });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.querySelectorAll('.reveal').forEach(element => {
        animationObserver.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <TestimonialsSection />
        <ReservationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
