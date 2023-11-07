import ImgPlaceholder from "assets/image-placeholder.webp";

function VolumeCardPlaceholder() {
  return (
    <>
      <div className="card" aria-hidden="true" style={{ height: "550px" }}>
        <img
          src={ImgPlaceholder}
          className="card-img-top object-fit-contain p-2"
          alt="Placeholder for book cover"
          height={250}
        />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <h6 className="card-subtitle mt-2 mb-5 placeholder-glow">
            <span className="placeholder col-4"></span>
          </h6>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-12"></span>
            <span className="placeholder col-8"></span>
            <span className="placeholder col-10"></span>
          </p>
        </div>

        <div className="card-footer placeholder-glow d-flex flex-column flex-md-row justify-content-between">
          <p className="card-text placeholder-glow  my-1">
            <span className="placeholder col-5"></span>
          </p>
          <div>
            <button className="btn btn-secondary disabled placeholder me-1 mx-md-2"></button>
            <button className="btn btn-secondary disabled placeholder  "></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VolumeCardPlaceholder;
