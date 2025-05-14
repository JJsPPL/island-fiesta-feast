
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
    <header className="fixed w-full bg-white bg-opacity-95 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-playfair text-2xl md:text-3xl font-bold text-catering-primary">
          Pacific Island Catering
        </Link>
        
        {/* JJs Shaved Ice logo/link */}
        <a 
          href="https://jjsshavedice.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block absolute right-4 top-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs text-catering-dark opacity-75">Visit our</span>
            <span className="font-bold text-catering-accent text-sm">JJs Shaved Ice</span>
          </div>
        </a>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-montserrat text-catering-dark hover:text-catering-primary text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden">
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
                <span className="font-bold text-catering-accent">JJs Shaved Ice</span>
                <span className="text-xs text-catering-dark opacity-75">↗</span>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
