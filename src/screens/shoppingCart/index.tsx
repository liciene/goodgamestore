import React from 'react';

import {FlatList, View} from 'react-native';
import {Text} from 'react-native-paper';

import styles from './styles';

import ItemComponent from './components/item';
import AppBar from '../../components/appbar';
import useShoppingCart from './useShoppingCart';
import FooterComponent from './components/footer';


const ShoppingCart = () => {
  const {listItem} = useShoppingCart();
  return (
    <>

      <AppBar title="GoodGame!" backButton />
      <View style={styles.topBar}>
        <Text style={styles.fontTitle}>Carrinho de compras</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={listItem}
          renderItem={({item}) => <ItemComponent item={item}/>}
          keyExtractor={(item) => item.id.toString()}
          ListFooterComponent={FooterComponent}
        />
      </View>

    </>
  );
};

export default ShoppingCart;
