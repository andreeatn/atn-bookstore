import ImgPLaceholder from "assets/image-placeholder.webp";
import parse from "html-react-parser";
import useVolumeDetails from "hooks/useVolumeDetails";
import React from "react";
import VolumeDetailsAddToCart from "./VolumeDetailsAddToCart";
import { useParams } from "react-router-dom";

function VolumeDetailsContainer() {
  const params = useParams();
  const { data: volume } = useVolumeDetails(params.id);
  const authorsNo = volume?.volumeInfo.authors.length;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col col-12 col-md-6 col-lg-3 text-center align-self-center ">
          <img
            src={volume?.volumeInfo.imageLinks?.thumbnail || ImgPLaceholder}
            alt="Book cover"
            className="object-fit-contain"
            height={300}
            width={200}
          />
        </div>
        <div className="col col-12 col-md-6">
          <h1 className="mt-3 mt-md-0">{volume?.volumeInfo.title}</h1>
          <h2>{volume?.volumeInfo.subtitle}</h2>
          <h6 className="my-3">
            {volume?.volumeInfo.authors.map((author, index) => (
              <React.Fragment key={index}>
                {authorsNo && index < authorsNo - 1 ? (
                  <span>{author}, </span>
                ) : (
                  <span>{author}</span>
                )}
              </React.Fragment>
            ))}
          </h6>
          <h5 className="mt-5 mb-3">Details</h5>
          <p className="h6 fw-normal">
            Format:{" "}
            <span className="badge bg-secondary">
              {volume?.saleInfo.isEbook ? "EBook" : "Paperback"}
            </span>
          </p>
          <p className="h6 fw-normal">
            Language: <span>{volume?.volumeInfo.language}</span>
          </p>
          <p className="h6 fw-normal">
            Page Count: <span>{volume?.volumeInfo.pageCount}</span>
          </p>
          <p className="h6 fw-normal">
            Publisher: <span>{volume?.volumeInfo.publisher}</span>
          </p>
          <p className="h6 fw-normal">
            Published Date: <span>{volume?.volumeInfo.publishedDate}</span>
          </p>
        </div>
        <div className="col col-12 col-md-12 col-lg-3">
          <VolumeDetailsAddToCart saleInfo={volume?.saleInfo} />
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <h4 className="mt-5 mb-4">Description</h4>
          <p className="h6 fw-normal">
            {volume?.volumeInfo.description
              ? parse(volume?.volumeInfo.description)
              : "No description available"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VolumeDetailsContainer;
