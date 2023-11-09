import ATNBookstoreLogo from "assets/logo.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer() {
  const handleLinkClick = () => {
    window.scroll(0, 0);
  };

  return (
    <div className="container bg-warning">
      <div className="row py-3">
        <div className="col-12 col-md-4 col-lg-6 ms-md-2">
          <div className="logo-copy">
            <img
              src={ATNBookstoreLogo}
              alt="ATN Bookstore Logo"
              height={45}
              width={45}
              className="ms-1"
            />
            <h6>(C) 2023</h6>
          </div>
          <div className="row newsletter my-4 mb-md-0 ">
            <div className="col-12 col-lg-9 col-xl-7">
              <h5 className="mb-1">Subscribe to our newsletter</h5>
              <p className="mb-1">
                Monthly promotions and latest book releases
              </p>
              <div className="d-flex flex-row">
                <label className="visually-hidden">Email address</label>
                <input
                  id="newsletter"
                  type="text"
                  className="form-control py-1"
                  placeholder="Email address"
                />
                <button className="btn btn-sm btn-dark mx-2" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 col-lg-2 ms-md-5">
          <h5>Content links</h5>
          <ul className="list-unstyled">
            <li className="my-1">
              <a href="#" className="text-decoration-none text-black">
                About
              </a>
            </li>
            <li className="my-1">
              <Link
                to={"/volumes"}
                className="text-decoration-none text-black"
                onClick={handleLinkClick}
              >
                All Books
              </Link>
            </li>
            <li className="my-1">
              <a href="#" className="text-decoration-none text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-2 ms-md-5">
          <h5>Legal</h5>
          <ul className="list-unstyled">
            <li className="my-1">
              <HashLink
                to={"/legal#delivery-terms"}
                className="text-decoration-none text-black"
              >
                Delivery Terms
              </HashLink>
            </li>
            <li className="my-1">
              <HashLink
                to="/legal#return-policy"
                className="text-decoration-none text-black"
              >
                Return Policy
              </HashLink>
            </li>
            <li className="my-1">
              <HashLink
                to="/legal#confidentiality-policy"
                className="text-decoration-none text-black"
              >
                Confidentiality Policy
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
