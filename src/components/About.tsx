
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-catering-dark mb-3">
            Our Culinary Journey
          </h2>
          <div className="w-20 h-1 bg-catering-accent mx-auto mb-6"></div>
          <p className="font-montserrat text-gray-600 max-w-3xl mx-auto">
            Discover the authentic flavors of the Pacific Islands, enhanced with Asian and American influences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4 text-catering-primary">
              A Taste of the Islands
            </h3>
            <p className="font-montserrat text-gray-700 mb-6">
              Our catering service brings together traditional Pacific Island cuisine with contemporary touches.
              Each dish is carefully prepared using authentic recipes and the freshest ingredients to deliver
              an exceptional dining experience.
            </p>
            <p className="font-montserrat text-gray-700 mb-6">
              From our signature BBQ chicken and brisket to our traditional red rice and lumpia, 
              every item on our menu tells a story of cultural heritage and culinary passion.
            </p>
            <p className="font-montserrat text-gray-700">
              We pride ourselves on offering a unique catering experience that celebrates the
              rich flavors and traditions of Pacific Island cuisine while incorporating
              Asian and American influences to create a truly memorable meal for your guests.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img 
              src="/lovable-uploads/ad3e9546-3200-432c-94fd-7e5fd320cd63.png" 
              alt="Pacific Island Cuisine" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
