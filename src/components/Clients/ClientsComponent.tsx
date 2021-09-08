import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

// @Styles
import styles from './styles';

// @Types
import { Client } from '../../types';

// @Components
import { EmptyList } from '../common';
import ListItemComponent from './ListItemComponent';

interface Props {
  data: Client[];
}

function ClientsComponent({ data }: Props) {
  const getKeyExtractor = (item: Client) => `${item.id}`;

  const renderItem: ListRenderItem<Client> = ({ item }) => (
    <ListItemComponent item={item} />
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
