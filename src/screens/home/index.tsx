import React from 'react';

import {View, FlatList} from 'react-native';
import {Button, Menu, IconButton, Badge} from 'react-native-paper';

import styles from './styles';

import products from './products.json';
import RenderItem from './components/item';
import useHome from './useHome';


import AppBar from '../../components/appbar';

const Home = () => {
  const {
    sortBy,
    setSortBy,
    visible,
    openMenu,
    closeMenu,
    navigateShoppingCart,
    cartItens,
  } = useHome();


  return (
    <>

      <AppBar title="GoodGame!" />
      <View style={styles.topBar}>
        <View style={styles.containerMenu}>
          <Menu visible={visible} onDismiss={closeMenu} anchor={<Button onPress={openMenu} >Ordenar</Button>}>
            <Menu.Item onPress={() => setSortBy('scoreUp')} title="Melhores avaliados"/>
            <Menu.Item onPress={() => setSortBy('scoreDown')} title="Piores avaliados"/>
            <Menu.Item onPress={() => setSortBy('priceUp')} title="Preço: menor para maior"/>
            <Menu.Item onPress={() => setSortBy('priceDown')} title="Preço: maior para menor"/>
            <Menu.Item onPress={() => setSortBy('nameUp')} title="Ordem alfabética: A-Z"/>
            <Menu.Item onPress={() => setSortBy('nameDown')} title="Ordem alfabética: Z-A"/>
          </Menu>
        </View>
        <View style={styles.containterCart}>
          <IconButton onPress={navigateShoppingCart} icon="cart-arrow-down" style={styles.imageCart} color={'#6D17EF'}/>
          { cartItens > 0 && (<Badge style={styles.badge}>{cartItens}</Badge>) }
        </View>
      </View>
      <View style={styles.productList}>
        <FlatList
          data={products}
          renderItem={({item}) => <RenderItem item={item}/>}
          keyExtractor={(item) => item.id.toString()}
          extraData={sortBy}
        />
      </View>

    </>
  );
};

export default Home;
