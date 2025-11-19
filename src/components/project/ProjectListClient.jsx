"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { RiFolderImageLine, RiGithubLine, RiLinksLine } from "@remixicon/react";
import { ButtonGroup } from "../ui/button-group";
import ProjectGallery from "./ProjectGallery";
import { Badge } from "../ui/badge";
import Link from "next/link";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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

export default function ProjectListClient({ projectList = [] }) {
  return (
    <section>
      <motion.div
        variants={list}
        initial="hidden"
        animate="show"
        className="max-w-xl mx-auto grid xs:grid-cols-2 gap-2.5"
      >
        {projectList.map((projectItem) => (
          <motion.div variants={item} key={projectItem.id}>
            <Card className="relative h-full">
              <CardContent className="p-3 space-y-3">
                <figure className="h-56 xs:h-36 shrink-0 relative rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src={
                      projectItem.image.url ||
                      "https://placehold.co/320x200/png?text=Project+Picture"
                    }
                    fill
                    sizes="100%"
                    priority
                    alt={projectItem.image.fileName}
                  />
                </figure>
                <div className="flex flex-col justify-between gap-5">
                  <CardHeader className="p-0">
                    <div className="flex justify-between items-center gap-2.5">
                      <CardTitle className="text-lg font-bold leading-5 line-clamp-2">
                        {projectItem.title}
                      </CardTitle>
                      {projectItem.gallery.length ? (
                        <ProjectGallery gallery={projectItem.gallery} />
                      ) : null}
                    </div>
                    <CardDescription className="line-clamp-4 text-justify">
                      {projectItem.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-0 justify-end gap-2.5">
                    <Button asChild className="w-full">
                      <Link href="/">Explore</Link>
                    </Button>
                    {projectItem.liveLink || projectItem.githubLink ? (
                      <ButtonGroup>
                        {projectItem.liveLink ? (
                          <Button variant="outline" asChild size="icon">
                            <a href={projectItem.liveLink} target="_blank">
                              <RiLinksLine />
                            </a>
                          </Button>
                        ) : null}
                        {projectItem.githubLink ? (
                          <Button variant="outline" asChild size="icon">
                            <a href={projectItem.githubLink} target="_blank">
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
        ))}
      </motion.div>
    </section>
  );
}
