import React, {useContext} from 'react';
import {Image, View} from 'react-native';
import {Text, IconButton} from 'react-native-paper';

import styles from './styles';

import superMarioOdissey from '../../../../assets/super-mario-odyssey.png';
import callOfDutyInfiniteWarfare from '../../../../assets/call-of-duty-infinite-warfare.png';
import theWitcherIIIWildHunt from '../../../../assets/the-witcher-iii-wild-hunt.png';
import callOfDutyWWII from '../../../../assets/call-of-duty-wwii.png';
import mortalKombatXL from '../../../../assets/mortal-kombat-xl.png';
import shardsOfDarkness from '../../../../assets/shards-of-darkness.png';
import terraMediaSombrasDeMordor from '../../../../assets/terra-media-sombras-de-mordor.png';
import fifa18 from '../../../../assets/fifa-18.png';
import horizonZeroDawn from '../../../../assets/horizon-zero-dawn.png';

import {Item, DataContext} from '../../../../provider';

const images:Record<string, any> = {
  ['super-mario-odyssey.png']: superMarioOdissey,
  ['call-of-duty-infinite-warfare.png']: callOfDutyInfiniteWarfare,
  ['the-witcher-iii-wild-hunt.png']: theWitcherIIIWildHunt,
  ['call-of-duty-wwii.png']: callOfDutyWWII,
  ['mortal-kombat-xl.png']: mortalKombatXL,
  ['shards-of-darkness.png']: shardsOfDarkness,
  ['terra-media-sombras-de-mordor.png']: terraMediaSombrasDeMordor,
  ['fifa-18.png']: fifa18,
  ['horizon-zero-dawn.png']: horizonZeroDawn,
};

type Props = {
  item: Item
}

const ItemComponent = ({item}: Props) => {
  const dataContext = useContext(DataContext);
  const imageDir = images[item.image];

  return (
    <>

      <View key={item.id} style={styles.productContainer}>
        {imageDir && (
          <Image source={imageDir} style={{width: 100, height: 100}} />
        )}
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.descriptionName}>{item.name}</Text>
            <Text style={styles.descriptionPrice}>{item.price}</Text>
          </View>
          <View style={styles.containerAmount}>
            <View style={styles.containerButton}>
              <IconButton
                onPress={() => {
                  dataContext.addItem(item);
                }}
                icon="chevron-up"
                style={styles.buttonMore}
              />
              <View style={styles.viewDescriptionAmount}>
                <Text style={styles.descriptionAmount}>{`${item.amount}`}</Text>
              </View>
              <IconButton
                onPress={() => {
                  dataContext.deletItem(item);
                }}
                icon="chevron-down"
                style={styles.buttonLess}
              />
            </View>
            <Text style={styles.descriptionParcialPrice}>{`Substotal: ${(item.amount * item.price).toFixed(2)}`}</Text>
          </View>
        </View>
      </View>

    </>
  );
};

export default ItemComponent;
