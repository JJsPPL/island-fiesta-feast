import React from 'react';
import { Phone, Mail, Clock, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-catering-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-catering-dark mb-3">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-catering-accent mx-auto mb-6"></div>
          <p className="font-montserrat text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for your catering needs.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <h3 className="font-playfair text-2xl font-bold mb-6 text-catering-primary text-center">
            Get in Touch
          </h3>
          <p className="font-montserrat text-gray-700 mb-8 text-center">
            We'd love to hear from you! Contact us directly to discuss your catering needs.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="h-5 w-5 text-catering-accent mt-1" />
              <div>
                <h4 className="font-montserrat font-semibold text-catering-dark">Phone</h4>
                <p className="font-montserrat text-gray-600">(503) 707-7679</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Instagram className="h-5 w-5 text-catering-accent mt-1" />
              <div>
                <h4 className="font-montserrat font-semibold text-catering-dark">Instagram</h4>
                <p className="font-montserrat text-gray-600">@jjshavedice2024</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="h-5 w-5 text-catering-accent mt-1" />
              <div>
                <h4 className="font-montserrat font-semibold text-catering-dark">Location</h4>
                <p className="font-montserrat text-gray-600">Portland, Oregon - Metro area</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="h-5 w-5 text-catering-accent mt-1" />
              <div>
                <h4 className="font-montserrat font-semibold text-catering-dark">Business Hours</h4>
                <p className="font-montserrat text-gray-600">By appointment only</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mail className="h-5 w-5 text-catering-accent mt-1" />
              <div>
                <h4 className="font-montserrat font-semibold text-catering-dark">Email</h4>
                <p className="font-montserrat text-gray-600">simplymee0011@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
