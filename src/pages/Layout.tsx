import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "components/Footer";
import { VolumeQueryProvider } from "context/VolumeQueryContext";
import ThemeContext from "context/ThemeContext";
import { useContext } from "react";

function Layout() {
  const { baseColor } = useContext(ThemeContext);

  return (
    <VolumeQueryProvider>
      <div className="container-fluid" style={{ backgroundColor: baseColor }}>
        <header>
          <NavBar />
        </header>
        <div className="container" style={{ marginTop: "70px" }}>
          <Outlet />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </VolumeQueryProvider>
  );
}

export default Layout;
