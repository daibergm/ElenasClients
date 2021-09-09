import React from 'react';
import { render } from '@testing-library/react-native';
import { ApolloProvider } from '@apollo/client';

// @Screens
import Client from '../ClientsScreen';

// @Config
import apolloClient from '../../../config/apollo';

describe('Client test suits', () => {
  it('Render correctly', () => {
    const client = render(
      <ApolloProvider client={apolloClient}>
        <Client />
      </ApolloProvider>,
    );
    expect(client).toMatchSnapshot();
  });
});
