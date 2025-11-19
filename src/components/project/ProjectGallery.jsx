import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "../ui/button";
import { RiFolderImageLine } from "@remixicon/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function ProjectGallery({ gallery }) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="secondary" size="icon" className="shrink-0">
          <RiFolderImageLine />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-96">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <PhotoProvider>
            <CarouselContent>
              {gallery.map(({ url, fileName }, idx) => (
                <CarouselItem key={idx}>
                  <PhotoView src={url}>
                    <figure className="h-56 shrink-0 relative rounded-lg overflow-hidden">
                      <Image
                        className="object-cover cursor-zoom-in"
                        src={
                          url ||
                          "https://placehold.co/320x200/png?text=Gallery+Picture"
                        }
                        fill
                        sizes="100%"
                        priority
                        alt={fileName}
                      />
                    </figure>
                  </PhotoView>
                </CarouselItem>
              ))}
            </CarouselContent>
          </PhotoProvider>
          <CarouselPrevious className="left-0 rounded-l-md" />
          <CarouselNext className="right-0 rounded-r-md" />
        </Carousel>
        <div className="flex justify-center gap-1 mt-2.5">
          {Array.from({ length: count }, (_, idx) => (
            <div
              key={idx}
              className={`size-2.5 ${
                current === idx + 1 ? "bg-primary" : "bg-secondary"
              } rounded-full`}
            />
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
