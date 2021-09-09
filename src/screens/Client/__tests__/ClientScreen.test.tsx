import React from 'react';
import { render } from '@testing-library/react-native';
import { ApolloProvider } from '@apollo/client';

// @Screens
import Client, { Props } from '../ClientScreen';

// @Config
import apolloClient from '../../../config/apollo';

const props: Props = {
  route: {
    key: '',
    name: 'CLIENT',
    params: {},
  },
};

describe('Client test suits', () => {
  it('Render correctly', () => {
    const client = render(
      <ApolloProvider client={apolloClient}>
        <Client {...props} />
      </ApolloProvider>,
    );
    expect(client).toMatchSnapshot();
  });
});
