import { gql } from "graphql-request";

const GET_SKILLS = gql`
  query Skills {
    skills(first: 100) {
      id
      level
      name
    }
  }
`;
export { GET_SKILLS };
