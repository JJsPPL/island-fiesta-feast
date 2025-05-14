
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ImageGalleryProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageGallery = ({ images, initialIndex, isOpen, onClose }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-black/90" onEscapeKeyDown={onClose}>
        <div className="relative">
          <Carousel className="w-full" opts={{ startIndex: initialIndex }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <AspectRatio ratio={16/9} className="bg-black flex items-center justify-center">
                      <img
                        src={image}
                        alt={`Menu item ${index + 1}`}
                        className="max-h-[80vh] w-auto object-contain"
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/20 hover:bg-white/40" />
            <CarouselNext className="right-2 bg-white/20 hover:bg-white/40" />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
