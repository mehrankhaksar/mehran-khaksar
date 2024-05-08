import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiGithubLine,
  RiDownloadLine,
  RiWhatsappLine,
  RiSkypeLine,
} from "@remixicon/react";

import ThemeToggler from "./ThemeToggler";

const socials = [
  {
    pathname: "#",
    icon: <RiInstagramLine />,
  },
  {
    pathname: "#",
    icon: <RiLinkedinBoxLine />,
  },
  {
    pathname: "#",
    icon: <RiGithubLine />,
  },
];

const Header = () => {
  return (
    <header className="pt-12">
      <div className="sm:max-w-[500px] sm:mx-auto">
        <div className="flex flex-col items-center relative">
          <div className="absolute -top-5 left-10">
            <ThemeToggler />
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <div className="w-[185px] h-[185px] relative border-[3px] border-solid border-primary rounded-full">
              <Image
                className="object-cover p-0.5 rounded-full"
                src="/header/Mehran Khaksar.jpg"
                fill
                sizes="100%"
                priority
                alt="Mehran Khaksar"
              />
            </div>
            <div className="text-center">
              <h1 className="h1 !leading-none">Mehran Khaksar</h1>
              <span className="font-medium">Front-End Developer</span>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-2.5 mb-5">
            {socials.map((item, index) => (
              <Link
                className="transition-colors hover:text-primary"
                href={item.pathname}
                key={index}
              >
                {item.icon}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a download="" href="">
              <Button
                className="flex items-center gap-1.5 text-lg font-semibold p-6 dark:text-secondary-foreground"
                type="button"
              >
                Download CV
                <RiDownloadLine />
              </Button>
            </a>
            <div className="flex items-center gap-1.5">
              <a href="#">
                <Button
                  className="col-span-2 rounded-full"
                  variant="secondary"
                  size="icon"
                  type="button"
                >
                  <RiWhatsappLine />
                </Button>
              </a>
              <a href="#">
                <Button
                  className="rounded-full"
                  variant="secondary"
                  size="icon"
                  type="button"
                >
                  <RiSkypeLine />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
