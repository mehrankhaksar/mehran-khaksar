const { default: HygraphClient } = require("@/lib/hygraph");

const GET_SKILLS = HygraphClient.gql(
  `
    query Skills {
        skills {
            id
            level
            name
        }
    }
  `
);

export { GET_SKILLS };
