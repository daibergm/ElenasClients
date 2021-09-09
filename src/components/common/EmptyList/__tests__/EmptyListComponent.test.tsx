import React from 'react';
import { render } from '@testing-library/react-native';

// @Components
import EmptyList from '../EmptyListComponent';

describe('EmptyList test suits', () => {
  it('Render correctly', () => {
    const emptyList = render(<EmptyList description="" />);
    expect(emptyList).toMatchSnapshot();
  });
});
