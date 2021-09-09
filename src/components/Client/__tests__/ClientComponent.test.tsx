import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

// @Components
import ClientComponent from '../ClientComponent';

// @Constants
import { TEST_IDS } from '../../../constants/';

// @Types
import { Client } from '../../../types';

// @Vars
const initialValues: Client = {
  firstName: '',
  lastName: '',
  cedula: '',
  email: '',
  cellphone: '',
  address: '',
};

describe('Client test suits', () => {
  const props = {
    loading: false,
    mutationLoading: false,
    submitFunction: () => jest.fn(),
    client: initialValues,
  };

  it('Render correctly', () => {
    const client = render(<ClientComponent {...props} />);
    expect(client).toMatchSnapshot();
  });
  it('Submit function', () => {
    const { getByTestId } = render(<ClientComponent {...props} />);
    const submitButton = getByTestId(TEST_IDS.submitButton);
    const firstNameInput = getByTestId(TEST_IDS.firstNameInput);
    const lastNameInput = getByTestId(TEST_IDS.lastNameInput);
    const cellphoneInput = getByTestId(TEST_IDS.cellphoneInput);
    const addressInput = getByTestId(TEST_IDS.addressInput);
    fireEvent.changeText(firstNameInput, 'John');
    fireEvent.changeText(lastNameInput, 'Doe');
    fireEvent.changeText(cellphoneInput, '1234567890');
    fireEvent.changeText(addressInput, 'Calle 10');
    fireEvent.press(submitButton);
    waitFor(() => {
      expect(props.submitFunction).toHaveBeenCalled();
    });
  });
  it('Loading button', () => {
    const { getByTestId } = render(
      <ClientComponent {...props} loading mutationLoading />,
    );
    const submitButton = getByTestId(TEST_IDS.submitButton);
    expect(submitButton.props.accessibilityState).toStrictEqual({
      disabled: true,
      busy: true,
    });
  });
  it('Edit form', () => {
    const { getByTestId } = render(<ClientComponent {...props} id={10} />);
    const submitButton = getByTestId(TEST_IDS.editButton);
    expect(submitButton).toBeTruthy();
  });
  it('Error label', () => {
    const { getByTestId } = render(
      <ClientComponent {...props} apiError="Test error" />,
    );
    const errorLabel = getByTestId(TEST_IDS.errorLabel);
    expect(errorLabel).toBeTruthy();
  });
});
