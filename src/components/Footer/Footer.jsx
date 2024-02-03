import "./Footer.scss";
import contact from "../../lotties/contact.json";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
const Footer = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <footer className="footer">
      <h2>CONTACTO</h2>
      <form className="footer__content" onSubmit={handleSubmit(onSubmit)}>
        <div className="footer__inputs">
          <div className="footer__field">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              id="name"
              {...register("nombre", {
                required: true,
              })}
            />
            {errors.nombre?.type === "required" && (
              <p className="footer__error">El campo nombre es requerido</p>
            )}
          </div>
          <div className="footer__field">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              placeholder="Correo"
              id="email"
              {...register("email", { required: true, pattern:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g })}
            />
            {errors.email?.type === 'required' && <p className="footer__error">El campo email es requerido</p>}
            {errors.email?.type === 'pattern' && <p className="footer__error">El formato del email es incorrecto</p>}
          </div>
          <div className="footer__field">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              placeholder="Teléfono"
              id="phone"
              {...register("telefono", { required: true, valueAsNumber: true })}
            />
            {errors.telefono?.type === 'required' && <p className="footer__error">El campo Teléfono es requerido</p>}
          </div>
          <div className="footer__field">
            <label htmlFor="message">Mensaje</label>
            <textarea
              name=""
              id="message"
              placeholder="Mensaje"
              cols="30"
              rows="10"
              {...register("mensaje")}
            ></textarea>
          </div>
          <input className="btn" type="submit" value="Enviar" />
        </div>
        <div className="footer__lottie">
          <Lottie animationData={contact} />
        </div>
      </form>
    </footer>
  );
};

export default Footer;
