import ATNBookstoreLogo from "assets/logo.svg";
import ThemeContext from "context/ThemeContext";
import { useContext, useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const handleThemeChange = () => {
    if (selectedTheme === "dark") {
      setSelectedTheme("light");
      setTheme("light");
    } else {
      setSelectedTheme("dark");
      setTheme("dark");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-warning py-0">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="/">
            <img
              src={ATNBookstoreLogo}
              alt="ATN Bookstore Logo"
              height={60}
              width={70}
            />
          </a>

          <button className="btn btn-dark mx-3 d-inline-block d-lg-none">
            <span>
              <IoCartSharp />
            </span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <div className="navbar-nav">
              <Link
                to={"volumes"}
                className="text-decoration-none text-black mx-2 my-1"
              >
                All Volumes
              </Link>
              <a href="/" className="text-decoration-none text-black mx-2 my-1">
                Contact
              </a>
              <div className="form-check form-switch  mx-2 mx-lg-4 my-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switchColorMode"
                  checked={selectedTheme === "dark"}
                  value={selectedTheme}
                  onChange={handleThemeChange}
                />
                <label className="form-check-label">Dark Mode</label>
              </div>
            </div>
          </div>
          <button className="btn btn-dark mx-3 d-none d-lg-inline-block">
            <span>
              <IoCartSharp />
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
