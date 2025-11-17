const { GET_SKILLS } = require("@/graphql/skill/queries");

const getSkills = async () => {
  const response = await GET_SKILLS.$send();
  return response.skills;
};

export { getSkills };
