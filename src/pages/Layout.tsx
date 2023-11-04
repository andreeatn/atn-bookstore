import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "components/Footer";
import { VolumeQueryProvider } from "context/VolumeQueryContext";

function Layout() {
  return (
    <VolumeQueryProvider>
      <div className="container">
        <header>
          <NavBar />
        </header>
        <div className="row" style={{ marginTop: "70px" }}>
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
