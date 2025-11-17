import { GET_PROFILE } from "@/graphql/profile/queries";

const getProfile = async () => {
  const response = await GET_PROFILE.$send({ id: process.env.PROFILE_ID });
  return response.profile;
};

export { getProfile };
