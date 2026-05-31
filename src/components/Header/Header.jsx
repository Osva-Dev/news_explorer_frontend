import "./Header.css";
import SearchForm from "../SearchForm/SearchForm";

import newExplorer from "/newsexplorer.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img
          className="header__logo"
          src={newExplorer}
          alt="News Explorer Logo"
        />
        <div className="header__right">
          <ul className="header__list">
            <li className="header__item">
              <a href="#" className="header__link">
                Inicio
              </a>
            </li>

            <li className="header__item">
              <button className="header__button">Iniciar Sesión</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__hero">
        <h1 className="header__title">¿Qué está pasando en el mundo?</h1>
        <p className="header__paragraph">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
          cuenta personal.
        </p>
        <SearchForm />
      </div>
    </header>
  );
}

export default Header;
