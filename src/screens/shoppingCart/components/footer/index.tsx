import React from 'react';
import useFooter from './useFooter';
import {Text} from 'react-native-paper';

import {View} from 'react-native';

import styles from './styles';


const FooterComponent = () => {
  const {
    totalAmount,
    parcialPrice,
    totalFreight,
    isFreeFreight,
    totalPrice,
  } = useFooter();

  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.containerAmount}>
            <Text style={styles.descriptionAmount}>{`Itens: ${totalAmount}`}</Text>
            <Text style={styles.descriptionParcialPrice}>{`Subtotal: R$ ${parcialPrice.toFixed(2)}`}</Text>
          </View>
          <View style={styles.containerTotal}>
            <Text style={styles.descriptionFreight}>{`Frete: ${isFreeFreight ? 'Grátis': `R$${totalFreight.toFixed(2)}`}`}</Text>
            <Text style={styles.descriptionPrice}>{`Total: R$ ${totalPrice.toFixed(2)}`}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default FooterComponent;
