import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-form">
      <h1 className="search-form__title">¿Qué está pasando en el mundo?</h1>
      <p className="search-form__subtitle">
        Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
        cuenta personal.
      </p>
      <div className="search-form__field">
        <input
          type="text"
          className="search-form__input"
          placeholder="Introduce un tema"
        />
        <button className="search-form__button">Buscar</button>
      </div>
    </div>
  );
}
export default SearchForm;
