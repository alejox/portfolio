import "./Works.scss";
import kodex from "../../assets/KODEX.png";
import reim from "../../assets/REIM.png";
import mfx from "../../assets/MFX.png";
import judovi from "../../assets/JUDOVI.png";

const Works = () => {
  return (
    <div className="works">
      <h2>TRABAJOS</h2>
      <p className="works__text">
        Los siguientes proyectos muestran mis habilidades y experiencia a través
        de ejemplos de mi trabajo del mundo real. Cada proyecto se describe
        brevemente con enlaces de demostraciones en vivo. Refleja mi capacidad
        para resolver problemas complejos, trabajar con diferentes tecnologías y
        gestionar proyectos de forma eficaz.
      </p>

      <section className="works__grid">
        {/* Work Item */}
        <article className="works__item">
          <a href="https://kodexpay.com/" rel="noreferrer" target="_Blank">
            <img src={kodex} alt="" />
          </a>
          <div className="works__info works__info--right">
            <h2>KODEX PAY</h2>
            <p className="works__description">
              Landing page de plataforma de pagos en línea -
              <span>Eos Capital</span>
            </p>
            <p>
              <span className="green">#Vue </span>
              <span className="purple">#Vuetify </span>
              <span className="red">#Scss</span>
            </p>
            <button className="btn">
              <a href="https://kodexpay.com/" rel="noreferrer" target="_Blank">
                Sitio Web
              </a>
            </button>
          </div>
        </article>
        {/* Work Item */}
        <article className="works__item">
          <div className="works__info works__info--left">
            <h2>REIM PARTNERS </h2>
            <p className="works__description">
              Landing page para sitio de inversión -<span> Eos Capital</span>
            </p>
            <p>
              <span className="green">#Vue </span>
              <span className="purple">#Vue Bootstrap </span>
              <span className="red">#Scss</span>
            </p>
            <button className="btn">
              <a
                href="https://reimpartnersfx.com/"
                rel="noreferrer"
                target="_Blank"
              >
                Sitio Web
              </a>
            </button>
          </div>
          <a
            href="https://reimpartnersfx.com/"
            rel="noreferrer"
            target="_Blank"
          >
            <img src={reim} alt="" />
          </a>
        </article>
        {/* Work Item */}
        <article className="works__item works__item--reverse">
          <a href="https://brokermfx.com/#/" rel="noreferrer" target="_Blank">
            <img src={mfx} alt="" />
          </a>
          <div className="works__info works__info--right">
            <h2>MFX BROKER</h2>
            <p className="works__description">
              Plataforma de trading donde el registro del usuario es capturado
              en una base de datos, diseño personalizado por el usuario en
              figma. -<span>Eos Capital</span>
            </p>
            <p>
              <span className="green">#Vue </span>
              <span className="purple">#Vuetify </span>
              <span className="red">#Scss</span>
            </p>
            <button className="btn">
              <a
                href="https://brokermfx.com/#/"
                rel="noreferrer"
                target="_Blank"
              >
                Sitio Web
              </a>
            </button>
          </div>
        </article>
        {/* Work Item */}
        <article className="works__item">
          <div className="works__info works__info--left">
            <h2>JUDOVI</h2>
            <p className="works__description">
              Portafolio en construcción para diseñador gráfico y editor de
              video -<span> Alejoxcode </span>
            </p>
            <p>
              <span className="green">#Vue </span>
              <span className="purple">#Vue Bootstrap </span>
              <span className="red">#Scss</span>
            </p>
            <button className="btn">
              <a
                href="https://judovi.com/"
                rel="noreferrer"
                target="_Blank"
              >
                Sitio Web
              </a>
            </button>
          </div>
          <a
            href="https://judovi.com/"
            rel="noreferrer"
            target="_Blank"
          >
            <img src={judovi} alt="" />
          </a>
        </article>
      </section>
    </div>
  );
};

export default Works;
