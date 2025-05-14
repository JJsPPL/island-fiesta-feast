
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-catering-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">JJs Catering</h3>
            <p className="font-montserrat text-gray-300 text-sm">
              Bringing authentic Pacific Island cuisine with Asian and American influences to your events.
            </p>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-montserrat text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li>
                <a 
                  href="https://jjsshavedice.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-catering-accent hover:text-white transition-colors"
                >
                  JJs Shaved Ice
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contact Information</h3>
            <address className="not-italic font-montserrat text-sm text-gray-300 space-y-2">
              <p>Portland/Vancouver Area</p>
              <p>Oregon/Washington</p>
              <p>Phone: (503) 707-7679</p>
              <p>Instagram: @jjshavedice2024</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="font-playfair text-xl font-bold mb-6 text-center">Our Amazing Partners</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h4 className="font-montserrat font-bold mb-2 text-catering-accent">Pacific NW Extreme Fishing Forecast</h4>
              <p className="text-sm text-gray-300">Your premier source for accurate fishing forecasts across the Pacific Northwest.</p>
              <a 
                href="http://PacificNWExtremeFishingForecast.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-catering-primary hover:text-white mt-2 inline-block"
              >
                Learn More →
              </a>
            </div>
            
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h4 className="font-montserrat font-bold mb-2 text-catering-accent">DinoTradez LLC</h4>
              <p className="text-sm text-gray-300">Enhance your financial approach with Market Fundamental and Technical Analysis.</p>
              <a 
                href="http://DinoTradez.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-catering-primary hover:text-white mt-2 inline-block"
              >
                Learn More →
              </a>
            </div>
            
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h4 className="font-montserrat font-bold mb-2 text-catering-accent">JQP Corp LLC</h4>
              <p className="text-sm text-gray-300">Providing innovative solutions for all your business needs in today's competitive market.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h4 className="font-montserrat font-bold mb-2 text-catering-accent">Sac-Sac Corp LLC</h4>
              <p className="text-sm text-gray-300">Committed to building stronger communities through meaningful connections.</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-10 text-center">
          <p className="font-montserrat text-sm text-gray-400">
            &copy; {currentYear} JJs Catering. All rights reserved.
          </p>
          <p className="font-montserrat text-xs text-gray-500 mt-2">
            Website designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
