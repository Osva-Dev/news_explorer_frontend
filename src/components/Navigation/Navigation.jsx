import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import newsExplorer from "/newsexplorer.svg";
import newsExplorerBlack from "/newsexplorer_black.svg";
import logOut from "../../images/icons/logout.svg";
import logOutBlack from "../../images/icons/logout_black.svg";

function Navigation({ onLoginClick, currentUser, onLogout }) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div
        className={`navigation navigation_desktop ${isSavedNewsPage ? "navigation_saved-news" : ""}`}
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
          {currentUser && (
            <li className="navigation__item">
              <Link to="/saved-news" className="navigation__link">
                Artículos Guardados
              </Link>
            </li>
          )}
          <li className="navigation__item">
            {currentUser ? (
              <button
                className="navigation__button navigation__button_logout"
                onClick={onLogout}
              >
                {currentUser.name}
                <img
                  className="navigation__logout-icon"
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

      <div
        className={`navigation navigation_mobile ${isSavedNewsPage ? "navigation_saved-news" : ""} ${isMenuOpen ? "navigation_mobile_open" : ""}`}
      >
        <div className="navigation__mobile-header">
          <Link to="/" onClick={closeMenu}>
            <img
              className="navigation__logo"
              src={isSavedNewsPage ? newsExplorerBlack : newsExplorer}
              alt="News Explorer Logo"
            />
          </Link>
          <button className="navigation__burger" onClick={toggleMenu}>
            <span
              className={`navigation__burger-line ${isMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`navigation__burger-line ${isMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`navigation__burger-line ${isMenuOpen ? "open" : ""}`}
            ></span>
          </button>
        </div>
        <ul
          className={`navigation__list_mobile ${isMenuOpen ? "navigation__list_mobile_open" : ""}`}
        >
          <li className="navigation__item">
            <Link to="/" className="navigation__link" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          {currentUser && (
            <li className="navigation__item">
              <Link
                to="/saved-news"
                className="navigation__link"
                onClick={closeMenu}
              >
                Artículos Guardados
              </Link>
            </li>
          )}
          <li className="navigation__item">
            {currentUser ? (
              <button
                className="navigation__button navigation__button_logout"
                onClick={() => {
                  onLogout();
                  closeMenu();
                }}
              >
                {currentUser.name}
                <img
                  className="navigation__logout-icon"
                  src={isSavedNewsPage ? logOutBlack : logOut}
                  alt="Log Out Icon"
                />
              </button>
            ) : (
              <button
                className="navigation__button"
                onClick={() => {
                  onLoginClick();
                  closeMenu();
                }}
              >
                Iniciar sesión
              </button>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
