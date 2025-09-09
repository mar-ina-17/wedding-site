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
            src="/optimized/us-1-1280.webp"
            srcSet="/optimized/us-1-640.webp 640w, /optimized/us-1-1280.webp 1280w, /optimized/us-1-1920.webp 1920w"
            sizes="(max-width: 768px) 100vw, 768px"
            width={1280}
            height={960}
            alt="Wedding 1"
            loading="lazy"
            decoding="async"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/optimized/us-2-1280.webp"
            srcSet="/optimized/us-2-640.webp 640w, /optimized/us-2-1280.webp 1280w, /optimized/us-2-1920.webp 1920w"
            sizes="(max-width: 768px) 100vw, 768px"
            width={1280}
            height={960}
            alt="Wedding 2"
            loading="lazy"
            decoding="async"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/optimized/us-3-1280.webp"
            srcSet="/optimized/us-3-640.webp 640w, /optimized/us-3-1280.webp 1280w, /optimized/us-3-1920.webp 1920w"
            sizes="(max-width: 768px) 100vw, 768px"
            width={1280}
            height={960}
            alt="Wedding 3"
            loading="lazy"
            decoding="async"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Gallery;
