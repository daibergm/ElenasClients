import { gql } from '@apollo/client';

// @Queries
export const CLIENT_QUERY = gql`
  query client($ids: [Int!]) {
    clientsSearch(ids: $ids) {
      ... on ClientPagination {
        results {
          id
          firstName
          lastName
          cedula
          email
          cellphone
          address
        }
      }
    }
  }
`;

// @Mutations
export const CREATE_MUTATION = gql`
  mutation createClient($input: ClientInput!) {
    createClient(input: $input) {
      ... on Client {
        id
      }
    }
  }
`;

export const UPDATE_MUTATION = gql`
  mutation updateClient($id: Int!, $input: ClientInput!) {
    updateClient(id: $id, input: $input) {
      ... on Client {
        id
      }
    }
  }
`;
