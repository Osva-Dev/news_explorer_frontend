import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  cards,
  isSavedPage,
  isLoggedIn,
  savedArticles,
  onSaveArticle,
  onDeleteArticle,
}) {
  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
        {cards.map((card, index) => {
          const savedRecord = savedArticles.find(
            (saved) =>
              saved.articleId === card.articleId || saved.articleId === card.id,
          );

          const realId = savedRecord?.id || savedRecord?._id;

          const deleteId = isSavedPage ? card.id || card._id || realId : realId;

          const isSaved = !!savedRecord;

          const key = card.id || card._id || card.articleId || `card-${index}`;

          return (
            <NewsCard
              key={key}
              image={card.image}
              date={card.date}
              title={card.title}
              description={card.description}
              source={card.source}
              keyword={card.keyword}
              isSavedPage={isSavedPage}
              isLoggedIn={isLoggedIn}
              isSaved={isSaved}
              onSave={() => onSaveArticle(card)}
              onDelete={() => {
                if (
                  deleteId &&
                  typeof deleteId === "string" &&
                  deleteId.length > 0 &&
                  !deleteId.includes("http")
                ) {
                  onDeleteArticle(deleteId);
                } else {
                  console.warn(
                    "No se elimina: ID inválido",
                    deleteId,
                    "para",
                    card.articleId,
                  );
                }
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

export default NewsCardList;
