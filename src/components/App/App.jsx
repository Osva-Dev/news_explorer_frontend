import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import About from "../About/About";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { getNews } from "../../utils/ThirdPartyApi";
import {
  loginUser,
  registerUser,
  getSavedArticles,
  saveArticle,
  deleteSavedArticle,
} from "../../utils/MainApi";
import "./App.css";

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function InfoTooltip({ isOpen, onClose, title, message }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-with-form" onClick={handleOverlayClick}>
      <div className="popup-with-form__container">
        <button
          className="popup-with-form__close"
          onClick={onClose}
          type="button"
        >
          ✕
        </button>
        <h2 className="popup-with-form__title" style={{ color: "#ff4d4d" }}>
          ❌ {title}
        </h2>
        <p className="popup-with-form__success-message">{message}</p>
        <button
          className="popup-with-form__success-button"
          onClick={onClose}
          style={{ backgroundColor: "#ff4d4d" }}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [currentUser, setCurrentUser] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      fetch(`https://6a371f6ac105017aa638c910.mockapi.io/users/${user.id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Usuario no existe en mockapi.io");
          }
          return res.json();
        })
        .then((validUser) => {
          setCurrentUser(validUser);
          return getSavedArticles(validUser.id);
        })
        .then((articles) => {
          setSavedArticles(articles);
        })
        .catch((err) => {
          console.error("Error al validar usuario:", err);
          localStorage.removeItem("currentUser");
          setCurrentUser(null);
          setSavedArticles([]);
        });
    }
  }, []);

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(false);
    setIsErrorPopupOpen(false);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleLoginClick = () => setIsLoginPopupOpen(true);

  const handleLoginSubmit = async (e, email, password) => {
    e.preventDefault();
    try {
      const user = await loginUser(email, password);
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      const articles = await getSavedArticles(user.id);
      setSavedArticles(articles);
      closeAllPopups();
      setSuccessMessage("Inicio de sesión exitoso");
      setIsSuccessPopupOpen(true);
    } catch (error) {
      setErrorMessage(error.message);
      setIsErrorPopupOpen(true);
    }
  };

  const handleRegisterSubmit = async (e, email, password, name) => {
    e.preventDefault();
    try {
      await registerUser(email, password, name);
      closeAllPopups();
      setSuccessMessage("¡El registro se ha completado con éxito!");
      setIsSuccessPopupOpen(true);
    } catch (error) {
      setErrorMessage(error.message);
      setIsErrorPopupOpen(true);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setSavedArticles([]);
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const handleSaveArticle = async (article) => {
    if (!currentUser) return;
    try {
      const saved = await saveArticle(currentUser.id, article);
      setSavedArticles((prev) => [...prev, saved]);
    } catch (error) {
      setErrorMessage(error.message);
      setIsErrorPopupOpen(true);
    }
  };

  const handleDeleteArticle = async (savedArticleId) => {
    if (
      !savedArticleId ||
      typeof savedArticleId !== "string" ||
      savedArticleId.includes("undefined")
    ) {
      console.warn("ID inválido:", savedArticleId);
      return;
    }
    try {
      await deleteSavedArticle(savedArticleId);
      setSavedArticles((prev) =>
        prev.filter((a) => a.id !== savedArticleId && a._id !== savedArticleId),
      );
    } catch (error) {
      setErrorMessage(error.message);
      setIsErrorPopupOpen(true);
    }
  };

  const handleSearch = async (keyword) => {
    if (!keyword.trim()) {
      setErrorMessage("Por favor, introduce una palabra clave");
      setIsErrorPopupOpen(true);
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
        keyword: keyword,
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
      setSearchError("Lo sentimos, algo ha salido mal durante la solicitud...");
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
            <ProtectedRoute isLoggedIn={!!currentUser}>
              <SavedNews
                savedArticles={savedArticles}
                currentUser={currentUser}
                onDeleteArticle={handleDeleteArticle}
              />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />

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

      <InfoTooltip
        isOpen={isErrorPopupOpen}
        onClose={closeAllPopups}
        title="Error"
        message={errorMessage}
      />
    </>
  );
}

export default App;
