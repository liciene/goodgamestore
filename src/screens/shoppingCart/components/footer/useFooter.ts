import {useContext} from 'react';
import {DataContext} from '../../../../provider';

const useFooter = () => {
  const {listItem} = useContext(DataContext);

  const totalAmount = listItem.reduce(
      (accumulated, actual) => accumulated + actual.amount, 0,
  );

  const parcialPrice = listItem.reduce(
      (accumulated, actual) => accumulated + actual.amount * actual.price, 0,
  );

  const totalFreight = listItem.reduce(
      (accumulated, actual) => accumulated + actual.amount * 10, 0,
  );
  const isFreeFreight = parcialPrice > 250;

  const totalPrice = parcialPrice + (isFreeFreight ? 0 : totalFreight);

  return {
    totalAmount,
    parcialPrice,
    totalFreight,
    isFreeFreight,
    totalPrice,
  };
};
export default useFooter;
