import "./Header.css";

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
              <a href="#" className="link">
                Inicio
              </a>
            </li>

            <li className="header__item">
              <button className="header__button">Iniciar Sesión</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="hero__container">
        <h1 className="hero__title">¿Qué está pasando en el mundo?</h1>
        <p className="hero__paragraph">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
          cuenta personal.
        </p>
        <div className="hero__search">
          <input
            type="text"
            className="hero__input"
            placeholder="Introduce un tema"
          />
          <button className="hero__button">Buscar</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
