
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 md:pt-40 flex flex-col justify-center bg-catering-dark relative overflow-hidden"
    >
      {/* Hero Image */}
      <div className="w-full h-[60vh] md:h-[70vh] relative">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/uploads/hero-bbq.jpg" 
          alt="Pacific Island Catering" 
          className="w-full h-full object-cover"
        />
        
        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl bg-black/50 p-8 md:p-10">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Traditional Pacific Island Cuisine
              </h1>
              <p className="font-montserrat text-lg text-gray-100 mb-8">
                Premium catering featuring authentic Pacific Island dishes with Asian and American influences
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-catering-primary hover:bg-catering-secondary text-white font-bold py-3 px-8"
                >
                  <a href="#menu">View Our Menu</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-bold py-3 px-8"
                >
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Info Bar */}
      <div className="bg-catering-primary text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-playfair text-xl font-bold mb-2">Premium Catering</h3>
              <p className="font-montserrat">For all your special events</p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold mb-2">Authentic Cuisine</h3>
              <p className="font-montserrat">Pacific Island flavors</p>
            </div>
            <div>
              <h3 className="font-playfair text-xl font-bold mb-2">Special Events</h3>
              <p className="font-montserrat">Weddings, parties & corporate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
