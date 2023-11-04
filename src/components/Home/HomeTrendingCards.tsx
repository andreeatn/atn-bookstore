import ImgPlaceholder from "assets/image-placeholder.webp";
import VolumeQuery from "entities/VolumeQuery";
import { useVolumesBySubject } from "hooks/useVolumes";
import { Link } from "react-router-dom";

function HomeTrendingCards() {
  const { data: volumes } = useVolumesBySubject({
    volumeSubject: "*",
    orderBy: "newest",
    resultNo: 12,
  } as VolumeQuery);

  return (
    <div className="container border-top border-dark">
      <h2 className="my-4 ">Trending</h2>
      <div className="row g-5 mb-5">
        {volumes?.items.map((volume, index) => (
          <div className="col col-12 col-md-4 col-lg-3" key={index}>
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
                <Link to="#" className="stretched-link"></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeTrendingCards;
