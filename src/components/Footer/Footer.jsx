import "./Footer.css";

import Facebook from "../../assets/Icons/facebook.png";
import Github from "../../assets/Icons/github.png";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        {"\u00A9"} 2020 Supersite, Powered by News API
      </p>
      <div className="footer__info">
        <div className="footer__links">
          <p className="footer__link">Inicio</p>
          <p className="footer__link">Practicum</p>
        </div>
        <div className="footer__icons">
          <img className="footer__icon" src={Github} alt="Github Icon" />
          <img className="footer__icon" src={Facebook} alt="Facebook Icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
