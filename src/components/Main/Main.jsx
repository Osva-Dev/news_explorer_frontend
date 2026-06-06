import { useState } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import "./Main.css";

function Main({ searchResults, isLoading, searchError, searchKeyword }) {
  const [visibleCount, setVisibleCount] = useState(3);
  const totalResults = searchResults.length;
  const visibleResults = searchResults.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  if (
    !searchKeyword &&
    !isLoading &&
    searchResults.length === 0 &&
    !searchError
  ) {
    return <main className="main"></main>;
  }

  return (
    <main className="main">
      <div className="main__content">
        <h2 className="main__title">Resultados de la búsqueda</h2>
        {isLoading && <Preloader />}
        {!isLoading && searchError && (
          <p className="main__error">{searchError}</p>
        )}
        {!isLoading &&
          !searchError &&
          searchResults.length === 0 &&
          searchKeyword && (
            <p className="main__nothing-found">No se ha encontrado nada</p>
          )}
        {!isLoading && !searchError && searchResults.length > 0 && (
          <>
            <NewsCardList cards={visibleResults} />
            {visibleCount < totalResults && (
              <button className="main__button" onClick={handleShowMore}>
                Mostrar más
              </button>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default Main;
