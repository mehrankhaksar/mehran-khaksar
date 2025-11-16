import { GET_PROFILE } from "@/graphql/profile/queries";

const getProfile = async () => {
  const response = await GET_PROFILE.send();
  return response.profile;
};

export { getProfile };
