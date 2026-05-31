import NewsCard from "../NewsCard/NewsCard";
import "./NewCardList.css";

function NewsCardList({ cards, showMoreButton = false, onShowMore }) {
  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
        {cards.map((card) => (
          <NewsCard key={card.id} {...card} />
        ))}
      </div>
      {showMoreButton && (
        <button className="news-card-list__show-more" onClick={onShowMore}>
          Mostrar más
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
