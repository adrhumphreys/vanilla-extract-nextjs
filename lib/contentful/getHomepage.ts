import { gql } from "@urql/core";

const HomepageQuery = gql`
  query getHomepage {
    pageCollection(where: { slug: "home" }, limit: 1) {
      items {
        title
        slug
        blocksCollection(limit: 20) {
          items {
            __typename
            ... on HeroBlock {
              title
              ctaTitle
              description
              backgroundImage {
                url
              }
            }
            ... on ContentTypeRichText {
              title
              content {
                json
              }
              video {
                youtubeUrl
                title
              }
            }
            ... on ImageContentBlock {
              title
              plainContent: content
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`;
