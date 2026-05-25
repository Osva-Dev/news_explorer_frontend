import "./Hero.css";

function Hero() {
  return (
    <div className="hero__container">
      <h1 className="hero__title">¿Qué está pasando en el mundo?</h1>
      <p className="hero__paragraph">
        Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
        cuenta personal.
      </p>
      <div className="hero__search">
        <input
          type="text"
          className="hero__input"
          placeholder="Introduce un tema"
        />
        <button className="hero__button">Buscar</button>
      </div>
    </div>
  );
}

export default Hero;
