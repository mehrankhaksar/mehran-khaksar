import { gql } from "graphql-request";

const GET_PROJECTS = gql`
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
      githubLink
      gallery {
        fileName
        url
      }
      slug
      hasMoreDetails
    }
  }
`;

const GET_PROJECT = gql`
  query Project($slug: String!) {
    project(where: { slug: $slug }) {
      hasMoreDetails
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
`;

export { GET_PROJECTS, GET_PROJECT };
