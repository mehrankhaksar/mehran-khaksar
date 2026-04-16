import { gql } from "graphql-request";

const GET_CERTIFICATIONS = gql`
  query Certifications {
    certifications {
      id
      title
      credentialId
      media {
        url
        fileName
      }
      issuer
      issueDate
      skills {
        name
        id
      }
    }
  }
`;

export { GET_CERTIFICATIONS };
