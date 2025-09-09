import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import { useCallback } from "react";

const Gallery = () => {
  const autoplayOptions = useCallback(() => Autoplay({ delay: 5000 }), []);
  return (
    <Carousel plugins={[autoplayOptions()]}>
      <CarouselContent>
        <CarouselItem>
          <img
            src="/images/us-1.jpg"
            alt="Wedding 1"
            className="w-full h-auto rounded-lg"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/images/us-2.jpg"
            alt="Wedding 2"
            className="w-full h-auto rounded-lg"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/images/us-3.jpg"
            alt="Wedding 3"
            className="w-full h-auto rounded-lg"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Gallery;
