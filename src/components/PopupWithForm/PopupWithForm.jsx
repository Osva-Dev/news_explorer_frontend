import { useEffect } from "react";
import "./PopupWithForm.css";

function PopupWithForm({
  isOpen,
  onClose,
  title,
  buttonText,
  children,
  onSubmit,
  onSwitch,
  isSuccess = false,
  successMessage = "",
}) {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      const inputs = e.target.querySelectorAll("input");
      const values = Array.from(inputs).map((input) => input.value);
      if (title === "Iniciar sesión") {
        onSubmit(e, values[0], values[1]);
      } else if (title === "Inscribirse") {
        onSubmit(e, values[0], values[1], values[2]);
      } else {
        onSubmit(e);
      }
    }
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
        {!isSuccess ? (
          <>
            <h2 className="popup-with-form__title">{title}</h2>
            <form className="popup-with-form__form" onSubmit={handleFormSubmit}>
              {children}
              <button className="popup-with-form__button" type="submit">
                {buttonText}
              </button>
              {title === "Iniciar sesión" && (
                <p className="popup-with-form__footer">
                  o{" "}
                  <button
                    type="button"
                    className="popup-with-form__link"
                    onClick={onSwitch}
                  >
                    inscribirse
                  </button>
                </p>
              )}
              {title === "Inscribirse" && (
                <p className="popup-with-form__footer">
                  o{" "}
                  <button
                    type="button"
                    className="popup-with-form__link"
                    onClick={onSwitch}
                  >
                    iniciar sesión
                  </button>
                </p>
              )}
            </form>
          </>
        ) : (
          <div className="popup-with-form__success">
            <p className="popup-with-form__success-message">{successMessage}</p>
            <button
              className="popup-with-form__success-button"
              onClick={onClose}
            >
              {successMessage.includes("registro")
                ? "Iniciar sesión"
                : "Aceptar"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopupWithForm;
