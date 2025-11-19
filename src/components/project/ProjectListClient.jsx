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
        className="max-w-xl mx-auto grid xs:grid-cols-2"
      >
        {projectList.map((projectItem) => (
          <motion.div variants={item} key={projectItem.id}>
            <Card className="relative">
              <CardContent className="p-3 space-y-3">
                <figure className="h-56 xs:h-36 shrink-0 relative rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src={projectItem.image.url}
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
                      <Button size="icon" className="shrink-0">
                        <RiFolderImageLine />
                      </Button>
                    </div>
                    <CardDescription className="line-clamp-4 text-justify">
                      {projectItem.summary}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-0 justify-end">
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
                  </CardFooter>
                </div>
              </CardContent>
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
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
