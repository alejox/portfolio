import "./Technologies.scss";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import vue from "../../assets/vue.png";
import sass from "../../assets/sass.png";
import vueb from "../../assets/vueb.png";
import vuetify from "../../assets/vuetify.svg";
import git from "../../assets/git.png";
import figma from "../../assets/figma.png";


const Technologies = () => {
  return (
    <>
      <section className="tech">
        <h2>TECNOLOGÍAS</h2>
        <article className="tech__grid">
          <img className="tech__img" src={html} alt="HTML" title="HTML"/>
          <img className="tech__img" src={css} alt="CSS" title="CSS"/>
          <img className="tech__img" src={js} alt="JavaScript" title="JavaScript"/>
          <img className="tech__img" src={react} alt="React" title="React"/>
          <img className="tech__img" src={vue} alt="Vue" title="Vue"/>
          <img className="tech__img" src={sass} alt="Sass" title="Sass"/>
          <img className="tech__img" src={vueb} alt="Vue Bootstrap" title="Vue Bootstrap" />
          <img className="tech__img" src={vuetify} alt="Vuetify" title="Vuetify"/>
          <img className="tech__img" src={git} alt="Git" title="Git"/>
          <img className="tech__img" src={figma} alt="Figma" title="Figma"/>
        </article>
      </section>
    </>
  );
};

export default Technologies;
