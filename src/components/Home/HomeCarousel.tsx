import CarouselImg1 from "assets/traveling-books-landscape.jpg";
import CarouselImg2 from "assets/agatha-christie-biography-landscape.png";
import { useContext } from "react";
import VolumeQueryContext from "context/VolumeQueryContext";
import { Link, useNavigate } from "react-router-dom";

function HomeCarousel() {
  const { volumeQuery, setVolumeQuery } = useContext(VolumeQueryContext);
  const navigate = useNavigate();
  const handleClickItem1 = () => {
    setVolumeQuery({ ...volumeQuery, volumeSubject: "travel" });
    window.scroll(0, 0);
  };
  const handleClickItem2 = () => {
    const volumeId = "pyWqDwAAQBAJ";
    navigate(`/volumes/${volumeId}`);
    window.scroll(0, 0);
  };

  return (
    <div
      id="carouselHomePage"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={CarouselImg1}
            className="d-block w-100"
            alt="A book opened on a beach"
          />
          <div className="carousel-caption top-0 my-lg-5">
            <h4 className="my-0 my-md-2">Take a break</h4>
            <p className="my-0 my-md-2">New volumes on traveling.</p>
            <Link
              to="/volumes"
              className="btn btn-sm btn-light my-1 my-lg-3"
              onClick={handleClickItem1}
            >
              Check them here
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={CarouselImg2}
            className="d-block w-100"
            alt="Agatha Christie's biografy cover"
          />
          <div className="carousel-caption text-start top-0 my-lg-5">
            <h4 className="my-0 my-md-2">The Queen of Crimes</h4>
            <p className="my-0 my-md-2">
              Learn more about the life of Agatha Christie.
            </p>
            <button
              className="btn btn-sm btn-secondary my-1 my-lg-3"
              onClick={handleClickItem2}
            >
              See more details
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselHomePage"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselHomePage"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default HomeCarousel;
