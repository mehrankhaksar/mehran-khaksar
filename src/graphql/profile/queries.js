import HygraphClient from "@/lib/hygraph";

const GET_PROFILE = HygraphClient.gql(
  `
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
`
);

export { GET_PROFILE };
