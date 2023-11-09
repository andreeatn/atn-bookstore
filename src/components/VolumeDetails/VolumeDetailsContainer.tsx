import ImgPLaceholder from "assets/image-placeholder.webp";
import parse from "html-react-parser";
import useVolumeDetails from "hooks/useVolumeDetails";
import React from "react";
import VolumeDetailsAddToCart from "./VolumeDetailsAddToCart";
import { useParams } from "react-router-dom";
import CartItem from "entities/CartItem";

function VolumeDetailsContainer() {
  const params = useParams();
  const { data: volume } = useVolumeDetails(params.id);
  const authorsNo = volume?.volumeInfo.authors.length;
  let currentItem: CartItem = {} as CartItem;
  volume &&
    (currentItem = {
      volumeId: volume.id,
      title: volume.volumeInfo.title,
      quantity: 1,
      priceAmount: volume.saleInfo?.listPrice?.amount,
      thumbnail: volume.volumeInfo.imageLinks?.thumbnail,
    });

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
          <p className="text-light-emphasis my-1">
            Format:{" "}
            <span className="badge bg-secondary">
              {volume?.saleInfo.isEbook ? "EBook" : "Paperback"}
            </span>
          </p>
          <p className="text-light-emphasis my-1">
            Language: <span>{volume?.volumeInfo.language}</span>
          </p>
          <p className="text-light-emphasis my-1">
            Page Count: <span>{volume?.volumeInfo.pageCount}</span>
          </p>
          <p className="text-light-emphasis my-1">
            Publisher: <span>{volume?.volumeInfo.publisher}</span>
          </p>
          <p className="text-light-emphasis my-1">
            Published Date: <span>{volume?.volumeInfo.publishedDate}</span>
          </p>
        </div>
        <div className="col col-12 col-md-12 col-lg-3">
          <VolumeDetailsAddToCart
            saleInfo={volume?.saleInfo}
            cartItem={currentItem}
          />
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <h4 className="mt-5 mb-4">Description</h4>
          <div className="text-light-emphasis">
            {volume?.volumeInfo.description
              ? parse(volume?.volumeInfo.description)
              : "No description available"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolumeDetailsContainer;
