import {useContext} from 'react';
import {DataContext} from '../../provider';

const useShoppingCart = () => {
  const {listItem} = useContext(DataContext);


  return {
    listItem,
  };
};
export default useShoppingCart;
