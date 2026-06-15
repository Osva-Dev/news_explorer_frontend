import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews() {
  const savedCards = [];
  const userName = "Elise";
  const savedCount = 5;
  const keywords = ["Naturaleza", "Yellowstone", "y 2 más"];

  return (
    <main className="saved-news">
      <SavedNewsHeader
        userName={userName}
        savedCount={savedCount}
        keywords={keywords}
      />
    </main>
  );
}

export default SavedNews;
