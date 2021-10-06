import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Appbar as RNAppbar} from 'react-native-paper';

interface Props {
  backButton?: boolean;
  title?: string
}

const AppBar = (props: Props) => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };
  return (
    <RNAppbar.Header theme={{colors:{primary:'#200F75'}}}>
      {props.backButton && (
        <RNAppbar.Action icon="arrow-left" onPress={onBack}/>
      )}
      <RNAppbar.Content title={props.title}/>
    </RNAppbar.Header>
  );
};

export default AppBar;
