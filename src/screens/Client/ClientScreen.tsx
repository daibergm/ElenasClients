import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useQuery, useMutation, gql } from '@apollo/client';

// @Styles
import styles from './styles';

// @Types
import { Client, ClientNavigationProps, ClientRouteProps } from '../../types';

// @Components
import { ClientComponent, Loading } from '../../components';

// @Constants
import { CLIENTS_ROUTE } from '../../constants';

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

// @Mutations
const CREATE_MUTATION = gql`
  mutation createClient($input: ClientInput!) {
    createClient(input: $input) {
      ... on Client {
        id
      }
    }
  }
`;

// @Vars
const initialValues: Client = {
  firstName: '',
  lastName: '',
  cedula: '',
  email: '',
  cellphone: '',
  address: '',
};

function ClientScreen({ route, navigation }: Props) {
  const { clientId } = route.params;
  const { data, loading } = useQuery(CLIENT_QUERY, {
    variables: {
      ids: [clientId],
    },
  });
  const [create] = useMutation(CREATE_MUTATION);
  const [apiError, setApiError] = useState('');
  const [mutationLoading, setMutationLoading] = useState(false);

  const onSubmit = async (client: Client) => {
    setMutationLoading(true);
    const { address, ...clientProps } = client;
    const input = {
      ...clientProps,
      address: {
        streetAddress: address,
      },
    };

    try {
      let rs;

      if (clientId) return;

      rs = await create({
        variables: {
          input,
        },
      });
      const {
        data: {
          createClient: { id, __typename },
        },
      } = rs;

      if (id) {
        navigation.reset({
          index: 0,
          routes: [{ name: CLIENTS_ROUTE }],
        });
        return;
      }

      setApiError(`Client${__typename}`);
      setMutationLoading(false);
    } catch (error) {
      setApiError('LoginFailure');
      setMutationLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClientComponent
        loading={loading}
        mutationLoading={mutationLoading}
        id={clientId}
        client={data ? data.clientsSearch.results[0] : initialValues}
        apiError={apiError}
        submitFunction={onSubmit}
      />
      {loading && <Loading />}
    </SafeAreaView>
  );
}

export default ClientScreen;
