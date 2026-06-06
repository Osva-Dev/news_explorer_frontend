import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ onLoginClick, onSearch, currentUser, onLogout }) {
  return (
    <header className="header">
      <Navigation
        onLoginClick={onLoginClick}
        currentUser={currentUser}
        onLogout={onLogout}
      />
      <SearchForm onSearch={onSearch} />
    </header>
  );
}

export default Header;
