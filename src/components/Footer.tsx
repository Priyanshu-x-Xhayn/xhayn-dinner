
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-resto-dark text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 indian-pattern opacity-10"></div>
      <div className="absolute inset-0 spice-bg opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute bottom-32 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* About */}
          <div className="reveal">
            <h3 className="text-xl font-bold mb-6">
              <span className="text-white font-serif">XHAYN</span>
              <span className="text-primary font-serif italic ml-2">Dinner</span>
            </h3>
            <p className="text-gray-300 mb-6">
              A culinary journey that blends India's rich heritage with innovative molecular gastronomy, creating an immersive dining experience unlike any other.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={18} />, name: 'facebook' },
                { icon: <Instagram size={18} />, name: 'instagram' },
                { icon: <Twitter size={18} />, name: 'twitter' },
                { icon: <Youtube size={18} />, name: 'youtube' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={`#${social.name}`} 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <span className="text-gray-400 group-hover:text-primary transition-colors duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="reveal">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', link: '#about' },
                { name: 'Our Menu', link: '#menu' },
                { name: 'Reservations', link: '#reservation' },
                { name: 'Private Events', link: '#' },
                { name: 'Gift Cards', link: '#' },
                { name: 'Careers', link: '#' }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="reveal">
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start group">
                <MapPin size={18} className="mr-3 text-primary transform group-hover:scale-110 transition-transform duration-300 mt-1" />
                <span>
                  123 Spice Avenue<br />
                  Mumbai, India 400001
                </span>
              </li>
              <li className="flex items-center group">
                <Phone size={18} className="mr-3 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                <span>+91 (123) 456-7890</span>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="mr-3 text-primary transform group-hover:scale-110 transition-transform duration-300" />
                <span>info@xhayndinner.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="reveal">
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for special events, new menu items, and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 focus:border-primary focus:ring-primary/20"
              />
              <Button className="bg-primary hover:bg-primary/90 group">
                <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Xhayn Dinner. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Cookie Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
