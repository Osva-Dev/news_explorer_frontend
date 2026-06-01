import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ cards, showMoreButton = false, onShowMore }) {
  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
        {cards.map((card) => (
          <NewsCard key={card.id} {...card} />
        ))}
      </div>
      {showMoreButton && (
        <button className="news-card-list__button" onClick={onShowMore}>
          Mostrar más
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
