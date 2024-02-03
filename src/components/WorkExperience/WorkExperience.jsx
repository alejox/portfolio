import "./WorkExperience.scss";
import work from "../../lotties/work.json";
import Lottie from "lottie-react";

const WorkExperience = () => {
  return (
    <div className="work">
      <h2>EXPERIENCIA LABORAL</h2>
      <div className="work__grid">
        <div className="work__info">
          <h3 className="work__subtitle">Desarrollador Vue js </h3>
          <h4 className="work__eos">Eos Capital</h4>
          <p className="work__text">
            <span>Funciones: </span> Implementar los proyectos con Vue 3 y
            adicionalmente realizar la migración de algunos proyectos realizados
            en Vue 2, junto con el uso de Vue Bootstrap, Sass y Typescript.
            Contribuir a la mejora del área de desarrollo front end, debido a
            que al ingresar a la empresa no existían metodologías de trabajo
            definidas. Desarrollé muchos sitios web responsivos optimizados para
            dispositivos móviles y de escritorio, aumentando la participación de
            los usuarios en un 100%. Participar en revisiones de código y
            brindar comentarios constructivos a otros desarrolladores.
          </p>
          <p className="work__date">Agosto de 2022 - Presente</p>
        </div>
        <div className="work__lottie">
          <Lottie animationData={work} />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
