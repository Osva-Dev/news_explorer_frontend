import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setError("Por favor, introduce una palabra clave");
      return;
    }
    setError("");
    onSearch(trimmedQuery);
  };

  return (
    <div className="search-form">
      <h1 className="search-form__title">¿Qué está pasando en el mundo?</h1>
      <p className="search-form__subtitle">
        Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
        cuenta personal.
      </p>
      <form className="search-form__field" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-form__input"
          placeholder="Introduce un tema"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-form__button">
          Buscar
        </button>
      </form>
      {error && <p className="search-form__error">{error}</p>}
    </div>
  );
}

export default SearchForm;
