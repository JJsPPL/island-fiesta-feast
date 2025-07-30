import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ImageGallery from './ImageGallery';

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
  sides: MenuItem[];
}

const Menu = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = [
    { id: 'main', label: 'Main Dishes' },
    { id: 'appetizers', label: 'Appetizers' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'sides', label: 'Event Platters' }
  ];
  
  const menuItems: MenuCategories = {
    main: [
      { 
        name: 'BBQ Chicken Fiesta Plate', 
        description: 'Marinated grilled chicken with red rice, lumpia and your choice of potato salad or kimchee noodles'
      },
      { 
        name: 'Brisket Fiesta Plate', 
        description: 'Slow-roasted brisket served with red rice, lumpia and your choice of potato salad or kimchee noodles'
      }
    ],
    appetizers: [
      { 
        name: 'Lumpia', 
        description: 'Crispy Filipino spring rolls with dipping sauce' 
      },
      { 
        name: 'Pickled Eggs', 
        description: 'Traditional pickled eggs with spices'
      },
      { 
        name: 'Pickled Papaya', 
        description: 'Tangy pickled green papaya' 
      },
      { 
        name: 'Potato Salad', 
        description: 'Classic potato salad with island-style seasoning'
      },
      { name: 'Chicken Kelaguen', description: 'Traditional chopped chicken with lemon, pepper, and onions' },
      { name: 'Shrimp Kelaguen', description: 'Fresh shrimp with coconut, lemon, and spices' },
      { name: 'Kimchi Noodles', description: 'Stir-fried noodles with homemade kimchi' },
      { name: 'Chicken Shish Kebabs', description: 'Marinated chicken skewers with grilled vegetables' }
    ],
    drinks: [
      { 
        name: 'Calamansi Lemonade', 
        description: 'Refreshing citrus drink made with Calamansi lime'
      }
    ],
    desserts: [
      { 
        name: 'Lime Shaved Ice', 
        description: 'Refreshing lime-flavored shaved ice with tropical twist',
        image: '/lovable-uploads/490cc38f-a2c9-4c22-b0b9-f75e9e4622f7.png'
      },
      { 
        name: 'Strawberry Shaved Ice', 
        description: 'Sweet strawberry shaved ice with vibrant red coloring',
        image: '/lovable-uploads/efda658c-a805-4727-8463-06af66475254.png'
      },
      {
        name: 'Lemon Shaved Ice',
        description: 'Zesty lemon shaved ice for a citrus burst',
        image: '/lovable-uploads/faff21ec-0ff8-4acf-85d3-ec4188900013.png'
      },
      {
        name: 'Blue Raspberry Shaved Ice',
        description: 'Cool blue raspberry flavored shaved ice',
        image: '/lovable-uploads/c471be5d-8a5e-4c57-9882-35cbac88cc8c.png'
      },
      {
        name: 'Mango Bingsu',
        description: 'Tropical mango shaved ice topped with whipped cream and fruit',
        image: '/lovable-uploads/a45a54ac-0b03-4238-a481-7796c5c304b1.png'
      },
      {
        name: 'Strawberry Bingsu',
        description: 'Shaved ice with strawberry syrup, whipped cream, and fresh strawberry pieces',
        image: '/lovable-uploads/6dc13440-a76b-454e-b020-5ba678024362.png'
      },
      {
        name: 'Cotton Candy Bingsu',
        description: 'Festive multi-colored shaved ice with whipped cream and sprinkles',
        image: '/lovable-uploads/5a57e79d-a28f-47ef-9b80-c4436d303450.png'
      },
      {
        name: 'Oreo Craffle',
        description: 'Golden waffle topped with Oreo cookies, whipped cream, and chocolate',
        image: '/lovable-uploads/2ca6126b-b536-4115-8a18-30a80714d9a2.png'
      },
      {
        name: 'Strawberry Craffle',
        description: 'Fresh waffle with sliced strawberries, whipped cream, and syrup',
        image: '/lovable-uploads/bac25181-6235-475f-95c2-e47ef0fe8c78.png'
      },
      {
        name: 'Banana Chocolate Craffle',
        description: 'Crispy waffle with banana slices, chocolate drizzle, and whipped cream',
        image: '/lovable-uploads/bd4008b8-bce4-4941-87ca-4776d1923678.png'
      }
    ],
    sides: [
      {
        name: 'Fresh Fruit Platter',
        description: 'Beautiful arrangement of seasonal fresh fruits with a creamy dip',
        image: '/lovable-uploads/8974fcd4-f7fb-4c99-b64c-475f744cb334.png'
      },
      {
        name: 'Festive Jello Cups',
        description: 'Layered red and green jello cups with whipped cream',
        image: '/lovable-uploads/ef141486-5b5e-4b11-913f-19f866970e34.png'
      },
      {
        name: 'Strawberry Parfait Cups',
        description: 'Individual parfait cups with strawberry jello and whipped cream',
        image: '/lovable-uploads/f2271816-2898-40cc-aafc-774f46947d14.png'
      },
      {
        name: 'Garden Salad Boxes',
        description: 'Fresh individual salad boxes with mixed vegetables and dressing',
        image: '/lovable-uploads/b7c8871d-4169-4f43-8d69-29b923816fc1.png'
      },
      {
        name: 'Charcuterie Board',
        description: 'Artisanal meat and cheese board with crackers, olives, and accompaniments',
        image: '/lovable-uploads/2ee3d07a-5574-4e4d-a8cf-98f941126864.png'
      },
      {
        name: 'Holiday Appetizer Cups',
        description: 'Festive individual appetizer cups with seasonal toppings',
        image: '/lovable-uploads/cee7de18-5700-450d-b8cb-4c51ae74ead2.png'
      },
      {
        name: 'Mini Egg Frittatas',
        description: 'Bite-sized frittatas with vegetables and herbs',
        image: '/lovable-uploads/f27961e8-c921-4d0f-a535-893ea6ccfdf4.png'
      },
      {
        name: 'Mixed Vegetable Medley',
        description: 'Colorful mixture of sautéed seasonal vegetables',
        image: '/lovable-uploads/4b8f4578-30d1-40c8-8f26-bfd68d0b0188.png'
      },
      {
        name: 'Fried Rice',
        description: 'Savory fried rice with vegetables, eggs, and seasonings',
        image: '/lovable-uploads/7a0a8bed-cd43-4a09-92d6-ef2c07879034.png'
      },
      {
        name: 'Premium Charcuterie Platter',
        description: 'Elegant arrangement of premium meats, cheeses, and gourmet accompaniments',
        image: '/lovable-uploads/12d10bf9-ed31-4910-81fb-f812024a75fd.png'
      },
      {
        name: 'Catering Spread',
        description: 'Professional catering setup with various appetizers and sides',
        image: '/lovable-uploads/953549c4-85fd-4595-8a48-60a522c57d2b.png'
      },
      {
        name: 'Grilled Chicken & Peppers',
        description: 'Sautéed bell peppers, onions, and seasoned chicken strips',
        image: '/lovable-uploads/79e8b0aa-a328-43b1-97d9-0675a9f3f790.png'
      },
      {
        name: 'Smoked BBQ Ribs',
        description: 'Slow-smoked pork ribs with our signature dry rub',
        image: '/lovable-uploads/18f612a0-07a8-4888-ada8-c406e568b4e2.png'
      },
      {
        name: 'Roasted Holiday Turkey',
        description: 'Perfectly roasted turkey with seasonal garnish and vegetables',
        image: '/lovable-uploads/7756d7fb-89d5-4c1e-b04d-564b9f0d22e7.png'
      }
    ]
  };

  const handleImageClick = (images: string[], index: number) => {
    setSelectedImages(images);
    setSelectedIndex(index);
    setGalleryOpen(true);
  };

  const getSidesImages = () => {
    return menuItems.sides.filter(item => item.image).map(item => item.image!);
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
                      {item.image && (
                        <div 
                          className="aspect-video overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => {
                            if (category.id === 'sides') {
                              const sidesImages = getSidesImages();
                              const imageIndex = sidesImages.findIndex(img => img === item.image);
                              handleImageClick(sidesImages, imageIndex);
                            }
                          }}
                        >
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
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

      <ImageGallery
        images={selectedImages}
        initialIndex={selectedIndex}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </section>
  );
};

export default Menu;
