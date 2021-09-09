import { StyleSheet } from 'react-native';

import { Colors } from '../../assets/';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
    paddingHorizontal: 15,
  },
  subContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 30,
    paddingBottom: 15,
  },
  errorLabel: {
    color: Colors.danger,
    fontSize: 17,
    textAlign: 'center',
  },
});
