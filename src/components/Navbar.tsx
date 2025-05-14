
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white bg-opacity-95 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* JJs Shaved Ice logo - larger size */}
          <div className="md:w-1/3">
            <a 
              href="https://jjsshavedice.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img 
                src="/lovable-uploads/d05d7ee7-2f7c-4c61-9259-85ed8c05e207.png" 
                alt="JJs Shaved Ice" 
                className="h-24 md:h-28" 
              />
            </a>
          </div>
          
          {/* JJs Caters title - centered */}
          <div className="md:w-1/3 flex justify-center my-4 md:my-0">
            <Link to="/" className="font-playfair text-3xl md:text-4xl font-bold text-catering-primary">
              JJs Caters
            </Link>
          </div>
          
          {/* Desktop navigation and mobile menu button */}
          <div className="md:w-1/3 flex justify-end">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger>
                  <MenuIcon className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col gap-6 mt-8">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="font-montserrat text-lg text-catering-dark hover:text-catering-primary transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                    <a 
                      href="https://jjsshavedice.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 mt-4 pt-4 border-t"
                    >
                      <img 
                        src="/lovable-uploads/d05d7ee7-2f7c-4c61-9259-85ed8c05e207.png" 
                        alt="JJs Shaved Ice" 
                        className="h-12" 
                      />
                      <span className="text-xs text-catering-dark opacity-75">↗</span>
                    </a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-montserrat text-catering-dark hover:text-catering-primary text-base font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
