import SkillsProjectsTabs from "@/components/SkillsProjectsTabs";
import ProfileInfo from "@/components/ProfileInfo";
import ProjectList from "@/components/project/ProjectList";
import SkillList from "@/components/skill/SkillList";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const tabs = ["skills", "projects"];

export default function Home() {
  return (
    <section className="space-y-5">
      <ProfileInfo />
      <Tabs defaultValue="skills">
        <SkillsProjectsTabs tabs={tabs} />
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
