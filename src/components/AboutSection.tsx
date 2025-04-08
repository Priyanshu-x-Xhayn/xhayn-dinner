
import React from 'react';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-resto-cream/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-secondary/10 blur-3xl"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Our master chef preparing a signature dish" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="glass-card absolute -bottom-6 -right-6 md:right-6 p-6 rounded-xl w-full max-w-xs">
              <p className="text-lg font-semibold text-primary mb-2">15+ Years</p>
              <p className="text-resto-dark/80">Of culinary excellence and innovation</p>
            </div>
          </div>
          
          {/* Text side */}
          <div>
            <h2 className="heading-lg mb-6 text-resto-dark">
              A Culinary Journey Into The
              <span className="text-primary block mt-1">Future of Fine Dining</span>
            </h2>
            
            <p className="text-resto-dark/80 mb-6">
              Founded in 2020, Xhayn Dinner emerged from a vision to blend traditional Indian culinary artistry with cutting-edge technological presentation. Our mission is to create not just meals, but multi-sensory experiences that celebrate India's rich culinary heritage.
            </p>
            
            <p className="text-resto-dark/80 mb-8">
              Each dish is crafted with precision by our team of innovative chefs, who combine locally-sourced, premium ingredients with authentic spices and modern techniques to create an unforgettable dining experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              {[
                { number: '20+', text: 'Award-Winning Dishes' },
                { number: '15', text: 'Signature Spice Blends' },
                { number: '100%', text: 'Sustainable Sourcing' }
              ].map((stat, index) => (
                <div key={index} className="glass-card p-4 rounded-lg hover-scale">
                  <p className="text-3xl font-bold text-primary mb-1">{stat.number}</p>
                  <p className="text-sm text-resto-dark/80">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
