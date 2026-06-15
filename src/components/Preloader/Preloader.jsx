import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="spinner"></div>
      <p className="preloader-text">Buscando noticias...</p>
    </div>
  );
};

export default Preloader;
