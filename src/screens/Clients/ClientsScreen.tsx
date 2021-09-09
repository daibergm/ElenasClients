import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { useQuery, gql } from '@apollo/client';

// @Styles
import styles from './styles';

// @Components
import { Loading, ClientsComponent } from '../../components/';

// @Context
import { AccountContext } from '../../context';

// @Queries
const CLIENT_QUERY = gql`
  query clients($page: Int, $perPage: Int) {
    clientsSearch(page: $page, perPage: $perPage) {
      ... on ClientPagination {
        currentPage
        totalPages
        resultsPerPage
        results {
          id
          firstName
          lastName
          cellphone
        }
      }
    }
  }
`;

function ClientsScreen() {
  const { data, loading } = useQuery(CLIENT_QUERY, {
    variables: {
      page: 0,
      perPage: 100,
    },
  });
  const { onLogout } = useContext(AccountContext);

  return (
    <SafeAreaView style={styles.container}>
      <ClientsComponent
        data={data?.clientsSearch.results}
        onLogout={onLogout}
      />
      {loading && <Loading />}
    </SafeAreaView>
  );
}

export default ClientsScreen;
