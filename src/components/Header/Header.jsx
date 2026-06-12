import "./Header.css";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ onLoginClick, onSearch, currentUser, onLogout }) {
  const location = useLocation();
  const isSavedNewsPage = location.pathname === "/saved-news";

  return (
    <header
      className={`header ${isSavedNewsPage ? "header_no-background" : ""}`}
    >
      <Navigation
        onLoginClick={onLoginClick}
        currentUser={currentUser}
        onLogout={onLogout}
      />
      {!isSavedNewsPage && <SearchForm onSearch={onSearch} />}
    </header>
  );
}

export default Header;
