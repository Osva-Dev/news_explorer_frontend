import "./Footer.css";

import Facebook from "../../assets/Icons/facebook.png";
import Github from "../../assets/Icons/github.png";

function Footer() {
  return (
    <footer className="footer__container">
      <p className="footer__copyright">
        {"\u00A9"} 2020 Supersite, Powered by News API
      </p>
      <div className="footer__info">
        <p>Inicio</p>
        <p>Practicum</p>
        <img className="footer__icon" src={Github} alt="Github Icon" />
        <img className="footer__icon" src={Facebook} alt="Facebook Icon" />
      </div>
    </footer>
  );
}

export default Footer;
