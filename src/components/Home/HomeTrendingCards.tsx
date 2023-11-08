import ImgPlaceholder from "assets/image-placeholder.webp";
import VolumeQuery from "entities/VolumeQuery";
import useVolumes from "hooks/useVolumes";
import React from "react";
import { Link } from "react-router-dom";
import HomeTrendingCardPlaceholder from "./HomeTrendingCardPlaceholder";

function HomeTrendingCards() {
  const placeholders = [...Array(12)];
  const resultNo = 12;
  const { data: volumes, isFetching } = useVolumes({
    volumeSubject: "*",
    orderBy: "newest",
    resultNo: resultNo,
    startIndex: 1,
  } as VolumeQuery);

  return (
    <div className="container border-top border-dark">
      <h2 className="my-4">Trending</h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5 mb-5">
        {isFetching && (
          <React.Fragment>
            {placeholders.map((_, index) => (
              <div className="col" key={index}>
                <HomeTrendingCardPlaceholder />
              </div>
            ))}
          </React.Fragment>
        )}
        {volumes?.items.map((volume, index) => (
          <div className="col" key={index}>
            <div className="card" style={{ height: "400px" }}>
              <img
                src={volume.volumeInfo.imageLinks.thumbnail || ImgPlaceholder}
                className="card-img-top object-fit-contain p-2"
                alt="Book cover"
                height={300}
              />
              <div className="card-body text-center overflow-auto">
                <h5 className="card-title">{volume.volumeInfo.title}</h5>
                <p className="card-subtitle my-1">
                  {volume.volumeInfo.authors[0]}
                </p>
                <Link
                  to={`/volumes/${volume.id}`}
                  className="stretched-link"
                  onClick={() => window.scroll(0, 0)}
                ></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeTrendingCards;
