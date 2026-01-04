import { GET_PROJECT, GET_PROJECTS } from "@/graphql/project/queries";

const getProjects = async () => {
  const response = await GET_PROJECTS.$send();
  return response.projects;
};

const getProject = async (slug) => {
  const response = await GET_PROJECT.$send({ slug });
  return response.project;
};

export { getProjects, getProject };
