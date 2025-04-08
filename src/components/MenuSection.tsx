
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Menu data
const menuCategories = [
  {
    id: 'starters',
    name: 'Starters',
    items: [
      {
        name: 'Levitating Truffle Spheres',
        description: 'Aromatic black truffle mousse with gold leaf, suspended over a bed of mushroom consommé',
        price: '$24',
        image: '/images/dish1.jpg',
        tags: ['Signature', 'Vegan Option']
      },
      {
        name: 'Nebula Tartare',
        description: 'Hand-cut Wagyu beef with caviar pearls, nitrogen-frozen mustard cream, and holographic garnish',
        price: '$32',
        image: '/images/dish2.jpg',
        tags: ['Spicy']
      },
      {
        name: 'Luminescent Ocean Crudo',
        description: 'Thinly sliced bioluminescent scallops with yuzu foam, sea salt, and edible flowers',
        price: '$28',
        image: '/images/dish3.jpg',
        tags: ['Seafood']
      }
    ]
  },
  {
    id: 'mains',
    name: 'Main Courses',
    items: [
      {
        name: 'Architectural Miso Black Cod',
        description: 'Geometric cuts of 48-hour miso-marinated black cod with smoked dashi, crispy lotus, and hologram garnish',
        price: '$45',
        image: '/images/dish4.jpg',
        tags: ['Signature', 'Gluten-Free']
      },
      {
        name: 'Stratosphere Lamb',
        description: 'Sous-vide lamb loin encased in herb vapor, with deconstructed ratatouille and floating elements',
        price: '$52',
        image: '/images/dish5.jpg',
        tags: ['Hot']
      },
      {
        name: 'Aurora Risotto',
        description: 'Color-changing wild mushroom risotto with laser-etched parmesan crisp and aromatic truffle fog',
        price: '$38',
        image: '/images/dish6.jpg',
        tags: ['Vegetarian']
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      {
        name: 'Quantum Chocolate Sphere',
        description: 'Dark chocolate orb that dissolves with pour-over plasma-heated passion fruit caramel, revealing textures within',
        price: '$22',
        image: '/images/dish7.jpg',
        tags: ['Signature', 'Contains Alcohol']
      },
      {
        name: 'Levitating Soufflé',
        description: 'Magnetically suspended raspberry soufflé with time-frozen shattered cream and edible gold dust',
        price: '$26',
        image: '/images/dish8.jpg',
        tags: ['Hot']
      },
      {
        name: 'Nebula Sorbet Collection',
        description: 'Galaxy-inspired sorbets that change flavor with temperature, served on a cooling stone with edible stars',
        price: '$19',
        image: '/images/dish9.jpg',
        tags: ['Vegan']
      }
    ]
  },
  {
    id: 'drinks',
    name: 'Signature Drinks',
    items: [
      {
        name: 'Holographic Martini',
        description: 'Projection-mapped martini with premium vodka, shifting visual elements, and molecular olive sphere',
        price: '$24',
        image: '/images/drink1.jpg',
        tags: ['Contains Alcohol']
      },
      {
        name: 'Smoking Nebula',
        description: 'Bourbon-based cocktail with aromatherapy smoke, bitters, and hovering spice garnish',
        price: '$28',
        image: '/images/drink2.jpg',
        tags: ['Signature', 'Contains Alcohol']
      },
      {
        name: 'Zero-Gravity Elixir',
        description: 'Non-alcoholic blend of clarified fruits with floating flavor spheres and aromatic cloud',
        price: '$18',
        image: '/images/drink3.jpg',
        tags: ['Alcohol-Free']
      }
    ]
  }
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  return (
    <section id="menu" className="section-padding bg-resto-dark relative">
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-900/20 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Our <span className="text-primary">Curated Menu</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Each dish is crafted as a unique sensory experience, combining innovative techniques with premium ingredients to create culinary artistry that transcends traditional dining.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className={cn(
                "rounded-full px-6 py-2 transition-all duration-300",
                activeCategory === category.id 
                  ? "bg-primary text-white" 
                  : "bg-transparent text-white border-white/20 hover:border-primary/50 hover:text-primary"
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.find(c => c.id === activeCategory)?.items.map((item, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl overflow-hidden hover-scale group"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={item.image || '/images/placeholder.svg'} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-primary font-semibold">
                    {item.price}
                  </p>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags?.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
