import { getSkills } from "@/services/skillService";
import SkillListClient from "./SkillListClient";

export default async function SkillList() {
  const skillsData = await getSkills();
  return (
    <section>
      <SkillListClient skills={skillsData} />
    </section>
  );
}
