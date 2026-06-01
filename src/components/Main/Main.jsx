import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
function Main() {
  const cards = [
    {
      id: 1,
      image: "https://picsum.photos/id/104/400/272",
      date: "14 de noviembre del 2020",
      title: "Todo el mundo necesita un lugar de reflexión en la naturaleza.",
      description: "Desde que leí el influyente libro de Richard Louv...",
      source: "Treehugger",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/106/400/272",
      date: "19 de octubre de 2020",
      title: "El Grand renueva el histórico Camino de la Cresta",
      description: "La unión de los senderos...",
      source: "National Parks Traveler",
    },
    {
      id: 3,
      image:
        "https://cdn.sanity.io/images/5vm5yn1d/pro/5cb1f9400891d9da5a4926d7814bd1b89127ecba-1300x867.jpg?fm=webp&q=80",
      date: "4 de noviembre de 2020",
      title: "Todo el mundo necesita un lugar de reflexión en la naturaleza.",
      description:
        "Desde que leí el influyente libro de Richard Louv, El último niño en el bosque, la idea de tener un lugar de reflexión especial para mi se me ha quedado grabada. Este consejo, que...",
      source: "treehugger",
    },
  ];

  return (
    <main className="main">
      <div className="main__content">
        <h2 className="main__title">Resultados de la Búsqueda</h2>
        <NewsCardList cards={cards} showMoreButton={true} />
      </div>
    </main>
  );
}

export default Main;
