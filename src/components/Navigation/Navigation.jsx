import "./Navigation.css";

function Navigation() {
  return (
    <div className="navegation">
      <ul className="navegation__list">
        <li className="navegation__item">
          <a href="#" className="navegation__link">
            Inicio
          </a>
        </li>

        <li className="navegation__item">
          <button className="navegation__button">Iniciar Sesión</button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
