"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  RiCheckboxCircleLine,
  RiLinksLine,
  RiGithubLine,
} from "@remixicon/react";

const tabContentVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
      duration: 0.5,
    },
  },
};

const projectVariants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
};

const tabs = ["skills", "projects"];

const skills = [
  {
    skill: "HTML & CSS",
    level: "Advance",
  },
  {
    skill: "JavaScript",
    level: "Basic",
  },
  {
    skill: "React.JS",
    level: "Advance",
  },
  {
    skill: "Next.JS",
    level: "Advance",
  },
  {
    skill: "REST API",
    level: "Advance",
  },
  {
    skill: "GraphQL",
    level: "Advance",
  },
  {
    skill: "Redux & Redux Toolkit",
    level: "Advance",
  },
  {
    skill: "TailwindCSS",
    level: "Advance",
  },
  {
    skill: "shadcn/ui",
    level: "Advance",
  },
  {
    skill: "MUI",
    level: "Intermediate",
  },
  {
    skill: "Git & GitHub",
    level: "Intermediate",
  },
];

const projects = [
  {
    category: "Next.JS",
    name: "Real Estate",
    demo: "https://mehran-khaksar-real-estate.vercel.app/",
    github: "https://github.com/mehrankhaksar/real-estate",
  },
  {
    category: "Next.JS",
    name: "Ryan Davis Portfolio",
    demo: "https://mehran-khaksar-ryan-davis-portfolio.vercel.app/",
    github: "https://github.com/mehrankhaksar/ryan-davis-portfolio",
  },
  {
    category: "React.JS",
    name: "BotoBlog",
    demo: "https://mehran-khaksar-botoblog.vercel.app/",
    github: "https://github.com/mehrankhaksar/botoblog",
  },
  {
    category: "HTML & CSS & JS",
    name: "ZarinPal",
    demo: "https://mehran-khaksar-zarinpal.vercel.app/",
    github: "https://github.com/mehrankhaksar/zarinpal",
  },
];

export default function Home() {
  return (
    <section className="my-10 mx-5">
      <Tabs defaultValue="skills">
        <TabsList className="max-w-[250px] h-fit grid grid-cols-2 gap-1 mx-auto mb-10">
          {tabs.map((item, index) => (
            <TabsTrigger
              className="font-semibold capitalize py-4 px-8 hover:bg-background"
              value={item}
              key={index}
            >
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="skills">
          <motion.div
            className="max-w-fit grid grid-cols-2 sm:grid-cols-3 gap-5 mx-auto"
            variants={tabContentVariants}
          >
            {skills.map((item, index) => (
              <div className="flex gap-1.5" key={index}>
                <RiCheckboxCircleLine className="text-primary" />
                <div>
                  <h4 className="h4 !leading-5">{item.skill}</h4>
                  <span className="text-sm font-semibold text-muted-foreground">
                    {item.level}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </TabsContent>
        <TabsContent value="projects">
          <motion.div
            className="max-w-[300px] sm:max-w-[500px] grid gap-y-5 gap-x-2.5 mx-auto sm:grid-cols-2"
            variants={tabContentVariants}
          >
            {projects.map((item, index) => (
              <motion.div
                className="relative"
                variants={projectVariants}
                key={index}
              >
                <Badge className="absolute -top-4 -left-2 bg-yellow-500 my-1.5 hover:bg-yellow-600 z-10 dark:text-accent-foreground">
                  {item.category}
                </Badge>
                <div className="group w-full h-[185px] sm:h-[150px] relative rounded-xl overflow-hidden">
                  <Image
                    className="object-cover"
                    src={`/projects/${item.category}.jpg`}
                    fill
                    sizes="100%"
                    priority
                    alt={item.name}
                  />
                  <div
                    className="w-full h-full flex flex-col justify-end absolute -bottom-full left-0 text-secondary p-2.5 transition-all duration-300 ease-in-out group-hover:bottom-0 dark:text-secondary-foreground"
                    style={{
                      background:
                        "linear-gradient(180deg, hsla(207, 25%, 50%, 0.25) 0%, hsla(207, 25%, 5%, 1) 100%)",
                    }}
                  >
                    <h3 className="h3">{item.name}</h3>
                    <div className="flex items-center gap-1.5">
                      <a href={item.demo} target="_blank">
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
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
