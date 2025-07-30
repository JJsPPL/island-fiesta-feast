
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 md:pt-40 flex flex-col justify-center bg-catering-dark relative overflow-hidden"
    >
      {/* Hero Content - Further reduced height */}
      <div className="w-full bg-catering-dark flex items-center py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div className="w-full max-w-xl p-8 md:p-10">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Traditional Pacific Island Cuisine
              </h1>
              <p className="font-montserrat text-lg text-gray-100 mb-8">
                Premium catering featuring authentic Pacific Island dishes with Asian and American influences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  className="bg-catering-primary hover:bg-catering-secondary text-white font-bold py-3 px-8"
                >
                  <a href="#menu">View Our Menu</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-catering-dark bg-white hover:bg-white/90 hover:text-catering-primary font-bold py-3 px-8"
                >
                  <a href="#contact">Contact Us</a>
                </Button>
              </div>
            </div>
            
            {/* Right side - Logo */}
            <div className="flex justify-center md:justify-end">
              <img 
                src="/lovable-uploads/b993cdad-982f-4e75-aa26-a75d288e4c6e.png" 
                alt="JJ's Caters" 
                className="w-64 md:w-80 lg:w-96 h-auto opacity-90 filter brightness-110" 
              />
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
