import HygraphClient from "@/lib/hygraph";

const GET_PROJECTS = HygraphClient.gql(
  `
  query Projects {
    projects {
      id
      image {
        url
        fileName
      }
      title
      summary
      liveLink
    }
  }
`
);

export { GET_PROJECTS };
