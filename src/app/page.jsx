import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { RiCheckboxCircleLine } from "@remixicon/react";

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
    skill: "MUI",
    level: "Intermediate",
  },
  {
    skill: "Git & GitHub",
    level: "Intermediate",
  },
];

export default function Home() {
  return (
    <section className="my-8">
      <div className="container mx-auto">
        <Tabs className="max-w-[500px] mx-auto" defaultValue="skills">
          <TabsList className="max-w-fit h-fit grid grid-cols-2 mx-auto mb-10">
            {tabs.map((item, index) => (
              <TabsTrigger
                className="font-semibold capitalize py-4 px-8"
                value={item}
                key={index}
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent
            className="grid grid-cols-2 sm:grid-cols-3 gap-5"
            value="skills"
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
          </TabsContent>
          <TabsContent value="projects">Projects</TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
