import { useEffect } from "react";
import "./PopupWithForm.css";

function PopupWithForm({
  isOpen,
  onClose,
  title,
  buttonText,
  children,
  onSubmit,
  onSwitch, // para cambiar entre login y registro
  isSuccess = false,
}) {
  // Cerrar con tecla Escape
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

  // Cerrar al hacer clic en el overlay (fondo)
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
        <h2 className="popup-with-form__title">{title}</h2>
        {!isSuccess ? (
          <form className="popup-with-form__form" onSubmit={onSubmit}>
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
        ) : (
          <div className="popup-with-form__success">
            <p className="popup-with-form__success-message">
              ¡El registro se ha completado con éxito!
            </p>
            <button
              className="popup-with-form__success-button"
              onClick={onClose}
            >
              Iniciar sesión
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopupWithForm;
