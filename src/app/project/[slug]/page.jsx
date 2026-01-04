import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProject } from "@/services/projectService";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { RiGithubLine, RiLinksLine } from "@remixicon/react";
import Image from "next/image";

export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const { title, image, summary, technologies, liveLink, githubLink, content } =
    await getProject(slug);

  return (
    <section>
      <Card>
        <CardHeader className="p-3 sm:p-5 sm:flex-row gap-3">
          <figure className="h-52 xs:h-64 sm:h-52 md:h-60 lg:h-auto sm:w-1/2 lg:w-1/3 shrink-0 relative rounded-lg overflow-hidden">
            <Image
              className="object-cover"
              src={
                image.url || "https://placehold.co/384/png?text=Project+Picture"
              }
              fill
              sizes="100%"
              priority
              alt={image.fileName}
            />
          </figure>
          <div className="flex flex-col gap-2.5">
            <CardTitle className="text-lg font-bold leading-5">
              {title}
            </CardTitle>
            <CardDescription className="text-justify">
              {summary}
            </CardDescription>
            <ul className="max-w-xs flex flex-wrap gap-1.5">
              {technologies.map((technology) => (
                <li key={technology}>
                  <Badge variant="secondary">{technology}</Badge>
                </li>
              ))}
            </ul>
            {liveLink || githubLink ? (
              <ButtonGroup className="self-end mt-auto">
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
          </div>
        </CardHeader>
        <CardContent>
          <RichText
            content={content.raw}
            renderers={{
              h3: ({ children }) => (
                <h3 className="text-xl mb-2.5">{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-secondary-foreground">{children}</h4>
              ),
              p: ({ children }) => {
                return (
                  <p className="text-sm text-muted-foreground font-medium text-justify mb-5">
                    {children}
                  </p>
                );
              },
              ul: ({ children }) => (
                <ul className="-space-y-5 list-disc ml-10 marker:text-primary">
                  {children}
                </ul>
              ),
            }}
          />
        </CardContent>
      </Card>
    </section>
  );
}
