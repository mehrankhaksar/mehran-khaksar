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
      gallery {
        fileName
        url
      }
      slug
    }
  }
`
);

const GET_PROJECT = HygraphClient.gql(
  `
  query Project($slug: String!) {
    project(where: { slug: $slug }) {
      image {
        url
        fileName
      }
      title
      technologies
      liveLink
      githubLink
      summary
      gallery {
        url
        fileName
      }
      content {
        raw
      }
    }
  }
`
);

export { GET_PROJECTS, GET_PROJECT };
