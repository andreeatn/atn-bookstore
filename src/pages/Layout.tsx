import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "components/Footer";

function Layout() {
  return (
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
  );
}

export default Layout;
