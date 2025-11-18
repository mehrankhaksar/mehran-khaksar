"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectListClient({ projectList = [] }) {
  return (
    <section>
      {projectList.map((projectItem) => (
        <div key={projectItem.id}>
          <Carousel>
            <CarouselContent>
              {projectItem.images.map((image, idx) => (
                <CarouselItem key={idx}>
                  <figure className="h-[200px] relative rounded-lg overflow-hidden">
                    <Image
                      className="object-cover"
                      src={image.url}
                      fill
                      sizes="100%"
                      priority
                      alt={image.filename}
                    />
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {/* <div
                className="w-full h-full flex flex-col justify-end absolute -bottom-full left-0 text-secondary p-2.5 transition-all duration-300 ease-in-out group-hover:bottom-0 dark:text-secondary-foreground"
                style={{
                  background:
                    "linear-gradient(180deg, hsla(207, 25%, 50%, 0.25) 0%, hsla(207, 25%, 5%, 1) 100%)",
                }}
              >
                <h3 className="h3">{projectItem.name}</h3>
                <div className="flex items-center gap-1.5">
                  <a href={projectItem.demo} target="_blank">
                    <Button
                      className="w-fit h-fit p-1.5 rounded-full dark:text-secondary-foreground"
                      type="button"
                      size="icon"
                    >
                      <RiLinksLine size={17.5} />
                    </Button>
                  </a>
                  <a href={item.github} target="_blank">
                    <Button
                      className="w-fit h-fit p-1.5 rounded-full dark:text-secondary-foreground"
                      type="button"
                      size="icon"
                    >
                      <RiGithubLine size={17.5} />
                    </Button>
                  </a>
                </div>
              </div> */}
        </div>
      ))}
    </section>
  );
}
