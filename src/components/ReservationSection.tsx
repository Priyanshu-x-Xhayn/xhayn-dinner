
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const timeSlots = [
  '17:00', '17:30', '18:00', '18:30', '19:00', 
  '19:30', '20:00', '20:30', '21:00', '21:30'
];

const ReservationSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Reservation data:', formData);
    
    // Show success toast
    toast({
      title: "Reservation Request Sent",
      description: "We'll confirm your reservation shortly via email or phone.",
    });
    
    // Reset form (optional)
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    });
  };

  return (
    <section id="reservation" className="section-padding bg-gradient-to-b from-resto-dark to-black relative">
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            Reserve Your <span className="text-primary">Experience</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Secure your spot for a one-of-a-kind dining journey. Reservations are recommended as seating is limited.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Reservation Form */}
          <div className="glass-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white text-sm">Full Name*</label>
                  <Input
                    type="text"
                    name="name"
                    required
                    className="bg-white/5 border-white/10 text-white focus:border-primary"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-white text-sm">Email Address*</label>
                  <Input
                    type="email"
                    name="email"
                    required
                    className="bg-white/5 border-white/10 text-white focus:border-primary"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white text-sm">Phone Number*</label>
                  <Input
                    type="tel"
                    name="phone"
                    required
                    className="bg-white/5 border-white/10 text-white focus:border-primary"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-white text-sm">Number of Guests*</label>
                  <select
                    name="guests"
                    required
                    className="w-full rounded-md bg-white/5 border-white/10 text-white focus:border-primary px-3 py-2"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="9+">9+ Guests (Large Party)</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-white text-sm">Preferred Date*</label>
                  <Input
                    type="date"
                    name="date"
                    required
                    className="bg-white/5 border-white/10 text-white focus:border-primary"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-white text-sm">Preferred Time*</label>
                  <select
                    name="time"
                    required
                    className="w-full rounded-md bg-white/5 border-white/10 text-white focus:border-primary px-3 py-2"
                    value={formData.time}
                    onChange={handleChange}
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-white text-sm">Special Requests</label>
                <Textarea
                  name="message"
                  className="bg-white/5 border-white/10 text-white focus:border-primary min-h-[100px]"
                  placeholder="Dietary restrictions, special occasions, seating preferences..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                Request Reservation
              </Button>
              
              <p className="text-gray-400 text-xs text-center">
                * By submitting this reservation request, you agree to our reservation policy. 
                A confirmation will be sent once your reservation is verified.
              </p>
            </form>
          </div>
          
          {/* Restaurant Info */}
          <div className="lg:pl-8">
            <div className="glass-card rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Hours & Location</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-primary font-medium mb-2">Opening Hours</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Monday - Thursday</span>
                      <span>5:00 PM - 10:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Friday - Saturday</span>
                      <span>5:00 PM - 11:30 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>5:00 PM - 9:30 PM</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-primary font-medium mb-2">Location</h4>
                  <p className="text-gray-300">
                    123 Innovation Avenue<br />
                    Metropolis, NY 10001<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h4 className="text-primary font-medium mb-2">Contact</h4>
                  <p className="text-gray-300">
                    reservations@auroraeats.com<br />
                    +1 (212) 555-7890
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[250px]">
              <img 
                src="/images/map.jpg" 
                alt="Restaurant location map" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
