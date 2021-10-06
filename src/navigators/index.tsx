import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import ShoppingCart from '../screens/shoppingCart';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="ShoppingCart" component={ShoppingCart}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
