import "./NewsCard.css";
import saveIcon from "../../images/icons/save.svg";
import saveIconHover from "../../images/icons/save-hover.svg";
import deleteIcon from "../../images/icons/trash.svg";
import deleteIconHover from "../../images/icons/trash_hover.svg";

function NewsCard({
  image,
  date,
  title,
  description,
  source,
  keyword,
  isSavedPage,
  isLoggedIn,
  isSaved,
  onSave,
  onDelete,
}) {
  const handleSaveClick = () => {
    if (!isLoggedIn) return;
    if (isSaved) {
      onDelete();
    } else {
      onSave();
    }
  };

  return (
    <div className="news-card">
      <div className="news-card__image-container">
        <img className="news-card__image" src={image} alt={title} />
        {isSavedPage && keyword && (
          <div className="news-card__keyword">{keyword}</div>
        )}
        <div
          className="news-card__save-button__container"
          onClick={handleSaveClick}
        >
          {!isLoggedIn ? (
            <>
              <img
                className="news-card__save-button news-card__save-button_default"
                src={saveIcon}
                alt="Save"
              />
              <img
                className="news-card__save-button news-card__save-button_hover"
                src={saveIconHover}
                alt="Save hover"
              />
              <span className="news-card__save-tooltip">
                Inicia sesión para guardar artículos
              </span>
            </>
          ) : isSaved ? (
            <>
              <img
                className="news-card__save-button news-card__save-button_default"
                src={deleteIcon}
                alt="Delete"
              />
              <img
                className="news-card__save-button news-card__save-button_hover"
                src={deleteIconHover}
                alt="Delete hover"
              />
              <span className="news-card__save-tooltip">
                Eliminar artículo guardado
              </span>
            </>
          ) : (
            <>
              <img
                className="news-card__save-button news-card__save-button_default"
                src={saveIcon}
                alt="Save"
              />
              <img
                className="news-card__save-button news-card__save-button_hover"
                src={saveIconHover}
                alt="Save hover"
              />
              <span className="news-card__save-tooltip">Guardar artículo</span>
            </>
          )}
        </div>
      </div>
      <div className="news-card__container">
        <p className="news-card__date">{date}</p>
        <h2 className="news-card__title">{title}</h2>
        <p className="news-card__description">{description}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </div>
  );
}

export default NewsCard;
