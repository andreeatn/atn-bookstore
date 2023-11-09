interface Props {
  productsNo: number;
  productsPrice: number;
}

function CartSummary({ productsNo, productsPrice }: Props) {
  const deliveryFee = 10;
  const totalPrice = productsPrice + deliveryFee;

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="text-center">Summary</h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <p>Products({productsNo})</p>
          </div>
          <div className="col">
            <p>{productsPrice} RON</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Delivery</p>
          </div>
          <div className="col">
            <p>{deliveryFee} RON</p>
          </div>
        </div>
      </div>
      <div className="card-footer ">
        <div className="row ">
          <div className="col h6">Total</div>
          <div className="col h6"> {totalPrice} RON</div>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
