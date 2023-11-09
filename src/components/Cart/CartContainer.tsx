import useCartItems from "hooks/useCartItems";
import CartItemCard from "./CartItemCard";
import CartItem from "entities/CartItem";
import CartSummary from "./CartSummary";
import { useContext, useEffect, useState } from "react";
import CartContext from "context/CartContext";

function CartContainer() {
  const { cartChange, toggleCartChange } = useContext(CartContext);
  const [hookState, setHooksState] = useState(false);

  useEffect(() => {
    setHooksState(true);
    toggleCartChange(false);
  }, [cartChange]);

  const cartItems = useCartItems(hookState);
  const productsNo = cartItems?.reduce((acc, item) => acc + item.quantity, 0);
  const productsPrice = cartItems
    ?.reduce((acc, item) => acc + item.quantity * item.priceAmount, 0)
    .toFixed(2);

  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-md-7 col-lg-8">
          {cartItems?.length === 0 && (
            <h5 className="mb-5">No item added yet.</h5>
          )}
          {cartItems?.map((item: CartItem, index: number) => (
            <div className="row mb-2" key={index}>
              <CartItemCard cartItem={item} />
            </div>
          ))}
        </div>
        <div className="col col-12 col-md-5 col-lg-4 mt-3 mt-lg-0">
          <CartSummary
            productsNo={productsNo ? productsNo : 0}
            productsPrice={productsPrice ? Number(productsPrice) : 0}
          />
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
