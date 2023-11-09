import CartItem from "entities/CartItem";
import { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

const CartContext = createContext({
  cartChange: false,
  toggleCartChange: (state: boolean) => {},
  addCartItems: (cartItem: CartItem) => {},
  modifyItemQuantity: (cartItemId: string, newQuantity: number) => {},
  removeCartItems: (cartItemId: string) => {},
});

export default CartContext;

export function CartProvider({ children }: Props) {
  const [cartChange, setCartChange] = useState<boolean>(false);
  const sessionStorageItemKey = "atn-bookstore-cart-items";
  const maxQuantityPerItem = 5;

  const addCartItem = (cartItem: CartItem) => {
    const storedItems = sessionStorage
      .getItem(sessionStorageItemKey)
      ?.split("\n");
    const newItem = JSON.stringify(cartItem);

    if (!storedItems || storedItems[0].length === 0) {
      sessionStorage.setItem(sessionStorageItemKey, newItem);
    }

    if (storedItems && storedItems[0].length > 0) {
      let newItems: string = "";
      let matchFound: boolean = false;

      storedItems.map((i) => {
        const item = JSON.parse(i);
        if (item.volumeId === cartItem.volumeId) {
          if (item.quantity < maxQuantityPerItem) item.quantity++;
          matchFound = true;
          newItems.length === 0
            ? (newItems = JSON.stringify(item))
            : (newItems += "\n" + JSON.stringify(item));
          return newItems;
        } else {
          newItems.length === 0
            ? (newItems = JSON.stringify(item))
            : (newItems += "\n" + JSON.stringify(item));
        }
      });

      if (!matchFound) {
        newItems += "\n" + newItem;
      }

      sessionStorage.setItem(sessionStorageItemKey, newItems);
    }
  };

  const modifyItemQuantity = (cartItemId: string, newQuantity: number) => {
    const storedItems = sessionStorage
      .getItem(sessionStorageItemKey)
      ?.split("\n");
    let newItems: string = "";

    storedItems?.map((i) => {
      const item = JSON.parse(i);
      if (item.volumeId === cartItemId) {
        item.quantity = newQuantity;
        newItems.length === 0
          ? (newItems = JSON.stringify(item))
          : (newItems += "\n" + JSON.stringify(item));
        // return newItems;
      } else {
        newItems.length === 0
          ? (newItems = JSON.stringify(item))
          : (newItems += "\n" + JSON.stringify(item));
      }

      sessionStorage.setItem(sessionStorageItemKey, newItems);
    });
  };

  const removeCartItem = (cartItemId: string) => {
    const storedItems = sessionStorage
      .getItem(sessionStorageItemKey)
      ?.split("\n");
    const storedItemsParsed: CartItem[] = [];
    storedItems?.forEach((item) => storedItemsParsed.push(JSON.parse(item)));
    const itemToBeRemovedIndex = storedItemsParsed.findIndex(
      (item) => item.volumeId === cartItemId
    );
    if (itemToBeRemovedIndex !== -1)
      storedItemsParsed.splice(itemToBeRemovedIndex, 1);

    let newItems = "";
    storedItemsParsed.forEach((item) =>
      newItems.length === 0
        ? (newItems = JSON.stringify(item))
        : (newItems += "\n" + JSON.stringify(item))
    );

    sessionStorage.setItem(sessionStorageItemKey, newItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartChange: cartChange,
        toggleCartChange: setCartChange,
        addCartItems: addCartItem,
        modifyItemQuantity: modifyItemQuantity,
        removeCartItems: removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
