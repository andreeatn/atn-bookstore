import HomeAdvertisingCards from "components/Home/HomeAdvertisingCards";
import HomeCarousel from "components/Home/HomeCarousel";
import HomeCategoriesCards from "components/Home/HomeCategoriesCards";
import HomeTrendingCards from "components/Home/HomeTrendingCards";
import ThemeContext from "context/ThemeContext";
import { useContext } from "react";

function HomePage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container">
      <div className="row">
        <HomeCarousel />
      </div>
      <div className="row" data-bs-theme={theme}>
        <HomeCategoriesCards />
      </div>
      <div className="row" data-bs-theme={theme}>
        <HomeAdvertisingCards />
      </div>
      <div className="row" data-bs-theme={theme}>
        <HomeTrendingCards />
      </div>
    </div>
  );
}

export default HomePage;
