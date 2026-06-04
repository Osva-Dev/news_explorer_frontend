import "./Header.css";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";

function Header({ onLoginClick }) {
  // ← recibe la prop
  return (
    <header className="header">
      {/* Aquí debería ir el logo, pero lo omito por ahora */}
      <Navigation onLoginClick={onLoginClick} /> {/* ← pasa la prop */}
      <SearchForm />
    </header>
  );
}

export default Header;
