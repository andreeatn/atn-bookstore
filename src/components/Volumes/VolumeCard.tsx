import ImgPlaceholder from "assets/image-placeholder.webp";
import Volume from "entities/Volume";
import { BsCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
  volume: Volume;
}

function VolumeCard({ volume }: Props) {
  return (
    <div className="card" style={{ height: "550px" }} key={volume.id}>
      <img
        src={volume.volumeInfo.imageLinks?.thumbnail || ImgPlaceholder}
        className="card-img-top object-fit-contain p-2"
        alt="Book cover"
        height={250}
      />
      <div className="card-body overflow-auto">
        <h5 className="card-title">{volume.volumeInfo.title}</h5>
        <h6 className="card-subtitle mt-2 mb-5">
          {volume.volumeInfo.authors && volume.volumeInfo.authors[0]}
        </h6>
        <p className="card-text">{volume.volumeInfo.description}</p>
      </div>

      <div className="card-footer d-flex flex-column flex-md-row justify-content-between">
        <p className="card-text text-wrap my-1">
          {volume.saleInfo.listPrice?.amount || "Out of Stock"}{" "}
          {volume.saleInfo.listPrice?.currencyCode}
        </p>
        <div>
          <Link
            to={`/volumes/${volume.id}`}
            className="btn btn-secondary p-1 me-1 p-md-2 mx-md-2"
            onClick={() => window.scroll(0, 0)}
          >
            Details
          </Link>
          <button
            disabled={!volume.saleInfo.listPrice}
            className="btn btn-secondary text-warning py-1 py-md-2"
          >
            <BsCartPlusFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VolumeCard;
