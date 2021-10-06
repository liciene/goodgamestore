import React from 'react';
import Navigator from './src/navigators';
import {Provider} from 'react-native-paper';
import CartContext from './src/provider';

const App = () => {
  return (
    <Provider>
      <CartContext>
        <Navigator />
      </CartContext>
    </Provider>
  );
};

export default App;
