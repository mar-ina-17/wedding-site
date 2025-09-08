import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import { useCallback } from "react";
import img1 from "../../assets/us-1.jpg";
import img2 from "../../assets/us-2.jpg";
import img3 from "../../assets/us-3.jpg";

const Gallery = () => {
  const autoplayOptions = useCallback(() => Autoplay({ delay: 5000 }), []);
  return (
    <Carousel plugins={[autoplayOptions()]}>
      <CarouselContent>
        <CarouselItem>
          <img
            src={img1}
            alt="Wedding 1"
            className="w-full h-auto rounded-lg"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={img2}
            alt="Wedding 2"
            className="w-full h-auto rounded-lg"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={img3}
            alt="Wedding 3"
            className="w-full h-auto rounded-lg"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Gallery;
