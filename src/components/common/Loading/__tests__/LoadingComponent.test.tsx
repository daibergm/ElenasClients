import React from 'react';
import { render } from '@testing-library/react-native';

// @Components
import Loading from '../LoadingComponent';

describe('Loading test suits', () => {
  it('Render correctly', () => {
    const loading = render(<Loading />);
    expect(loading).toMatchSnapshot();
  });
});
