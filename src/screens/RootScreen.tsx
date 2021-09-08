import React from 'react';
import { ApolloProvider } from '@apollo/client';

// @Screens
import { AppScreen } from './App/';

// @Context
import { AccountState } from '../context/';

// @Config
import client from '../config/apollo';

const RootScreen = () => {
  return (
    <ApolloProvider client={client}>
      <AccountState>
        <AppScreen />
      </AccountState>
    </ApolloProvider>
  );
};

export default RootScreen;
