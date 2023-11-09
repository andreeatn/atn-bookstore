import CartContainer from "components/Cart/CartContainer";
import ThemeContext from "context/ThemeContext";
import { useContext } from "react";

function CartPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="container mb-5"
      style={{ minHeight: "65vh" }}
      data-bs-theme={theme}
    >
      <h1 className="py-5">Cart</h1>
      <CartContainer />
    </div>
  );
}

export default CartPage;
