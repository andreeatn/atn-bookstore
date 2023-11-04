import ArhitectureImg from "assets/arhitecture.jpg";
import SportsImg from "assets/sports.jpg";
import CraftsImg from "assets/crafts.jpg";
import HistoryImg from "assets/history.jpg";
import { Link } from "react-router-dom";

function HomeCategoriesCards() {
  return (
    <div className="container my-1">
      <div className="row g-1">
        <div className="col col-6">
          <div className="card border-secondary rounded-0">
            <img
              src={ArhitectureImg}
              className="card-img-top object-fit-cover rounded-0"
              alt="Palazzo Venezia in Rome"
              height="200vh"
            />
            <div className="card-body">
              <h5 className="card-title text-center m-0">
                <Link
                  to={"#"}
                  className="stretched-link text-decoration-none text-black"
                >
                  Arhitecture
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col col-6">
          <div className="card border-secondary rounded-0">
            <img
              src={SportsImg}
              className="card-img-top object-fit-cover rounded-0"
              alt="Man swimming"
              height="200vh"
            />
            <div className="card-body">
              <h5 className="card-title text-center m-0">
                <Link
                  to={"#"}
                  className="stretched-link text-decoration-none text-black"
                >
                  Sports
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col col-6">
          <div className="card border-secondary rounded-0">
            <img
              src={CraftsImg}
              className="card-img-top object-fit-cover rounded-0"
              alt="Crafts utensils"
              height="200vh"
            />
            <div className="card-body">
              <h5 className="card-title text-center m-0">
                <Link
                  to={"#"}
                  className="stretched-link text-decoration-none text-black"
                >
                  Crafts
                </Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col col-6">
          <div className="card border-secondary rounded-0">
            <img
              src={HistoryImg}
              className="card-img-top object-fit-cover rounded-0"
              alt="Group of people holding weapons and a flag"
              height="200vh"
            />
            <div className="card-body">
              <h5 className="card-title text-center m-0">
                <Link
                  to={"#"}
                  className="stretched-link text-decoration-none text-black"
                >
                  History
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCategoriesCards;
