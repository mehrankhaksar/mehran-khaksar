"use server";

import { GET_SKILLS } from "@/graphql/skill/queries";
import HygraphClient from "@/lib/hygraph";

const getSkills = async () => {
  const response = await HygraphClient.request(GET_SKILLS);
  return response.skills;
};

export { getSkills };
