"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { RiGithubLine, RiLinksLine } from "@remixicon/react";
import { ButtonGroup } from "../ui/button-group";
import ProjectGallery from "./ProjectGallery";
import Link from "next/link";

const item = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function ProjectItem({
  image,
  title,
  gallery,
  summary,
  slug,
  liveLink,
  githubLink,
}) {
  return (
    <motion.div variants={item}>
      <Card className="relative h-full">
        <CardContent className="p-3 space-y-3">
          <figure className="h-56 xs:h-36 shrink-0 relative rounded-lg overflow-hidden">
            <Image
              className="object-cover"
              src={
                image.url ||
                "https://placehold.co/320x200/png?text=Project+Picture"
              }
              fill
              sizes="100%"
              priority
              alt={image.fileName}
            />
          </figure>
          <div className="flex flex-col justify-between gap-5">
            <CardHeader className="p-0">
              <div className="flex justify-between items-center gap-2.5">
                <CardTitle className="text-lg font-bold leading-5 line-clamp-2">
                  {title}
                </CardTitle>
                {gallery.length ? <ProjectGallery gallery={gallery} /> : null}
              </div>
              <CardDescription className="line-clamp-4 text-justify">
                {summary}
              </CardDescription>
            </CardHeader>
            <CardFooter className="p-0 justify-end gap-2.5">
              <Button asChild className="w-full">
                <Link href={`/project/${slug}`}>Explore</Link>
              </Button>
              {liveLink || githubLink ? (
                <ButtonGroup>
                  {liveLink ? (
                    <Button variant="outline" asChild size="icon">
                      <a href={liveLink} target="_blank">
                        <RiLinksLine />
                      </a>
                    </Button>
                  ) : null}
                  {githubLink ? (
                    <Button variant="outline" asChild size="icon">
                      <a href={githubLink} target="_blank">
                        <RiGithubLine />
                      </a>
                    </Button>
                  ) : null}
                </ButtonGroup>
              ) : null}
            </CardFooter>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
