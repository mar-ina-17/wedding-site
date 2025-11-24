import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";

const scheduleItems = [
  {
    icon: "/images/icons/icon1.webp",
    title: "Църковен ритуал",
    hour: "16:00",
    link: "https://maps.app.goo.gl/WBGhY7CWvutVvQH67",
    text: "Храм “Св.Троица”, ж.к. Гео Милев,  ул.Манастирска 45, гр.София ",
    additionalText:
      "Молим ви да бъдете там 15-20 минути по-рано, за да имате време да се настаните.",
  },
  {
    icon: "/images/icons/icon2.webp",
    title: "Коктейл и изнесен ритуал",
    hour: "17:30",
    link: "https://maps.app.goo.gl/7vgpc4XUfxPWQZqG7",
    text: "Пасарел Лейк Клуб",
  },
  {
    icon: "/images/icons/icon3.webp",
    title: "Празнична вечеря",
    hour: "19:30",
    link: "https://maps.app.goo.gl/7vgpc4XUfxPWQZqG7",
    text: "Пасарел Лейк Клуб",
  },
];

const Schedule = () => {
  const autoplayOptions = useCallback(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    []
  );

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setSelectedIndex(api.selectedScrollSnap());

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const imgClasses = (isActive: boolean) =>
    [
      "block w-[600px] h-[400px] object-cover rounded-lg",
      "transition-all duration-500 ease-out",
      "shadow-md",
      isActive
        ? "grayscale-0 opacity-100 scale-100 shadow-xl"
        : "grayscale opacity-70 scale-95",
    ].join(" ");

  return (
    <section className="w-full bg-accent relative" id="schedule">
      <img
        src="/images/decorations/sunflower2.webp"
        alt="decoration element"
        className="absolute -right-4 -top-14 w-[230px] h-[200px] -scale-y-100"
      />

      <div className="max-w-5xl mx-auto px-10 py-12">
        <h2 className="text-3xl font-extrabold text-white mb-4 text-center">
          Програма
        </h2>
        <h5 className="font-secondary text-center mb-8 text-primary">
          22.05.2026
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[100px_1fr] items-center gap-4"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-[100px] h-[100px] object-contain justify-self-center"
              />
              <div>
                <h3 className="text-2xl font-bold text-primary">{item.hour}</h3>
                <h4 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h4>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 underline hover:text-black"
                >
                  {item.text}
                </a>
                <br />
                <span className=" font-semibold">{item.additionalText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Carousel
        plugins={[autoplayOptions()]}
        className="flex justify-center"
        opts={{ loop: true }}
        setApi={setApi}
      >
        <CarouselContent className="-ml-0">
          <CarouselItem className="pl-0 basis-[600px] shrink-0 flex justify-center">
            <img
              src="/images/venue/venue2.jpg"
              alt="Wedding venue 1"
              width={600}
              height={400}
              className={imgClasses(selectedIndex === 0)}
              loading="lazy"
              decoding="async"
            />
          </CarouselItem>

          <CarouselItem className="pl-0 basis-[600px] shrink-0 flex justify-center">
            <img
              src="/images/venue/venue3.jpg"
              alt="Wedding venue 2"
              width={600}
              height={400}
              className={imgClasses(selectedIndex === 1)}
              loading="lazy"
              decoding="async"
            />
          </CarouselItem>

          <CarouselItem className="pl-0 basis-[600px] shrink-0 flex justify-center">
            <img
              src="/images/venue/venue1.jpg"
              alt="Wedding venue 3"
              width={600}
              height={400}
              className={imgClasses(selectedIndex === 2)}
            />
          </CarouselItem>

          <CarouselItem className="pl-0 basis-[600px] shrink-0 flex justify-center">
            <img
              src="/images/venue/venue4.jpg"
              alt="Wedding venue 4"
              width={600}
              height={400}
              className={imgClasses(selectedIndex === 3)}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Schedule;
