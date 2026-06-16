import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ cards, isSavedPage }) {
  // ← recibir isSavedPage
  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
        {cards.map((card) => (
          <NewsCard key={card.id} {...card} isSavedPage={isSavedPage} /> // ← pasar isSavedPage
        ))}
      </div>
    </section>
  );
}

export default NewsCardList;
