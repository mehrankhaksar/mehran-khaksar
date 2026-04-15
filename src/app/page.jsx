import ProfileInfo from "@/components/ProfileInfo";
import ProjectList from "@/components/project/ProjectList";
import SkillList from "@/components/skill/SkillList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const revalidate = 60;

const tabs = ["skills", "projects"];

export default function Home() {
  return (
    <section className="space-y-5">
      <ProfileInfo />
      <Tabs defaultValue="skills">
        <TabsList className="max-w-[250px] h-fit grid grid-cols-2 mx-auto mb-5 p-2 bg-muted rounded-md">
          {tabs.map((tab) => {
            return (
              <TabsTrigger
                key={tab}
                value={tab}
                className="font-bold capitalize py-3 px-6"
              >
                {tab}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent value="skills">
          <SkillList />
        </TabsContent>
        <TabsContent value="projects">
          <ProjectList />
        </TabsContent>
      </Tabs>
    </section>
  );
}
