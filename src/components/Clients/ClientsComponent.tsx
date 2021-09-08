import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// @Styles
import styles from './styles';

// @Types
import { Client } from '../../types';

// @Components
import { EmptyList } from '../common';
import ListItemComponent from './ListItemComponent';

// @Constants
import { CLIENT_ROUTE } from '../../constants/';

interface Props {
  data: Client[];
}

function ClientsComponent({ data }: Props) {
  const navigation = useNavigation();

  const onNavigate = () => navigation.navigate(CLIENT_ROUTE as never);

  const getKeyExtractor = (item: Client) => `${item.id}`;

  const renderItem: ListRenderItem<Client> = ({ item }) => (
    <ListItemComponent item={item} onPress={onNavigate} />
  );

  const renderEmptyComponent = () => {
    return (
      <EmptyList description="Lo sentimos, no pudimos encontrar ningún cliente." />
    );
  };

  return (
    <FlatList
      style={styles.container}
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={getKeyExtractor}
      renderItem={renderItem}
      ListEmptyComponent={!data?.length ? renderEmptyComponent : null}
      contentContainerStyle={!data?.length && styles.emptyContainer}
    />
  );
}

export default ClientsComponent;
