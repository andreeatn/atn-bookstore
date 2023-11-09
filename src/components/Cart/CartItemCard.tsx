import ImgPlaceholder from "assets/image-placeholder.webp";
import CartContext from "context/CartContext";
import CartItem from "entities/CartItem";
import { useContext } from "react";
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";

interface Props {
  cartItem: CartItem;
}

function CartItemCard({ cartItem }: Props) {
  const { toggleCartChange, modifyItemQuantity, removeCartItems } =
    useContext(CartContext);
  const selectOptions = Array.from({ length: 5 }, (_, i) => i + 1);

  const handleRemoveCartItem = (cartItemId: string) => {
    removeCartItems(cartItemId);
    toggleCartChange(true);
  };

  const handleModifyCartItemQuantity = (
    cartItemId: string,
    newQuantity: number
  ) => {
    modifyItemQuantity(cartItemId, newQuantity);
    toggleCartChange(true);
  };

  return (
    <div className="card">
      <div className="card-body row">
        <div className="col col-4 col-lg-2">
          <img
            src={cartItem?.thumbnail || ImgPlaceholder}
            alt="Book cover"
            className="object-fit-cover"
            height={100}
          />
        </div>
        <div className="col col-8 col-lg-5">
          <Link
            to={`/volumes/${cartItem.volumeId}`}
            className="card-title h5 text-decoration-none"
          >
            {cartItem.title}
          </Link>
          <p className="card-subtitle mt-2">
            <small>ID: {cartItem.volumeId}</small>
          </p>
        </div>
        <div className="col col-6 col-lg-2 my-3">
          <p className="mb-1">Quantity</p>
          <select
            className="form-select form-select-sm"
            aria-label="select-quantity"
            value={cartItem.quantity}
            onChange={(event) =>
              handleModifyCartItemQuantity(
                cartItem.volumeId,
                Number(event.target.value)
              )
            }
          >
            {selectOptions.map((opt) => (
              <option value={opt} key={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div className="col col-6 col-lg-2 my-3">
          <p className="mb-1">Price</p>
          <p>{cartItem.priceAmount} RON</p>
        </div>
        <div className="col col-12 col-lg-1 text-center my-lg-4">
          <button
            className="btn btn-outline-danger px-5 px-lg-2 px-xl-3"
            onClick={() => handleRemoveCartItem(cartItem.volumeId)}
          >
            <TbTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
