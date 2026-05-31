import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchform">
      <input
        type="text"
        className="searchform__input"
        placeholder="Introduce un tema"
      />
      <button className="searchform__search-button">Buscar</button>
    </div>
  );
}
export default SearchForm;
