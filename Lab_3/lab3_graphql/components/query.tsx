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
            description
            forkCount
            owner {
              avatarUrl
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

// export const GET_GITHUBDATA = gql`
//   query MyQuery($first: Int, $query: String!, $type: SearchType!) {
//     search(first: $first, query: $query, type: $type) {
//       edges {
//         node {
//           ... on Repository {
//             refs(first: 0, refPrefix: "refs/heads/") {
//               totalCount
//             }
//             object(expression: "master") {
//               ... on Commit {
//                 history {
//                   totalCount
//                 }
//               }
//             }
//             name
//             owner {
//               login
//             }
//             description
//             stargazers {
//               totalCount
//             }
//             primaryLanguage {
//               name
//             }
//             licenseInfo {
//               name
//             }
//           }
//         }
//       }
//     }
//   }
// `;
