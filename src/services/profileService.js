"use server";

import { GET_PROFILE } from "@/graphql/profile/queries";
import HygraphClient from "@/lib/hygraph";

const getProfile = async () => {
  const response = await HygraphClient.request(GET_PROFILE, {
    id: process.env.PROFILE_ID,
  });
  return response.profile;
};

export { getProfile };
