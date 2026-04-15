import { gql } from "graphql-request";

const GET_PROFILE = gql`
  query Profile($id: ID!) {
    profile(where: { id: $id }) {
      bio {
        raw
      }
      cv {
        url
      }
      fullName
      profilePicture {
        url
      }
      role
      socialMedias {
        slug
        pathname
        isContact
        name
      }
    }
  }
`;

export { GET_PROFILE };
