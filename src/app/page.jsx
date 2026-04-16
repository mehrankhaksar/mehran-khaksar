import CertificationList from "@/components/certification/CertificationList";
import ProfileInfo from "@/components/ProfileInfo";
import ProjectList from "@/components/project/ProjectList";
import SkillList from "@/components/skill/SkillList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiCodeSSlashFill, RiAwardFill, RiFolderFill } from "@remixicon/react";

const tabs = [
  {
    name: "skills",
    icon: <RiCodeSSlashFill size={18} />,
  },
  {
    name: "certifications",
    icon: <RiAwardFill size={18} />,
  },
  {
    name: "projects",
    icon: <RiFolderFill size={18} />,
  },
];

export const revalidate = 60;

export default function Home() {
  return (
    <section className="space-y-5">
      <ProfileInfo />
      <Tabs
        className="flex flex-col items-center gap-2.5"
        defaultValue="skills"
      >
        <TabsList>
          {tabs.map((tab) => {
            return (
              <TabsTrigger key={tab.name} value={tab.name}>
                {tab.icon}
                <span className="capitalize">{tab.name}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent value="skills">
          <SkillList />
        </TabsContent>
        <TabsContent value="certifications">
          <CertificationList />
        </TabsContent>
        <TabsContent value="projects">
          <ProjectList />
        </TabsContent>
      </Tabs>
    </section>
  );
}
