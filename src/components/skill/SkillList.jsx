import { getSkills } from "@/services/skillService";
import SkillListClient from "./SkillListClient";

export default async function SkillList() {
  const skills = await getSkills();

  return (
    <section>
      <SkillListClient skills={skills} />
    </section>
  );
}
