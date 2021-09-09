import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// @Styles
import styles from './styles';

// @Types
import { Client, ClientNavigationProps } from '../../types';

// @Components
import { EmptyList, Button } from '../common';
import ListItemComponent from './ListItemComponent';

// @Constants
import { CLIENT_ROUTE } from '../../constants/';

interface Props {
  data: Client[];
}

function ClientsComponent({ data }: Props) {
  const navigation = useNavigation<ClientNavigationProps>();

  const onNavigate = (clientId?: number) =>
    navigation.navigate(CLIENT_ROUTE, {
      clientId: clientId,
    });

  const getKeyExtractor = (item: Client) => `${item.id}`;

  const renderItem: ListRenderItem<Client> = ({ item }) => (
    <ListItemComponent item={item} onPress={() => onNavigate(item.id)} />
  );

  const renderEmptyComponent = () => {
    return (
      <EmptyList description="Lo sentimos, no pudimos encontrar ningún cliente." />
    );
  };

  return (
    <>
      <View style={styles.buttonContainer}>
        <Button title="CREAR CLIENTE" onPress={() => onNavigate()} />
      </View>
      <FlatList
        style={styles.container}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={getKeyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={!data?.length ? renderEmptyComponent : null}
        contentContainerStyle={!data?.length && styles.emptyContainer}
      />
    </>
  );
}

export default ClientsComponent;
