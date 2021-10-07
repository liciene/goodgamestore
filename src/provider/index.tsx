import React, {useState} from 'react';

export type Item = {
  id: number,
  name: string,
  price: number,
  score: number,
  image: string,
  amount: number,
}

export const DataContext = React.createContext<{listItem: Item[], addItem:(newItem: Item) => void, deletItem:(Item) => void}>
    ({listItem: [], addItem: (newItem: Item) => {}, deletItem: (Item) => {}});
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
        deletItem: (Item) => {
          const copyListItem = [...listItem];
          const filterItem = copyListItem.find(
              (listItem) => listItem.id === Item.id,
          );
          if (filterItem) {
            filterItem.amount = filterItem.amount - 1;
            if (filterItem.amount <= 0) {
              const itemIndex = copyListItem.findIndex(
                  (listItem) => listItem.id === Item.id,
              );
              copyListItem.splice(itemIndex, 1);
            }
          }
          setListItem(copyListItem);
        },
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default CartContext;
