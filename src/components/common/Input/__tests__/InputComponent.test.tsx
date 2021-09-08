import React from 'react';
import { render } from '@testing-library/react-native';

// @Components
import Input from '../InputComponent';

// @Assets
import { Colors } from '../../../../assets/';

describe('Input test suits', () => {
  it('Render correctly', () => {
    const input = render(<Input />);
    expect(input).toMatchSnapshot();
  });
  it('Render without error', () => {
    const { getByTestId } = render(<Input testID="commonInput" />);
    const input = getByTestId('commonInput');
    expect(input.props.placeholderTextColor).toEqual(Colors.secondary);
  });
  it('Render with error', () => {
    const { getByTestId } = render(
      <Input testID="commonInput" errorMessage="Test error" />,
    );
    const input = getByTestId('commonInput');
    expect(input.props.placeholderTextColor).toEqual(Colors.danger);
  });
});
