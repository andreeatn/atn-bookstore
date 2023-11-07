import useVolumes from "hooks/useVolumes";
import VolumeCard from "./VolumeCard";
import { useContext, useEffect, useState } from "react";
import VolumeQueryContext from "context/VolumeQueryContext";
import VolumeCardPlaceholder from "./VolumeCardPlaceholder";
import React from "react";

function VolumesCardsContainer() {
  const placeholders = [...Array(12)];
  const resultNo = 12;
  const { volumeQuery, setVolumeQuery } = useContext(VolumeQueryContext);
  const [queryObj, setQueryObj] = useState(volumeQuery);

  const handlePrevClick = () => {
    setVolumeQuery({ ...volumeQuery, startIndex: queryObj.startIndex - 1 });
  };

  const handleNextClick = () => {
    window.scroll(0, 0);
    setVolumeQuery({ ...volumeQuery, startIndex: queryObj.startIndex + 1 });
  };

  useEffect(() => {
    setQueryObj({ ...volumeQuery, resultNo: resultNo });
  }, [volumeQuery]);

  const { data: volumes, isFetching } = useVolumes(queryObj);

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {isFetching && (
            <React.Fragment>
              {placeholders.map((_, index) => (
                <div className="col" key={index}>
                  <VolumeCardPlaceholder />
                </div>
              ))}
            </React.Fragment>
          )}
          {volumes?.items.map((volume, index) => (
            <div className="col" key={index}>
              <VolumeCard volume={volume} />
            </div>
          ))}
        </div>
        {!isFetching &&
          (!volumes?.items || volumes?.items.length < resultNo) && (
            <div className="row mt-5 text-center">
              <h5>All volumes from this category have loaded.</h5>
            </div>
          )}
        <div className="row mt-5">
          <div className="col d-flex flex-row justify-content-center">
            <button
              disabled={queryObj.startIndex === 1}
              className="btn btn-secondary px-4 px-md-5 mx-3"
              onClick={handlePrevClick}
            >
              Prev
            </button>
            <button
              disabled={!volumes?.items || volumes?.items.length < resultNo}
              className="btn btn-secondary px-4 px-md-5 mx-3"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VolumesCardsContainer;
