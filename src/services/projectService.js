"use server";

import { GET_PROJECT, GET_PROJECTS } from "@/graphql/project/queries";
import HygraphClient from "@/lib/hygraph";

const getProjects = async () => {
  const response = await HygraphClient.request(GET_PROJECTS);
  return response.projects;
};

const getProject = async (slug) => {
  const response = await HygraphClient.request(GET_PROJECT, { slug });
  return response.project;
};

export { getProjects, getProject };
