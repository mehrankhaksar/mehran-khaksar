import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { RiDownloadLine } from "@remixicon/react";
import ThemeToggler from "./ThemeToggler";
import { getProfile } from "@/services/profileService";

export default async function Header() {
  const { fullName, role, cv, profilePicture, socialMedias } =
    await getProfile();

  return (
    <header className="pt-10" initial="hidden" animate="enter">
      <div className="max-w-xs mx-auto">
        <div className="flex flex-col items-center relative">
          <div className="absolute -top-5 -left-5">
            <ThemeToggler />
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <div className="size-[185px] relative border-[3px] border-solid border-primary rounded-full">
              <Image
                className="object-cover p-0.5 rounded-full"
                src={
                  profilePicture?.url ||
                  "https://placehold.co/185x185/png?text=Profile+Picture"
                }
                fill
                sizes="100%"
                priority
                alt={fullName}
              />
            </div>
            <div className="text-center">
              <h1 className="h1 !leading-none">{fullName}</h1>
              <span className="font-medium">{role}</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 mt-2.5 mb-5">
            {socialMedias
              .filter((socialMedia) => !socialMedia.isContact)
              .map((socialMedia) => (
                <Link
                  href={socialMedia.pathname}
                  target="_blank"
                  key={socialMedia.pathname}
                >
                  <Image
                    src={socialMedia.icon.url}
                    width={25}
                    height={25}
                    sizes="25px"
                    priority
                    alt={socialMedia.name}
                  />
                </Link>
              ))}
          </div>
          <div className="flex items-center gap-3">
            <a download="" href={cv.url} target="_blank">
              <Button
                className="flex items-center gap-1.5 text-lg font-semibold p-6 dark:text-secondary-foreground"
                type="button"
              >
                Download CV
                <RiDownloadLine />
              </Button>
            </a>
            <div className="flex items-center gap-1.5">
              {socialMedias
                .filter((socialMedia) => socialMedia.isContact)
                .map((socialMedia) => (
                  <Link
                    href={socialMedia.pathname}
                    target="_blank"
                    key={socialMedia.pathname}
                  >
                    <Button
                      className="rounded-full"
                      variant="secondary"
                      size="icon"
                      type="button"
                    >
                      <Image
                        src={socialMedia.icon.url}
                        width={25}
                        height={25}
                        sizes="25px"
                        priority
                        alt={socialMedia.name}
                      />
                    </Button>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
