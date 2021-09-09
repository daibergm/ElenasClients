import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// @Styles
import styles from './styles';
import { Colors } from '../../../assets';

function LoadingComponent() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}

export default LoadingComponent;
