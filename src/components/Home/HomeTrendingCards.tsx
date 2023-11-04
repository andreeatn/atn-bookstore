import ImgPlaceholder from "assets/image-placeholder.webp";
import { Link } from "react-router-dom";

function HomeTrendingCards() {
  return (
    <div className="container border-top border-dark">
      <h2 className=" mt-2 mb-4">Trending</h2>
      <div className="row g-5 mb-5">
        <div className="col col-12 col-md-4 col-lg-3">
          <div className="card">
            <img
              src={ImgPlaceholder}
              className="card-img-top"
              alt="Book cover"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Book title</h5>
              <p className="card-subtitle">Authors</p>
              <Link to="#" className="btn btn-secondary mt-2">
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTrendingCards;
