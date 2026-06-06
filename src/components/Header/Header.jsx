import "./Header.css";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import Navigation from "../Navigation/Navigation";

function Header({ onLoginClick, onSearch }) {
  return (
    <header className="header">
      <Navigation onLoginClick={onLoginClick} />
      <SearchForm onSearch={onSearch} />
    </header>
  );
}

export default Header;
