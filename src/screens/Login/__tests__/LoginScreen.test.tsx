import React from 'react';
import { render } from '@testing-library/react-native';

// @Screens
import Login from '../LoginScreen';

describe('Login test suits', () => {
  it('Render correctly', () => {
    const login = render(<Login />);
    expect(login).toMatchSnapshot();
  });
});
