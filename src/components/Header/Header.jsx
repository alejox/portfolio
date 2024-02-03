import "./Header.scss";
import profile from "../../assets/profile.webp";

const Header = () => {
  return (
    <header className="header">
      <section className="header__box">
        <article className="header__info">
          <h3 className="header__title">Hola, soy Alejandro </h3>
          <p className="header__subtitle">Desarrollador web</p>
          <p className="header__text">
            Soy un desarrollador front-end con experiencia como diseñador gráfico
            y fascinado por la programación.
          </p>
        </article>
        <button className="btn">Hoja de Vida</button>
      </section>
      <img className="header__img" src={profile} alt="" />
    </header>
  );
};

export default Header;
