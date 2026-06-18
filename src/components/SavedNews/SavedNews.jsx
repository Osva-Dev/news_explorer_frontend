import "./SavedNews.css"; // ← importa el nuevo CSS

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews() {
  const savedCards = [
    {
      id: 1,
      image: "https://picsum.photos/id/104/400/272",
      date: "4 de noviembre de 2020",
      title: "Todo el mundo necesita un lugar de reflexión en la naturaleza.",
      description:
        "Desde que leí el influyente libro de Richard Louv, 'El último niño en el bosque', la idea de tener un 'lugar de reflexión' especial para mí se me ha quedado grabada. Este consejo, que...",
      source: "Treehugger",
      keyword: "Naturaleza",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/106/400/272",
      date: "19 de febrero de 2019",
      title: "La naturaleza te hace mejor",
      description:
        "Milenios atrás ya nos percatamos de ello: el sonido del océano, los aromas de un bosque, la forma en que la luz del sol moteada baila entre las hojas.",
      source: "National Geographic",
      keyword: "Salud",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/15/400/272",
      date: "19 de octubre de 2020",
      title:
        "Fotos nostálgicas hechas por turistas en los parques nacionales de Estados Unidos",
      description:
        "Uri Lovevild Golman y Helle Løvevild Golman son exploradores de National Geographic y fotógrafos de conservación que acaban de completar un proyecto y un libro que llaman su...",
      source: "National Geographic",
      keyword: "Fotografía",
    },
    {
      id: 4,
      image: "https://picsum.photos/id/22/400/272",
      date: "11 de junio de 2021",
      title: "Cómo proteger los bosques nativos",
      description:
        "Las áreas protegidas son clave para la conservación de la biodiversidad. Un nuevo estudio revela que...",
      source: "EcoPortal",
      keyword: "Conservación",
    },
    {
      id: 5,
      image: "https://picsum.photos/id/29/400/272",
      date: "3 de marzo de 2022",
      title: "El avistamiento de ballenas se recupera tras la pandemia",
      description:
        "El turismo de naturaleza vuelve a florecer en las costas de México y California, beneficiando a las comunidades locales.",
      source: "Oceans Foundation",
      keyword: "Fauna",
    },
  ];

  const userName = "Elise";
  const savedCount = savedCards.length;
  const keywords = [
    "Naturaleza",
    "Salud",
    "Fotografía",
    "Conservación",
    "Fauna",
  ];

  return (
    <main className="saved-news">
      <div className="saved-news__header-container">
        <div className="saved-news__header-content">
          <SavedNewsHeader
            userName={userName}
            savedCount={savedCount}
            keywords={keywords}
          />
        </div>
      </div>

      <div className="saved-news__cards-container">
        <div className="saved-news__cards-content">
          <NewsCardList cards={savedCards} isSavedPage={true} />
        </div>
      </div>
    </main>
  );
}

export default SavedNews;
