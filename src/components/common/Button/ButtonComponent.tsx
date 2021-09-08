import React from 'react';
import { Button, ButtonProps } from 'react-native-elements';
import { StyleProp, ViewStyle } from 'react-native';

// @Assets
import styles from './styles';

interface Props extends ButtonProps {
  secondary?: boolean;
  danger?: boolean;
}

function ButtonComponent({ secondary, ...otherProps }: Props) {
  let buttonStyle: StyleProp<ViewStyle> = secondary
    ? styles.buttonSecondary
    : styles.buttonPrimary;

  return (
    <Button
      titleStyle={[styles.title, secondary && styles.textSecondary]}
      buttonStyle={[styles.buttonDefault, buttonStyle]}
      disabledStyle={styles.buttonDisabled}
      {...otherProps}
    />
  );
}

export default ButtonComponent;
