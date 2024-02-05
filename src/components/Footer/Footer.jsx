import "./Footer.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../../lotties/contact.json";
import Lottie from "lottie-react";
import Logo from "../icons/Logo";
import whatsapp from "../icons/whatsapp.svg";
import github from "../icons/github.svg";
import email from "../icons/email.svg";
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
          alert("Mensaje enviado correctamente");
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
      <section className="footer__info">
        <div className="footer__left">
          <div className="footer__social">
            <img width={26} src={whatsapp} alt="" />
            <a href="tel:+573112329185">+57 311 232 9185</a>
          </div>
          <div className="footer__social">
            <img width={26} src={email} alt="" />
            <a href="mailto:alejoxcode@gmail.com">alejoxcode@gmail.com</a>
          </div>
          <div className="footer__social">
            <img width={26} src={github} alt="" />
            <a href="https://github.com/alejox" rel="noreferrer" target="_blank">/alejox</a>
          </div>
        </div>
        <Logo width={40} />
      </section>
    </footer>
  );
};

export default Footer;
