import { GET_PROJECTS } from "@/graphql/project/queries";

const getProjects = async () => {
  const response = await GET_PROJECTS.$send();
  return response.projects;
};

export { getProjects };
