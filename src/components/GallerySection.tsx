
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Restaurant interior with traditional Indian decor',
    category: 'interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    alt: 'Signature Indian curry dish presentation',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    alt: 'Chef preparing traditional tandoori dish',
    category: 'kitchen'
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    alt: 'Private dining area with ambient lighting',
    category: 'interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Mixologist creating a signature spice-infused cocktail',
    category: 'drinks'
  },
  {
    src: 'https://images.unsplash.com/photo-1625242662167-9ba73d268139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Interactive dining experience with projection mapping',
    category: 'technology'
  },
  {
    src: 'https://images.unsplash.com/photo-1532700918404-f82abd8e133c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Artistic Indian dessert with modern presentation',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1551887196-0036715e5ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Evening view of the restaurant facade with decorative lighting',
    category: 'interior'
  }
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'interior', name: 'Interior' },
  { id: 'food', name: 'Food' },
  { id: 'kitchen', name: 'Kitchen' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'technology', name: 'Technology' }
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-resto-cream to-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-resto-cream/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-resto-dark">
            Experience The <span className="text-primary">Atmosphere</span>
          </h2>
          <p className="text-resto-dark/80 max-w-2xl mx-auto">
            Step into a world where traditional Indian hospitality meets contemporary design, creating an unforgettable multi-sensory dining experience.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className={cn(
                "rounded-full px-5 py-1.5 text-sm transition-all duration-300",
                activeCategory === category.id 
                  ? "bg-primary text-white" 
                  : "bg-transparent text-resto-dark border-resto-dark/20 hover:border-primary/50 hover:text-primary"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className={cn(
                "group relative overflow-hidden rounded-lg hover-scale h-64 md:h-72",
                index % 5 === 0 ? "sm:col-span-2 sm:row-span-2 h-80 md:h-96" : ""
              )}
              onClick={() => setLightboxImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-resto-dark/70 via-resto-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                  <p className="text-primary text-sm capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <Button className="btn-primary">
            View More Photos
          </Button>
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-resto-dark/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute -top-12 right-0 text-white text-xl"
              onClick={() => setLightboxImage(null)}
            >
              ✕ Close
            </button>
            <img 
              src={lightboxImage} 
              alt="Gallery preview" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
