import "./Footer.css";

import Facebook from "../../images/icons/facebook.svg";
import Github from "../../images/icons/github.svg";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        {"\u00A9"} 2026 Supersite, Powered by News API
      </p>
      <div className="footer__info">
        <div className="footer__links">
          <Link to="/">
            <p className="footer__link">Inicio</p>
          </Link>
          <a href="https://tripleten.com/" target="_blank">
            <p className="footer__link">Practicum</p>
          </a>
        </div>
        <div className="footer__icons">
          <a href="https://github.com" target="_blank">
            <img className="footer__icon" src={Github} alt="Github Icon" />{" "}
          </a>
          <a href="https://facebook.com" target="_blank">
            <img className="footer__icon" src={Facebook} alt="Facebook Icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
