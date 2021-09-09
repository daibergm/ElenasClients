import React from 'react';
import { render } from '@testing-library/react-native';

// @Components
import ListItem from '../ListItemComponent';

// @Types
import { Client } from '../../../types';

describe('ListItem test suits', () => {
  const item: Client = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    cellphone: '123',
  };

  it('Render correctly', () => {
    const onPress = jest.fn();
    const listItem = render(<ListItem item={item} onPress={onPress} />);
    expect(listItem).toMatchSnapshot();
  });
  it('Test onPress', () => {
    const onPress = jest.fn();
    const listItem = render(<ListItem item={item} onPress={onPress} />);
    listItem.toJSON()?.props.onClick();
    expect(onPress).toBeCalled();
  });
});
