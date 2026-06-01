import "./Header.css";

import { Link } from "react-router-dom";

import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <Navigation />
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
