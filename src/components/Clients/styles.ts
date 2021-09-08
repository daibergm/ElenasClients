import { StyleSheet } from 'react-native';

// @Assets
import { Colors } from '../../assets';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: Colors.white,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
});
