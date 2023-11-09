import ImgPlaceholder from "assets/image-placeholder.webp";
import AddToCartModal from "components/AddToCartModal";
import CartContext from "context/CartContext";
import CartItem from "entities/CartItem";
import Volume from "entities/Volume";
import { useContext } from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
  volume: Volume;
}

function VolumeCard({ volume }: Props) {
  const { addCartItems } = useContext(CartContext);
  const currentItem: CartItem = {
    volumeId: volume.id,
    title: volume.volumeInfo.title,
    quantity: 1,
    priceAmount: volume.saleInfo?.listPrice?.amount,
    thumbnail: volume.volumeInfo.imageLinks?.thumbnail,
  };

  return (
    <>
      <div className="card" style={{ height: "550px" }} key={volume.id}>
        <img
          src={volume.volumeInfo.imageLinks?.thumbnail || ImgPlaceholder}
          className="card-img-top object-fit-contain p-2"
          alt="Book cover"
          height={250}
        />
        <div className="card-body overflow-auto">
          <h5 className="card-title">{volume.volumeInfo.title}</h5>
          <h6 className="card-subtitle mt-2 mb-5">
            {volume.volumeInfo.authors && volume.volumeInfo.authors[0]}
          </h6>
          <p className="card-text">{volume.volumeInfo.description}</p>
        </div>

        <div className="card-footer d-flex flex-column flex-md-row justify-content-between">
          <p className="card-text text-wrap my-1">
            {volume.saleInfo.listPrice?.amount || "Out of Stock"}{" "}
            {volume.saleInfo.listPrice?.currencyCode}
          </p>
          <div>
            <Link
              to={`/volumes/${volume.id}`}
              className="btn btn-secondary p-1 me-1 p-md-2 mx-md-2"
              onClick={() => window.scroll(0, 0)}
            >
              Details
            </Link>
            <button
              disabled={!volume.saleInfo.listPrice}
              className="btn btn-secondary text-warning py-1 py-md-2"
              data-bs-toggle="modal"
              data-bs-target="#addToCartModal"
              onClick={() => addCartItems(currentItem)}
            >
              <BsCartPlusFill />
            </button>
          </div>
        </div>
      </div>
      <AddToCartModal />
    </>
  );
}

export default VolumeCard;
