import "./SavedNewsHeader.css";

function SavedNewsHeader({ userName, count, keywords }) {
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__subtitle">Artículos guardados</p>
      <h2 className="saved-news-header__title">
        {userName}, tienes {count} artículos guardados
      </h2>
      <p className="saved-news-header__keywords">
        Por palabras clave:&nbsp;
        <span className="saved-news-header__keywords bold">
          {keywords.join(", ")}
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
