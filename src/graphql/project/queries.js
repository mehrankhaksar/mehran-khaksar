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
      gallery {
        fileName
        url
      }
      slug
    }
  }
`;

const GET_PROJECT = gql`
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
`;

export { GET_PROJECTS, GET_PROJECT };
