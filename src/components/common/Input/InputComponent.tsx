import React from 'react';
import { Input, InputProps } from 'react-native-elements';

// @Assets
import { Colors } from '../../../assets/';
import styles from './styles';

const InputComponent = ({ errorMessage, ...otherProps }: InputProps) => {
  return (
    <Input
      errorStyle={styles.inputError}
      placeholderTextColor={Colors.secondary}
      inputStyle={styles.input}
      inputContainerStyle={[
        styles.container,
        errorMessage ? styles.borderError : styles.borderSecondary,
      ]}
      errorMessage={errorMessage}
      {...otherProps}
    />
  );
};

export default InputComponent;
