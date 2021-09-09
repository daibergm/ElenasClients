import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// @Types
import { Client } from '../../types';

import styles from './styles';

interface Props {
  item: Client;
  onPress: () => void;
}

function ListItemComponent({ item, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <Text>{`${item.firstName} ${item.lastName}`}</Text>
      <Text>{`Celular: ${item.cellphone}`}</Text>
    </TouchableOpacity>
  );
}

export default ListItemComponent;
