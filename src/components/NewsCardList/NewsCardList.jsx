import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ cards, onShowMore }) {
  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
        {cards.map((card) => (
          <NewsCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}

export default NewsCardList;
