import { useNavigate } from "react-router-dom";

function AddToCartModal() {
  const navigate = useNavigate();

  return (
    <div
      className="modal fade"
      id="addToCartModal"
      aria-labelledby="addToCartModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addToCartModal">
              Item was successfully added to cart
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn" data-bs-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => {
                navigate("/cart");
                window.scroll(0, 0);
              }}
            >
              Go to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCartModal;
