import "./Header.css";

function Header() {
  return (
    <div className="header__container">
      <h3 className="header__title">NewsExplorer</h3>
      <p className="header__option">Inicio</p>
      <button className="header__button">Iniciar Sesión</button>
    </div>
  );
}

export default Header;
