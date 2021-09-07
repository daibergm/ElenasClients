import { StyleSheet } from 'react-native';

// @Assets
import { Colors } from '../../../assets';

export default StyleSheet.create({
  font: {
    marginTop: 5,
  },
  title: {
    fontSize: 18,
  },
  textSecondary: {
    color: Colors.primary,
  },
  buttonDefault: {
    height: 40,
    borderRadius: 20,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
  },
  buttonSecondary: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  buttonDisabled: {
    opacity: 0.65,
  },
});
