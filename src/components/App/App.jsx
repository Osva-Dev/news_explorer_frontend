import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import About from "../About/About";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./App.css";

//Your API key is: f14b4f2892934ac8b9711d2541243e6d

function App() {
  // Estados para los popups
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  // Función para cerrar todos los popups
  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(false);
  };

  // Funciones para abrir popups específicos
  const handleLoginClick = () => setIsLoginPopupOpen(true);
  const handleRegisterClick = () => setIsRegisterPopupOpen(true);

  // Manejadores de envío (por ahora solo cierran y abren éxito)
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la petición a la API de login
    closeAllPopups();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la petición a la API de registro
    closeAllPopups();
    setIsSuccessPopupOpen(true); // muestra mensaje de éxito
  };

  // Funciones para cambiar entre login y registro
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
      <Header onLoginClick={handleLoginClick} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <About />
            </>
          }
        />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />

      {/* Popup de inicio de sesión */}
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

      {/* Popup de registro */}
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

      {/* Popup de éxito */}
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
