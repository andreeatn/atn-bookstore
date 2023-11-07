import ArhitectureImg from "assets/arhitecture.jpg";
import SportsImg from "assets/sports.jpg";
import CraftsImg from "assets/crafts.jpg";
import HistoryImg from "assets/history.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import VolumeQueryContext from "context/VolumeQueryContext";

function HomeCategoriesCards() {
  const { volumeQuery, setVolumeQuery } = useContext(VolumeQueryContext);
  const categories = [
    {
      name: "Architecture",
      subject: "architecture",
      thumbnail: ArhitectureImg,
    },
    { name: "Sports", subject: "sports", thumbnail: SportsImg },
    { name: "Crafts", subject: "crafts", thumbnail: CraftsImg },
    { name: "History", subject: "history", thumbnail: HistoryImg },
  ];

  const handleClickCategoryCard = (categorySubject: string) => {
    setVolumeQuery({ ...volumeQuery, volumeSubject: categorySubject });
    window.scroll(0, 0);
  };

  return (
    <div className="container my-1">
      <div className="row g-1">
        {categories.map((category) => (
          <div className="col col-6" key={category.subject}>
            <div className="card border-secondary rounded-0">
              <img
                src={category.thumbnail}
                className="card-img-top object-fit-cover rounded-0"
                alt="Palazzo Venezia in Rome"
                height="200vh"
              />
              <div className="card-body">
                <h5 className="text-center m-0">
                  <Link
                    to={"/volumes"}
                    className="card-title stretched-link text-decoration-none"
                    onClick={() => handleClickCategoryCard(category.subject)}
                  >
                    {category.name}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCategoriesCards;
