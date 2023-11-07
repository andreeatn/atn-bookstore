import ImgPlaceholder from "assets/image-placeholder.webp";

function HomeTrendingCardPlaceholder() {
  return (
    <div className="card" style={{ height: "400px" }}>
      <img
        src={ImgPlaceholder}
        className="card-img-top object-fit-contain p-2"
        alt="Placeholder for book cover"
        height={300}
      />
      <div className="card-body text-center">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-8"></span>
        </h5>
        <p className="card-subtitle placeholder-glow">
          <span className="placeholder col-6"></span>
        </p>
      </div>
    </div>
  );
}

export default HomeTrendingCardPlaceholder;
