
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

interface MenuItem {
  name: string;
  description: string;
  image?: string;
}

interface MenuCategories {
  main: MenuItem[];
  appetizers: MenuItem[];
  drinks: MenuItem[];
  desserts: MenuItem[];
}

const Menu = () => {
  const categories = [
    { id: 'main', label: 'Main Dishes' },
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'desserts', label: 'Desserts' }
  ];
  
  const menuItems: MenuCategories = {
    main: [
      { 
        name: 'BBQ Chicken Fiesta Plate', 
        description: 'Marinated grilled chicken with red rice and lumpia', 
        image: '/lovable-uploads/3695f5a9-25e0-4bcd-8a7b-edc099448b31.png'
      },
      { 
        name: 'Brisket Fiesta Plate', 
        description: 'Slow-roasted brisket served with red rice and lumpia', 
        image: '/lovable-uploads/ad3e9546-3200-432c-94fd-7e5fd320cd63.png'
      },
      { name: 'Chicken Kelaguen', description: 'Traditional chopped chicken with lemon, pepper, and onions' },
      { name: 'Shrimp Kelaguen', description: 'Fresh shrimp with coconut, lemon, and spices' },
      { name: 'Kimchi Noodles', description: 'Stir-fried noodles with homemade kimchi' },
      { name: 'Chicken Shish Kebabs', description: 'Marinated chicken skewers with grilled vegetables' }
    ],
    appetizers: [
      { 
        name: 'Lumpia', 
        description: 'Crispy Filipino spring rolls with dipping sauce' 
      },
      { 
        name: 'Pickled Eggs', 
        description: 'Traditional pickled eggs with spices',
        image: '/lovable-uploads/d51c58ce-04ff-4275-8d08-293b8972414d.png'
      },
      { 
        name: 'Pickled Papaya', 
        description: 'Tangy pickled green papaya',
        image: '/lovable-uploads/51b0070c-c135-47ef-aabd-2c1dd48c2d67.png'  
      },
      { 
        name: 'Potato Salad', 
        description: 'Classic potato salad with island-style seasoning'
      }
    ],
    drinks: [
      { 
        name: 'Calamansi Lemonade', 
        description: 'Refreshing citrus drink made with Calamansi lime',
        image: '/lovable-uploads/686ce02d-e9c3-4385-9a8b-4642b6ce7a05.png'
      }
    ],
    desserts: [
      { 
        name: 'Original Shaved Ice', 
        description: 'Fine shaved ice topped with your choice of syrup', 
        image: '/lovable-uploads/58c6d76d-e581-47f0-ac98-ade2e24df46a.png'
      },
      { 
        name: 'Bingsu', 
        description: 'Korean shaved ice dessert with sweet toppings',
        image: '/lovable-uploads/db8ae3e2-fc88-4458-8725-fafc70c35385.png'
      },
      {
        name: 'Craffle',
        description: 'Delicious croissant waffle topped with whipped cream, bananas, and chocolate',
        image: '/lovable-uploads/80ec7f1f-6fa3-4ad1-b1fb-aa14cae8c965.png'
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
                      <div className="h-3 bg-catering-primary"></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-playfair font-bold text-lg text-catering-dark">{item.name}</h3>
                        </div>
                        <p className="font-montserrat text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
