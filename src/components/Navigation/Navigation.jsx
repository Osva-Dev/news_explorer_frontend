import "./Navigation.css";

function Navigation() {
  return (
    <div className="navegation">
      <input
        type="text"
        className="navegation__input"
        placeholder="Introduce un tema"
      />
      <button className="navegation__search-button">Buscar</button>
    </div>
  );
}

export default Navigation;
