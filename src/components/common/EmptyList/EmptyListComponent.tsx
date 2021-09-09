import React from 'react';
import { View, Text } from 'react-native';

// @Constants
import { TEST_IDS } from '../../../constants';

import styles from './styles';

interface Props {
  description: string;
}

function EmptyListComponent({ description }: Props) {
  return (
    <View testID={TEST_IDS.emptyList} style={styles.container}>
      <Text style={styles.title}>Buscar Clientes</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

export default EmptyListComponent;
