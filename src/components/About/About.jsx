import "./About.css";

import MajinVegeta from "../../images/majin_vegeta.jpg";

function About() {
  return (
    <div className="about">
      <img className="about__image" src={MajinVegeta} alt="Profile Picture" />
      <div className="about__info">
        <h2 className="about__title">Acerca del Autor</h2>
        <p className="about__paragraph">
          Hola a todos, soy Osvaldo Ochoa, Desarrollador Web Jr. Actualmente me
          encuentro especializándome en el Desarrollo Web, con enfoque en
          frontend utilizando React, así como en backend con Node.js y Express.
          Además, trabajo con bases de datos MongoDB para desarrollar
          aplicaciones web modernas, dinámicas y escalables. Me apasiona seguir
          aprendiendo y mejorar constantemente mis habilidades para crear
          experiencias funcionales y atractivas.
        </p>
        <p className="about__paragraph">
          Mi formación ha estado acompañada por mi experiencia en TripleTen,
          donde he trabajado en proyectos enfocados en buenas prácticas de
          programación, desarrollo frontend y construcción de aplicaciones full
          stack. Durante este proceso he fortalecido habilidades en React,
          JavaScript, Node.js, Express y MongoDB, además de aprender
          metodologías de trabajo similares a las utilizadas en entornos
          profesionales reales. Gracias a esta preparación, puedo ayudar a
          clientes potenciales a crear sitios y aplicaciones web modernas,
          responsivas y funcionales, priorizando tanto la experiencia del
          usuario como un código limpio y escalable.
        </p>
      </div>
    </div>
  );
}

export default About;
