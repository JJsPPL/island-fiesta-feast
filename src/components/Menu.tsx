
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Menu = () => {
  const categories = [
    { id: 'main', label: 'Main Dishes' },
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'desserts', label: 'Desserts' }
  ];
  
  const menuItems = {
    main: [
      { 
        name: 'BBQ Chicken Fiesta Plate', 
        description: 'Marinated grilled chicken with red rice and lumpia', 
        price: '14.99',
        image: '/lovable-uploads/3695f5a9-25e0-4bcd-8a7b-edc099448b31.png'
      },
      { 
        name: 'Brisket Fiesta Plate', 
        description: 'Slow-roasted brisket served with red rice and lumpia', 
        price: '16.99',
        image: '/lovable-uploads/ad3e9546-3200-432c-94fd-7e5fd320cd63.png'
      },
      { name: 'Chicken Kelaguen', description: 'Traditional chopped chicken with lemon, pepper, and onions', price: '13.99' },
      { name: 'Shrimp Kelaguen', description: 'Fresh shrimp with coconut, lemon, and spices', price: '15.99' },
      { name: 'Kimchi Noodles', description: 'Stir-fried noodles with homemade kimchi', price: '12.99' },
      { name: 'Chicken Shish Kebabs', description: 'Marinated chicken skewers with grilled vegetables', price: '14.99' }
    ],
    appetizers: [
      { 
        name: 'Lumpia', 
        description: 'Crispy Filipino spring rolls with dipping sauce', 
        price: '7.99' 
      },
      { 
        name: 'Pickled Eggs', 
        description: 'Traditional pickled eggs with spices', 
        price: '6.99' 
      },
      { 
        name: 'Pickled Papaya', 
        description: 'Tangy pickled green papaya', 
        price: '5.99',
        image: '/lovable-uploads/51b0070c-c135-47ef-aabd-2c1dd48c2d67.png'  
      },
      { 
        name: 'Potato Salad', 
        description: 'Classic potato salad with island-style seasoning', 
        price: '4.99' 
      }
    ],
    drinks: [
      { 
        name: 'Calamansi Lemonade', 
        description: 'Refreshing citrus drink made with Calamansi lime', 
        price: '3.99',
        image: '/lovable-uploads/686ce02d-e9c3-4385-9a8b-4642b6ce7a05.png'
      },
      { name: 'Tropical Fruit Punch', description: 'Blend of tropical fruit juices', price: '3.99' },
      { name: 'Island Iced Tea', description: 'Sweet tea with tropical flavors', price: '3.50' }
    ],
    desserts: [
      { 
        name: 'Original Shaved Ice', 
        description: 'Fine shaved ice topped with your choice of syrup', 
        price: '5.00',
        image: 'https://jjsshavedice.com/wp-content/uploads/2023/06/gallery-1.jpg'
      },
      { 
        name: 'Combo Shaved Ice', 
        description: 'Shaved ice with your choice of 2 flavors', 
        price: '6.00',
        image: 'https://jjsshavedice.com/wp-content/uploads/2023/06/gallery-5.jpg'
      },
      { 
        name: 'Rainbow Shaved Ice', 
        description: 'Shaved ice with multiple flavors and sweetened condensed milk', 
        price: '7.00',
        image: 'https://jjsshavedice.com/wp-content/uploads/2023/06/gallery-3.jpg'
      },
      { 
        name: 'Snow Cap', 
        description: 'Shaved ice with your favorite flavor topped with sweetened condensed milk', 
        price: '6.00',
        image: 'https://jjsshavedice.com/wp-content/uploads/2023/06/snowcap.jpg'
      },
      { 
        name: 'Coconut Dream', 
        description: 'Shaved ice with coconut syrup and sweetened condensed milk', 
        price: '7.00',
        image: 'https://jjsshavedice.com/wp-content/uploads/2023/06/gallery-4.jpg'
      },
      { 
        name: 'Mango Delight', 
        description: 'Shaved ice with mango syrup and sweetened condensed milk', 
        price: '7.00',
        image: 'https://jjsshavedice.com/wp-content/uploads/2023/06/gallery-2.jpg'
      }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-catering-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-catering-dark mb-3">
            Our Catering Menu
          </h2>
          <div className="w-20 h-1 bg-catering-accent mx-auto mb-6"></div>
          <p className="font-montserrat text-gray-600 max-w-3xl mx-auto">
            Explore our selection of authentic Pacific Island dishes with Asian and American influences.
          </p>
        </div>
        
        <Tabs defaultValue="main" className="w-full">
          <TabsList className="w-full flex mb-10 bg-white rounded-lg shadow-sm justify-center">
            {categories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex-1 data-[state=active]:bg-catering-primary data-[state=active]:text-white font-montserrat"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems[category.id as keyof typeof menuItems].map((item, index) => (
                  <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                    <CardContent className="p-0">
                      {item.image && (
                        <div className="relative">
                          <AspectRatio ratio={16/9}>
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </AspectRatio>
                        </div>
                      )}
                      <div className="h-3 bg-catering-primary"></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-playfair font-bold text-lg text-catering-dark">{item.name}</h3>
                          <span className="font-montserrat font-semibold text-catering-accent">${item.price}</span>
                        </div>
                        <p className="font-montserrat text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {category.id === 'desserts' && (
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-montserrat text-gray-500">
                      Desserts provided by our subsidiary company
                    </span>
                    <a 
                      href="https://jjsshavedice.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold text-catering-accent hover:underline"
                    >
                      JJs Shaved Ice
                    </a>
                  </div>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-16">
          <p className="font-montserrat text-gray-600 italic">
            * Menu items and availability may vary. Custom orders available upon request.
          </p>
          <p className="font-montserrat text-gray-600 mt-2">
            We're constantly adding new and exciting dishes to our menu!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
