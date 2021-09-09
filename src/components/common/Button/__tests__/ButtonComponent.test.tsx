import React from 'react';
import { render } from '@testing-library/react-native';

// @Components
import Button from '../ButtonComponent';

describe('Button test suits', () => {
  it('Render correctly', () => {
    const button = render(<Button />);
    expect(button).toMatchSnapshot();
  });
  it('Render as a secondary button', () => {
    const { getByTestId } = render(<Button testID="commonButton" secondary />);
    const button = getByTestId('commonButton');
    expect(button).toBeTruthy();
  });
});
