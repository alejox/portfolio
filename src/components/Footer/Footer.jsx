import "./Footer.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../../lotties/contact.json";
import Lottie from "lottie-react";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ek3diww", "template_aofdyws", form.current, {
        publicKey: "rZBu42q5QH1qkNnvB",
      })

      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          alert('Mensaje enviado correctamente')
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <footer className="footer" id="contact">
      <h2>CONTACTO</h2>

      <form className="footer__content" ref={form} onSubmit={sendEmail}>
        <div className="footer__inputs">
          <div className="footer__field">
            <label htmlFor="name">Nombre</label>
            <input
              placeholder="¿Cuál es tu nombre?"
              id="name"
              type="text"
              name="user_name"
            />
          </div>
          <div className="footer__field">
            <label htmlFor="email">Email</label>
            <input
              placeholder="¿Cuál es tu correo?"
              id="email"
              type="email"
              name="user_email"
            />
          </div>
          <div className="footer__field">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              placeholder="¿Cuál es tu mensaje?"
            />
          </div>
          <input className="btn" type="submit" value="Send" />
        </div>

        <div className="footer__lottie">
          <Lottie animationData={contact} />
        </div>
      </form>
    </footer>
  );
};

export default Footer;
