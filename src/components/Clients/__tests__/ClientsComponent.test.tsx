import React from 'react';
import { render } from '@testing-library/react-native';

// @Components
import Clients from '../ClientsComponent';

// @Types
import { Client } from '../../../types';

// @Constants
import { TEST_IDS } from '../../../constants';

describe('Clients test suits', () => {
  const data: Client[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      cellphone: '123',
    },
  ];

  it('Render correctly', () => {
    const clients = render(<Clients data={data} />);
    expect(clients).toMatchSnapshot();
  });
  it('Render with empty component', () => {
    const { getByTestId } = render(<Clients data={[]} />);
    const emptyComponent = getByTestId(TEST_IDS.emptyList);
    expect(emptyComponent).toBeTruthy();
  });
});
