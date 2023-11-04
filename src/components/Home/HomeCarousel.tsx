import CarouselImg1 from "assets/traveling-books-landscape.jpg";
import CarouselImg2 from "assets/agatha-christie-biography-landscape.png";

function HomeCarousel() {
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
            <button className="btn btn-sm btn-light my-1 my-lg-3">
              Check them here
            </button>
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
            <button className="btn btn-sm btn-secondary my-1 my-lg-3">
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
