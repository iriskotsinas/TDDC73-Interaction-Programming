import gql from 'graphql-tag';

export const GITHUB_DATA = gql`
  query MyQuery($query: String!) {
    search(first: 20, type: REPOSITORY, query: $query) {
      edges {
        node {
          ... on Repository {
            id
            name
            forks {
              totalCount
            }
            defaultBranchRef {
              target {
                ... on Commit {
                  id
                  history {
                    totalCount
                  }
                }
              }
            }
            description
            forkCount
            createdAt
            owner {
              avatarUrl
              login
              ... on User {
                id
                name
                login
                bio
                createdAt
                email
                followers {
                  totalCount
                }
              }
            }
            createdAt
            stargazerCount
            stargazers {
              totalCount
            }
            languages(first: 1) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
