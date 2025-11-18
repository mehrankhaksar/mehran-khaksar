import HygraphClient from "@/lib/hygraph";

const GET_PROJECTS = HygraphClient.gql(
  `
  query Projects {
    projects(orderBy: publishedAt_DESC) {
      images {
        url
        fileName
      }
      id
      title
      liveLink
    }
  }
`
);

export { GET_PROJECTS };
