// src/components/App/App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import About from "../About/About";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { getNews } from "../../utils/ThirdPartyApi";
import "./App.css";

const PREDEFINED_USER = {
  email: "test@test.com",
  password: "123456",
  name: "Elise",
};

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [currentUser, setCurrentUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) setCurrentUser(JSON.parse(storedUser));
    const storedArticles = localStorage.getItem("savedArticles");
    if (storedArticles) setSavedArticles(JSON.parse(storedArticles));
  }, []);

  useEffect(() => {
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
  }, [savedArticles]);

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(false);
    setSuccessMessage("");
  };

  const handleLogin = (email, password) => {
    if (
      email === PREDEFINED_USER.email &&
      password === PREDEFINED_USER.password
    ) {
      const user = { email: PREDEFINED_USER.email, name: PREDEFINED_USER.name };
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      closeAllPopups();
      setSuccessMessage("Inicio de sesión exitoso");
      setIsSuccessPopupOpen(true);
    } else {
      alert("Credenciales incorrectas. Usa: test@test.com / 123456");
    }
  };

  const handleRegister = (email, password, name) => {
    alert("Registro exitoso. Ahora inicia sesión.");
    closeAllPopups();
    setSuccessMessage("¡El registro se ha completado con éxito!");
    setIsSuccessPopupOpen(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const handleSaveArticle = (article) => {
    if (!currentUser) return;
    if (savedArticles.some((a) => a.id === article.id)) return;
    setSavedArticles([...savedArticles, article]);
  };

  const handleDeleteArticle = (articleId) => {
    setSavedArticles(savedArticles.filter((a) => a.id !== articleId));
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
        id: article.url || index,
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
      setSearchError("Lo sentimos, algo ha salido mal...");
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

  const handleLoginClick = () => setIsLoginPopupOpen(true);

  const handleLoginSubmit = (e, email, password) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  const handleRegisterSubmit = (e, email, password, name) => {
    e.preventDefault();
    handleRegister(email, password, name);
  };

  const switchToRegister = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(true);
  };

  const switchToLogin = () => {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(true);
  };

  return (
    <>
      <Header
        onLoginClick={handleLoginClick}
        onSearch={handleSearch}
        currentUser={currentUser}
        onLogout={handleLogout}
      />
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
                currentUser={currentUser}
                savedArticles={savedArticles}
                onSaveArticle={handleSaveArticle}
                onDeleteArticle={handleDeleteArticle}
              />
              <About />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNews
              savedArticles={savedArticles}
              currentUser={currentUser}
              onDeleteArticle={handleDeleteArticle}
            />
          }
        />
      </Routes>
      <Footer />

      {/* Popup de login */}
      <PopupWithForm
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        title="Iniciar sesión"
        buttonText="Iniciar sesión"
        onSubmit={handleLoginSubmit}
        onSwitch={switchToRegister}
        type="login"
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
        type="register"
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
        successMessage={successMessage}
      />
    </>
  );
}

export default App;
