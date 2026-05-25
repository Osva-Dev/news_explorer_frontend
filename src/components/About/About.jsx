import "./About.css";

import MajinVegeta from "../../images/majin_vegeta.jpg";

function About() {
  return (
    <div className="about__container">
      <img className="about__image" src={MajinVegeta} alt="Profile Picture" />
      <h2 className="about__title">Acerca del Autor</h2>
      <p className="about__paragraph">
        Este bloque describe al autor del proyecto. Aquí debe indicar tu nombre,
        a qué te dedicas y qué tecnologías de desarrollo conoces. También puedes
        hablar de tu experiencia con Practicum, de lo que aprendiste allí y de
        cómo puedes ayudar a los clientes potenciales.
      </p>
    </div>
  );
}

export default About;
