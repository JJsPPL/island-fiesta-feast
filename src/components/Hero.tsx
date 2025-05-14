
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col justify-center bg-catering-paper relative overflow-hidden pb-10"
    >
      <div className="container mx-auto px-4 py-20 pt-32 md:pt-40 flex flex-col items-center text-center relative z-10">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-catering-dark mb-6 max-w-5xl leading-tight animate-fade-in">
          Traditional Pacific Island Cuisine with a Modern Twist
        </h1>
        <p className="font-montserrat text-lg md:text-xl text-gray-700 mb-10 max-w-3xl animate-fade-in">
          Premium catering featuring traditional Pacific Island dishes with Asian and American influences - 
          perfect for your next event, celebration, or gathering.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Button
            asChild
            className="bg-catering-primary hover:bg-catering-secondary text-white rounded-full px-8 py-6 font-montserrat"
          >
            <a href="#menu">Explore Our Menu</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-catering-primary text-catering-primary hover:bg-catering-primary hover:text-white rounded-full px-8 py-6 font-montserrat"
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5 z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
