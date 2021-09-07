import React from 'react';
import { Input, InputProps } from 'react-native-elements';

// @Assets
import { Colors } from '../../../assets/';
import styles from './styles';

const InputComponent = (props: InputProps) => {
  return (
    <Input
      errorStyle={styles.inputError}
      placeholderTextColor={Colors.secondary}
      inputStyle={styles.input}
      inputContainerStyle={styles.container}
      {...props}
    />
  );
};

export default InputComponent;
