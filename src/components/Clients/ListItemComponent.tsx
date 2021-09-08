import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// @Types
import { Client } from '../../types';

import styles from './styles';

interface Props {
  item: Client;
}

function ListItemComponent({ item }: Props) {
  return (
    <TouchableOpacity style={styles.itemContainer}>
      <Text>{`${item.firstName} ${item.lastName}`}</Text>
      <Text>{`Celular: ${item.cellphone}`}</Text>
    </TouchableOpacity>
  );
}

export default ListItemComponent;
