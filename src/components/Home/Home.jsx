import "./home.scss";
import profile from "../../assets/profile.webp";

const home = () => {
  return (
    <section className="home">
      <section className="home__box">
        <article className="home__info">
          <h3 className="home__title">Hola, soy Alejandro </h3>
          <p className="home__subtitle">Desarrollador web</p>
          <p className="home__text">
            Soy un desarrollador front-end con experiencia como diseñador
            gráfico y fascinado por la programación.
          </p>
        </article>

        <a
          className="btn"
          href="CVAlejandroGrajales.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="CVAlejandroGrajales.pdf"
          title="Descarga mi hoja de vida"
        >
          Hoja de Vida
        </a>
      </section>
      <a
        href="CVAlejandroGrajales.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="CVAlejandroGrajales.pdf"
        title="Descarga mi hoja de vida"
      >
        <img className="home__img" src={profile} alt="" />
      </a>
    </section>
  );
};

export default home;
