import "./NewsCard.css";

import saveIcon from "../../images/icons/save.svg";
import saveIconHover from "../../images/icons/save-hover.svg";

function NewsCard({ image, date, title, description, source }) {
  return (
    <div className="news-card">
      <div className="news-card__image-container">
        <img
          className="news-card__image"
          src={image}
          alt="Perro en naturaleza"
        />
        <div className="news-card__save-button__container">
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
