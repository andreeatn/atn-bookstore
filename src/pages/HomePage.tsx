import HomeAdvertisingCards from "components/Home/HomeAdvertisingCards";
import HomeCarousel from "components/Home/HomeCarousel";
import HomeCategoriesCards from "components/Home/HomeCategoriesCards";
import HomeTrendingCards from "components/Home/HomeTrendingCards";

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <HomeCarousel />
      </div>
      <div className="row">
        <HomeCategoriesCards />
      </div>
      <div className="row">
        <HomeAdvertisingCards />
      </div>
      <div className="row">
        <HomeTrendingCards />
      </div>
    </div>
  );
}

export default HomePage;
