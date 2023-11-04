import { GrCart, GrFormCheckmark } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";

function HomeAdvertisingCards() {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col col-12 col-md-4">
          <div className="card border-light ">
            <div className="card-body text-center">
              <TbTruckDelivery className="fs-1 mb-3" />
              <h5 className="card-title">24h Delivery</h5>
              <p className="card-text">
                Orders placed before 4PM are delivered next day.
              </p>
            </div>
          </div>
        </div>
        <div className="col col-12 col-md-4">
          <div className="card border-light">
            <div className="card-body text-center">
              <GrCart className="fs-1 mb-3" />
              <h5 className="card-title">Pickup from store</h5>
              <p className="card-text">
                Available in 5h after placing an order!
              </p>
            </div>
          </div>
        </div>
        <div className="col col-12 col-md-4">
          <div className="card border-light">
            <div className="card-body text-center">
              <GrFormCheckmark className="fs-1 mb-3" />
              <h5 className="card-title">Free Return</h5>
              <p className="card-text">All return are free and easy to do.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAdvertisingCards;
