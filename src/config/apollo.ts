import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'isomorphic-fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';

// @Constants
import { STORAGE_SESSION_KEY } from '../constants';

/**
 * Used to set auth header
 */
const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from async storage if it exists
  const token = await AsyncStorage.getItem(STORAGE_SESSION_KEY);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Token ${token}` : '',
    },
  };
});

const link = new HttpLink({
  uri: 'https://jc-test-do.dev.elenas.la/gql/',
  fetch,
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(link),
});

export default client;
