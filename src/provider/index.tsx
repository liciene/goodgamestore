import React, {useState} from 'react';

export type Item = {
  id: number,
  name: string,
  price: number,
  score: number,
  image: string,
  amount: number,
}

export const DataContext = React.createContext<{listItem: Item[], addItem:(newItem: Item) => void}>
    ({listItem: [], addItem: (newItem: Item) => {}});
type Props = {
  children: JSX.Element
}

const CartContext = ({children}: Props) => {
  const [listItem, setListItem] = useState<Item[]>([]);
  return (
    <DataContext.Provider
      value={{
        listItem,
        addItem: (newItem) => {
          let copyListItem = [...listItem];
          const filteredItem = copyListItem.find(
              (listItem) => listItem.id === newItem.id,
          );
          if (filteredItem) {
            filteredItem.amount = filteredItem.amount + 1;
          } else {
            newItem.amount = 1;
            copyListItem = [...copyListItem, newItem];
          }
          setListItem(copyListItem);
        },
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default CartContext;
