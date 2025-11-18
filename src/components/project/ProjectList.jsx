import { getProjects } from "@/services/projectService";
import ProjectListClient from "./ProjectListClient";

export default async function ProjectList() {
  const projectList = await getProjects();

  return (
    <section>
      <ProjectListClient projectList={projectList} />
    </section>
  );
}
