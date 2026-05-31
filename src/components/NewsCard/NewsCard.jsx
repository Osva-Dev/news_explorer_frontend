import "./NewsCard.css";
import imageDog from "../../images/card.png";
import saveIcon from "../../images/icons/save.svg";
import saveIconHover from "../../images/icons/save-hover.svg";

function NewsCard() {
  return (
    <div className="news-card">
      <div className="news-card__image-container">
        <img
          className="news-card__image"
          src={imageDog}
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
        <p className="news-card__date">14 de noviembre del 2020</p>
        <h2 className="news-card__title">
          Todo el mundo necesita un lugar de reflexión en la naturaleza.
        </h2>
        <p className="news-card__description">
          Desde que leí el influyente libro de Richard Louv, "El último niño en
          el bosque", la idea de tener un "lugar de reflexión" especial para mí
          se me ha quedado grabada. Este consejo, que...
        </p>
        <p className="news-card__source">Treehugger</p>
      </div>
    </div>
  );
}

export default NewsCard;
