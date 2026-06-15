import { useState } from "react";

import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";

import "./Main.css";

import notFound from "../../images/icons/not_found.svg";

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
        {isLoading && <Preloader />}
        {!isLoading && searchError && (
          <p className="main__error">{searchError}</p>
        )}
        {!isLoading &&
          !searchError &&
          searchResults.length === 0 &&
          searchKeyword && (
            <div className="main__nothing-found">
              <img
                className="main__nothing-found-icon"
                src={notFound}
                alt="Not Found"
              />
              <h3 className="main__nothing-found-title">No se encontró nada</h3>
              <p className="main__nothing-found-subtitle">
                Lo sentimos, pero no hay nada que coincida con tus términos de
                búsqueda.
              </p>
            </div>
          )}
        {!isLoading && !searchError && searchResults.length > 0 && (
          <>
            <h2 className="main__title">Resultados de la búsqueda</h2>
            <NewsCardList cards={visibleResults} />
            {visibleCount < totalResults && (
              <button className="main__button" onClick={handleShowMore}>
                Ver más
              </button>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default Main;
