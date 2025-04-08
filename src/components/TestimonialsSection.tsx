
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Food Blogger',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    quote: 'Xhayn Dinner created a sensory experience that transported me back to my grandmother\'s kitchen in Mumbai, yet with an innovative twist that felt like a culinary journey into the future.',
    rating: 5
  },
  {
    id: 2,
    name: 'Vikram Malhotra',
    role: 'Business Executive',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    quote: 'The perfect blend of authentic Indian flavors with modern presentation. The interactive table projections that tell the story of each dish\'s origin is something I\'ve never experienced before.',
    rating: 5
  },
  {
    id: 3,
    name: 'Aisha Patel',
    role: 'Travel Influencer',
    image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80',
    quote: 'After dining at restaurants across India and beyond, Xhayn Dinner stands out for its immersive dining concept. The spice-infused cocktails are a revelation!',
    rating: 4
  },
  {
    id: 4,
    name: 'Raj Kapoor',
    role: 'Celebrity Chef',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    quote: 'As a chef specializing in fusion cuisine, I\'m rarely impressed, but Xhayn Dinner\'s molecular gastronomy approach to traditional Indian dishes is groundbreaking. Pure genius!',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-resto-cream">
      {/* Decorative elements */}
      <div className="absolute inset-0 indian-pattern opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-primary/10 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className={cn(
          "text-center mb-12 transform transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="flex justify-center items-center mb-4">
            <div className="h-px w-12 bg-primary"></div>
            <h2 className="heading-lg px-4 font-serif text-resto-dark">
              Guest <span className="text-primary">Experiences</span>
            </h2>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <p className="text-resto-dark/80 max-w-2xl mx-auto">
            Discover what our guests have to say about their Xhayn Dinner journey.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className={cn(
          "relative max-w-4xl mx-auto transition-all duration-1000 transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        )}>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="glass-card rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20 hover:border-primary transition-colors duration-300">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex mb-4 text-primary">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} fill={i < testimonial.rating ? "currentColor" : "none"} className={i < testimonial.rating ? "text-primary" : "text-gray-600"} />
                          ))}
                        </div>
                        
                        <blockquote className="text-resto-dark text-lg md:text-xl italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div>
                          <p className="text-resto-dark font-semibold">{testimonial.name}</p>
                          <p className="text-resto-dark/60">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-primary w-8" 
                    : "bg-resto-dark/20 hover:bg-resto-dark/40"
                )}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 w-10 h-10 rounded-full bg-white/70 text-resto-dark flex items-center justify-center hover:bg-primary/80 hover:text-white transition-colors backdrop-blur-sm"
            onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-0 w-10 h-10 rounded-full bg-white/70 text-resto-dark flex items-center justify-center hover:bg-primary/80 hover:text-white transition-colors backdrop-blur-sm"
            onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Decorative mandala divider */}
        <div className="mandala-divider mt-16 opacity-60"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
