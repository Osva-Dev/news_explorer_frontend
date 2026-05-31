import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
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
          <button className="navigation__button">Iniciar Sesión</button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
