import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import newsExplorer from "/newsexplorer.svg";
import newsExplorerBlack from "/newsexplorer_black.svg";
import logOut from "../../images/icons/logout.svg";
import logOutBlack from "../../images/icons/logout_black.svg";

function Navigation({ onLoginClick, currentUser, onLogout }) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <div
      className={`navigation ${isSavedNewsPage ? "navigation_saved-news" : ""}`}
    >
      <Link to="/">
        <img
          className="navigation__logo"
          src={isSavedNewsPage ? newsExplorerBlack : newsExplorer}
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
          {currentUser ? (
            <button
              className="navigation__button navigation__button_logout"
              onClick={onLogout}
            >
              {currentUser.name}
              <img
                src={isSavedNewsPage ? logOutBlack : logOut}
                alt="Log Out Icon"
              />
            </button>
          ) : (
            <button className="navigation__button" onClick={onLoginClick}>
              Iniciar sesión
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
