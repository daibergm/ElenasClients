import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

// @Components
import Login from '../LoginComponent';

// @Constants
import { TEST_IDS } from '../../../constants/';

describe('Login test suits', () => {
  const props = {
    loading: false,
    submitFunction: () => jest.fn(),
  };

  it('Render correctly', () => {
    const login = render(<Login {...props} />);
    expect(login).toMatchSnapshot();
  });
  it('Submit function', () => {
    const { getByTestId } = render(<Login {...props} />);
    const submitButton = getByTestId(TEST_IDS.submitButton);
    const cellphoneInput = getByTestId(TEST_IDS.cellphoneInput);
    const passwordInput = getByTestId(TEST_IDS.passwordInput);
    fireEvent.changeText(cellphoneInput, '1234567890');
    fireEvent.changeText(passwordInput, 'nueva123');
    fireEvent.press(submitButton);
    waitFor(() => {
      expect(props.submitFunction).toHaveBeenCalled();
    });
  });
  it('Loading button', () => {
    const { getByTestId } = render(<Login {...props} loading />);
    const submitButton = getByTestId(TEST_IDS.submitButton);
    expect(submitButton.props.accessibilityState).toStrictEqual({
      disabled: true,
      busy: true,
    });
  });
});
