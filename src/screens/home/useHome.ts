import {useNavigation} from '@react-navigation/native';
import React, {useMemo, useContext} from 'react';
import {useState} from 'react';
import products from './products.json';
import {DataContext} from '../../provider';

const useHome = () => {
  const navigation = useNavigation();
  const navigateShoppingCart = () => {
    navigation.navigate('ShoppingCart');
  };

  const [sortBy, setSortBy] = useState('');

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const {listItem} = useContext(DataContext);

  const cartItens = listItem.reduce((accumulated, actual) => accumulated + actual.amount, 0);

  const sortList = useMemo( () => {
    if (sortBy === 'scoreUp') {
      products.sort((a, b) => (b.score > a.score ? 1 : a.score > b.score ? -1 : 0));
    } else if (sortBy === 'scoreDown') {
      products.sort((a, b) => (a.score > b.score ? 1 : b.score > a.score ? -1 : 0));
    } else if (sortBy === 'priceUp') {
      products.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
    } else if (sortBy === 'priceDown') {
      products.sort((a, b) => (b.price > a.price ? 1 : a.price > b.price ? -1 : 0));
    } else if (sortBy === 'nameUp') {
      products.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    } else if (sortBy === 'nameDown') {
      products.sort((a, b) => (b.name > a.name ? 1 : a.name > b.name ? -1 : 0));
    };
    return products;
  }, [products, sortBy]);
  return {
    sortList,
    sortBy,
    setSortBy,
    visible,
    openMenu,
    closeMenu,
    navigateShoppingCart,
    cartItens,
  };
};

export default useHome;
