import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ savedArticles, currentUser, onDeleteArticle }) {
  const keywords = [
    ...new Set(savedArticles.map((a) => a.keyword).filter(Boolean)),
  ];

  return (
    <main className="saved-news">
      <div className="saved-news__header-container">
        <div className="saved-news__header-content">
          <SavedNewsHeader
            userName={currentUser?.name || "Usuario"}
            count={savedArticles.length}
            keywords={keywords}
          />
        </div>
      </div>

      <div className="saved-news__cards-container">
        <div className="saved-news__cards-content">
          <NewsCardList
            cards={savedArticles}
            isSavedPage={true}
            isLoggedIn={!!currentUser}
            savedArticles={savedArticles}
            onDeleteArticle={onDeleteArticle}
            onSaveArticle={() => {}} 
          />
        </div>
      </div>
    </main>
  );
}

export default SavedNews;
