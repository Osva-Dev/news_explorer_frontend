import NewsCardList from "../NewCardList/NewCardList";

function Main() {
  // Mock de 6 tarjetas (mismo contenido)
  const mockCards = Array(6).fill({ id: 1 }); // mientras NewsCard no use props, esto funciona

  return (
    <main className="main">
      <NewsCardList cards={mockCards} showMoreButton={true} />
    </main>
  );
}

export default Main;
