import { Link } from "react-router-dom";
import "./Navigation.css";
import newExplorer from "/newsexplorer.svg";

function Navigation({ onLoginClick }) {
  // ← recibe la prop
  return (
    <div className="navigation">
      <Link to="/">
        <img
          className="navegation__logo" // Nota: tienes un typo "navegation" en lugar de "navigation"
          src={newExplorer}
          alt="News Explorer Logo"
        />
      </Link>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/" className="navigation__link">
            Inicio
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/saved-news" className="navigation__link">
            Artículos Guardados
          </Link>
        </li>
        <li className="navigation__item">
          <button className="navigation__button" onClick={onLoginClick}>
            {" "}
            {/* ← añade onClick */}
            Iniciar Sesión
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
