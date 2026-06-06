// src/components/App/App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import About from "../About/About";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { getNews } from "../../utils/ThirdPartyApi.js";
import "./App.css";

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(false);
  };
  const handleLoginClick = () => setIsLoginPopupOpen(true);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    closeAllPopups();
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    closeAllPopups();
    setIsSuccessPopupOpen(true);
  };
  const switchToRegister = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(true);
  };
  const switchToLogin = () => {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(true);
  };

  const handleSearch = async (keyword) => {
    if (!keyword.trim()) {
      alert("Por favor, introduce una palabra clave");
      return;
    }

    setIsLoading(true);
    setSearchError("");
    setSearchKeyword(keyword);

    try {
      const today = new Date();
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(today.getDate() - 7);
      const from = sevenDaysAgo.toISOString().split("T")[0];
      const to = today.toISOString().split("T")[0];

      const articles = await getNews({ keyword, from, to, pageSize: 100 });

      const formattedArticles = articles.map((article, index) => ({
        id: index,
        image:
          article.urlToImage ||
          "https://via.placeholder.com/400x272?text=No+Image",
        date: new Date(article.publishedAt).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        title: article.title,
        description: article.description || "Sin descripción",
        source: article.source.name,
      }));

      setSearchResults(formattedArticles);
      localStorage.setItem(
        "cachedNews",
        JSON.stringify({
          keyword,
          articles: formattedArticles,
          timestamp: Date.now(),
        }),
      );
    } catch (err) {
      setSearchError(
        "Lo sentimos, algo ha salido mal durante la solicitud. Es posible que haya un problema de conexión o que el servidor no funcione. Por favor, inténtalo más tarde.",
      );
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cached = localStorage.getItem("cachedNews");
    if (cached) {
      const { keyword, articles, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < 30 * 60 * 1000) {
        setSearchKeyword(keyword);
        setSearchResults(articles);
      }
    }
  }, []);

  return (
    <>
      <Header onLoginClick={handleLoginClick} onSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main
                searchResults={searchResults}
                isLoading={isLoading}
                searchError={searchError}
                searchKeyword={searchKeyword}
              />
              <About />
            </>
          }
        />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />

      <PopupWithForm
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        title="Iniciar sesión"
        buttonText="Iniciar sesión"
        onSubmit={handleLoginSubmit}
        onSwitch={switchToRegister}
      >
        <label className="popup-with-form__label">Correo electrónico</label>
        <input
          className="popup-with-form__input"
          type="email"
          placeholder="Introduce tu correo electrónico"
          required
        />
        <label className="popup-with-form__label">Contraseña</label>
        <input
          className="popup-with-form__input"
          type="password"
          placeholder="Introduce tu contraseña"
          required
        />
      </PopupWithForm>

      <PopupWithForm
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        title="Inscribirse"
        buttonText="Inscribirse"
        onSubmit={handleRegisterSubmit}
        onSwitch={switchToLogin}
      >
        <label className="popup-with-form__label">Correo electrónico</label>
        <input
          className="popup-with-form__input"
          type="email"
          placeholder="Introduce tu correo electrónico"
          required
        />
        <label className="popup-with-form__label">Contraseña</label>
        <input
          className="popup-with-form__input"
          type="password"
          placeholder="Introduce tu contraseña"
          required
        />
        <label className="popup-with-form__label">Nombre de usuario</label>
        <input
          className="popup-with-form__input"
          type="text"
          placeholder="Introduce tu nombre de usuario"
          required
        />
      </PopupWithForm>

      <PopupWithForm
        isOpen={isSuccessPopupOpen}
        onClose={closeAllPopups}
        title=""
        buttonText=""
        isSuccess={true}
      />
    </>
  );
}

export default App;
