import { getProjects } from "@/services/projectService";
import ProjectListClient from "./ProjectListClient";

export default async function ProjectList() {
  const projects = await getProjects();

  return (
    <section>
      <ProjectListClient projects={projects} />
    </section>
  );
}
