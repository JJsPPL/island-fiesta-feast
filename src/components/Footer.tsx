
import React from 'react';

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
              <p>15000 Nelson Court</p>
              <p>Guam, USA</p>
              <p>Phone: (671) 483-7372</p>
              <p>Email: jjsshavedice@gmail.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
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
