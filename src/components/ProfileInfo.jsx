import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { RiDownloadLine } from "@remixicon/react";
import ThemeToggler from "./ThemeToggler";
import { getProfile } from "@/services/profileService";
import { socialIconMap } from "@/constants/socialIcons";
import { RichText } from "@graphcms/rich-text-react-renderer";

export default async function ProfileInfo() {
  const { fullName, role, cv, profilePicture, socialMedias, bio } =
    await getProfile();

  return (
    <section initial="hidden" animate="enter">
      <div className="max-w-md mx-auto flex flex-col items-center relative">
        <div className="absolute top-2.5 left-2.5">
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
        <div className="flex items-center gap-1.5 mt-2.5">
          {socialMedias
            .filter((socialMedia) => !socialMedia.isContact)
            .map((socialMedia) => {
              const Icon = socialIconMap[socialMedia.slug];

              return (
                <Button
                  variant="secondary"
                  className="rounded-full"
                  size="icon"
                  asChild
                  key={socialMedia.pathname}
                >
                  <a href={socialMedia.pathname} target="_blank">
                    <Icon className="!size-6" />
                  </a>
                </Button>
              );
            })}
        </div>
        <div className="mt-2.5 mb-5">
          <RichText
            content={bio.raw}
            renderers={{
              p: ({ children }) => (
                <p className="text-secondary-foreground text-center">
                  {children}
                </p>
              ),
            }}
          />
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
              .map((socialMedia) => {
                const Icon = socialIconMap[socialMedia.slug];

                return (
                  <Button
                    asChild
                    className="rounded-full"
                    variant="secondary"
                    size="icon"
                    key={socialMedia.pathname}
                  >
                    <a href={socialMedia.pathname} target="_blank">
                      <Icon className="!size-6" />
                    </a>
                  </Button>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
