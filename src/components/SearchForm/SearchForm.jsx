import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-form">
      <input
        type="text"
        className="search-form__input"
        placeholder="Introduce un tema"
      />
      <button className="search-form__search-button">Buscar</button>
    </div>
  );
}
export default SearchForm;
