import CartItem from "entities/CartItem";

const useCartItems = (state: boolean) => {
  if(state)
    {const sessionStorageItemKey = 'atn-bookstore-cart-items';
    const storedItemsStr = sessionStorage.getItem(sessionStorageItemKey);
    const storedItemsStrArray = storedItemsStr?.split("\n");
    const storedItemsParsedArray: CartItem[] = [];
    storedItemsStrArray?.forEach((item) =>
      item &&  storedItemsParsedArray.push(JSON.parse(item))
    );
    return storedItemsParsedArray;}
}

export default useCartItems;