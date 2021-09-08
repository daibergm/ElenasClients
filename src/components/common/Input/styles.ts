import { StyleSheet } from 'react-native';

// @Assets
import { Colors } from '../../../assets/';

export default StyleSheet.create({
  container: {
    height: 48,
  },
  borderSecondary: {
    borderBottomColor: Colors.secondary,
  },
  borderError: {
    borderBottomColor: Colors.danger,
  },
  input: {
    fontSize: 16,
    color: Colors.primary,
  },
  inputError: {
    color: Colors.danger,
    fontSize: 12,
  },
});
