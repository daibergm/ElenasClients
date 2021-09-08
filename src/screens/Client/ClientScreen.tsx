import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useQuery, gql } from '@apollo/client';

// @Styles
import styles from './styles';

// @Types
import { ClientNavigationProps, ClientRouteProps } from '../../types';

type Props = {
  navigation: ClientNavigationProps;
  route: ClientRouteProps;
};

// @Queries
const CLIENT_QUERY = gql`
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

function ClientScreen({ route }: Props) {
  const { data, loading } = useQuery(CLIENT_QUERY, {
    variables: {
      ids: [route.params.clientId],
    },
  });
  // TODO: Remove these console logs
  console.log('Data', data);
  console.log('Loading', loading);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Cliente</Text>
    </SafeAreaView>
  );
}

export default ClientScreen;
