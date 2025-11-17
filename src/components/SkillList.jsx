import { getSkills } from "@/services/skillService";
import { RiCheckboxCircleLine } from "@remixicon/react";

export default async function SkillList() {
  const skillsData = await getSkills();

  return (
    <section>
      <div className="max-w-xl grid grid-cols-2 sm:grid-cols-3 gap-2.5 mx-auto">
        {skillsData.map((skillData) => (
          <div className="flex gap-1.5" key={skillData.id}>
            <RiCheckboxCircleLine className="text-primary shrink-0" />
            <div>
              <h4 className="h4 !leading-5">{skillData.name}</h4>
              <span className="text-sm font-semibold text-muted-foreground">
                {skillData.level}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
