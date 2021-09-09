import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useQuery, useMutation } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';

// @Styles
import styles from './styles';

// @Types
import { Client, ClientNavigationProps, ClientRouteProps } from '../../types';

// @Components
import { ClientComponent, Loading } from '../../components';

// @Constants
import { CLIENTS_ROUTE } from '../../constants';

// @Apollo
import { CLIENT_QUERY, CREATE_MUTATION, UPDATE_MUTATION } from './apollo';

export type Props = {
  route: ClientRouteProps;
};

// @Vars
const initialValues: Client = {
  firstName: '',
  lastName: '',
  cedula: '',
  email: '',
  cellphone: '',
  address: '',
};

function ClientScreen({ route }: Props) {
  const { clientId } = route.params;
  const { data, loading } = useQuery(CLIENT_QUERY, {
    variables: {
      ids: [clientId],
    },
  });
  const [create] = useMutation(CREATE_MUTATION);
  const [update] = useMutation(UPDATE_MUTATION);
  const [apiError, setApiError] = useState('');
  const [mutationLoading, setMutationLoading] = useState(false);
  const navigation = useNavigation<ClientNavigationProps>();

  const onSubmit = async (client: Client) => {
    setMutationLoading(true);
    setApiError('');
    const { address, ...clientProps } = client;
    const input = {
      ...clientProps,
      address: {
        streetAddress: address,
      },
    };
    const submitType = clientId ? 'updateClient' : 'createClient';

    try {
      let rs;

      if (clientId) {
        rs = await update({
          variables: {
            id: clientId,
            input: {
              firstName: client.firstName,
              lastName: client.lastName,
              cedula: client.cedula || '',
              email: client.email || '',
              cellphone: client.cellphone,
              address: { streetAddress: client.address },
            },
          },
        });
      } else {
        rs = await create({
          variables: {
            input,
          },
        });
      }
      console.log('Result', rs);

      const {
        data: {
          [submitType]: { id, __typename },
        },
      } = rs;

      finishSubmit(__typename, id);
    } catch (error) {
      setApiError('LoginFailure');
      setMutationLoading(false);
    }
  };

  const finishSubmit = (requestError: string, id?: number) => {
    if (id) {
      navigation.reset({
        index: 0,
        routes: [{ name: CLIENTS_ROUTE }],
      });
      return;
    }

    setApiError(`Client${requestError}`);
    setMutationLoading(false);
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
