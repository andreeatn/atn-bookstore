import ATNBookstoreLogo from "assets/logo.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import FooterSubscribeForm from "./FooterSubscribeForm";

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
          <FooterSubscribeForm />
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
                All Volumes
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
