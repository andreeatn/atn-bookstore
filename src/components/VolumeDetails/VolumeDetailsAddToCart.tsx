import { BsCartPlusFill } from "react-icons/bs";

interface Props {
  saleInfo:
    | undefined
    | {
        isEbook: boolean;
        listPrice: {
          amount: number;
          currencyCode: "RON";
        };
      };
}

function VolumeDetailsAddToCart({ saleInfo }: Props) {
  return (
    <div className="card text-center mt-5">
      <h4 className="card-header">Add to Cart</h4>
      <div className="card-body">
        <div className="card-title">
          {saleInfo && saleInfo.listPrice ? (
            <>
              <p className="h5 text-success">In Stock</p>
              <span className="h5">
                {saleInfo.listPrice.amount}
                {saleInfo.listPrice.currencyCode}
              </span>
            </>
          ) : (
            <span className="text-danger">Out of Stock</span>
          )}
        </div>
        <button
          disabled={saleInfo && !saleInfo.listPrice}
          className="btn px-5 fs-5 btn-warning"
        >
          <BsCartPlusFill />
        </button>
      </div>
    </div>
  );
}

export default VolumeDetailsAddToCart;
