
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-catering-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-catering-dark mb-3">
            Book Your Event
          </h2>
          <div className="w-20 h-1 bg-catering-accent mx-auto mb-6"></div>
          <p className="font-montserrat text-gray-600 max-w-3xl mx-auto">
            Let us cater your next event with authentic Pacific Island cuisine.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6 text-catering-primary">
              Get in Touch
            </h3>
            <p className="font-montserrat text-gray-700 mb-8">
              We're ready to create an unforgettable culinary experience for your next event. 
              Fill out the form or contact us directly to discuss your catering needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-catering-accent mt-1" />
                <div>
                  <h4 className="font-montserrat font-semibold text-catering-dark">Phone</h4>
                  <p className="font-montserrat text-gray-600">(671) 483-7372</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-catering-accent mt-1" />
                <div>
                  <h4 className="font-montserrat font-semibold text-catering-dark">Email</h4>
                  <p className="font-montserrat text-gray-600">jjsshavedice@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-catering-accent mt-1" />
                <div>
                  <h4 className="font-montserrat font-semibold text-catering-dark">Location</h4>
                  <p className="font-montserrat text-gray-600">15000 Nelson Court, Guam, USA</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-5 w-5 text-catering-accent mt-1" />
                <div>
                  <h4 className="font-montserrat font-semibold text-catering-dark">Business Hours</h4>
                  <p className="font-montserrat text-gray-600">Monday - Friday: 10am - 8pm</p>
                  <p className="font-montserrat text-gray-600">Saturday: 10am - 8pm</p>
                  <p className="font-montserrat text-gray-600">Sunday: 10am - 8pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div>
                <label htmlFor="name" className="font-montserrat font-medium text-catering-dark block mb-2">
                  Name
                </label>
                <Input 
                  id="name" 
                  placeholder="Your Name" 
                  className="font-montserrat border-gray-300 focus:border-catering-primary" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="font-montserrat font-medium text-catering-dark block mb-2">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="font-montserrat border-gray-300 focus:border-catering-primary" 
                />
              </div>
              
              <div>
                <label htmlFor="event-date" className="font-montserrat font-medium text-catering-dark block mb-2">
                  Event Date
                </label>
                <Input 
                  id="event-date" 
                  type="date" 
                  className="font-montserrat border-gray-300 focus:border-catering-primary" 
                />
              </div>
              
              <div>
                <label htmlFor="guests" className="font-montserrat font-medium text-catering-dark block mb-2">
                  Number of Guests
                </label>
                <Input 
                  id="guests" 
                  type="number" 
                  placeholder="50" 
                  className="font-montserrat border-gray-300 focus:border-catering-primary" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="font-montserrat font-medium text-catering-dark block mb-2">
                  Event Details
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your event and any specific requests..." 
                  className="font-montserrat min-h-[120px] border-gray-300 focus:border-catering-primary" 
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-catering-primary hover:bg-catering-secondary text-white w-full py-6 font-bold"
              >
                Request Catering Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
