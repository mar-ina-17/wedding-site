import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-lg">
      <div className="flex items-center py-4 px-6 overflow-visible">
        <div className="relative flex items-center overflow-visible">
          <img
            src="/images/decorations/sunflower2.png"
            alt="decorative image"
            aria-hidden="true"
            className="pointer-events-none select-none absolute -left-8 -top-7 sm:-left-10 sm:-top-8 w-20 sm:w-24 md:w-28
                   -scale-x-100 opacity-90 z-0"
          />
          <h1 className="relative z-10 text-xl md:text-2xl font-bold text-black font-secondary">
            Momchil &amp; Marina
          </h1>
        </div>

        <div className="flex-grow" />

        <nav className="hidden md:flex items-center gap-x-4">
          <a href="#about">
            <Button variant="ghost">За нас и нашите кумове</Button>
          </a>
          <a href="#schedule">
            <Button variant="ghost">Програма</Button>
          </a>
          <a href="#faq">
            <Button variant="ghost">Вашите въпроси</Button>
          </a>
          <a href="#rsvp">
            <Button>RSVP</Button>
          </a>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon" className="size-8">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-72 max-w-[85vw] p-0 overflow-hidden"
            >
              <SheetHeader className="p-4">
                <SheetTitle></SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-2 p-4">
                <SheetClose asChild>
                  <a href="#about">
                    <Button variant="ghost">За нас и нашите кумове</Button>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#schedule">
                    <Button variant="ghost" className="justify-start w-full">
                      Програма
                    </Button>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#faq">
                    <Button variant="ghost" className="justify-start w-full">
                      Вашите въпроси
                    </Button>
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="#rsvp">
                    <Button className="justify-start w-full">RSVP</Button>
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
