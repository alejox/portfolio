import { useRef } from "react";
import "./NavBar.scss";
import Logo from "../icons/Logo";
import close from "../icons/close.svg";
import menubar from "../icons/menu-hamburguesa.svg";
import cv from "../icons/cv.svg";


const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div>
        <Logo width={44} />
        <p>DESARROLLADOR FRONTEND</p>
      </div>
      <nav ref={navRef}>
        <a href="/#home" onClick={showNavbar}>INICIO</a>
        <a href="/#experience" onClick={showNavbar}>EXPERIENCIA LABORAL</a>
        <a href="/#works" onClick={showNavbar}>TRABAJOS</a>
        <a href="/#contact" onClick={showNavbar}>CONTACTO</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <img src={close} alt="" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <img src={menubar} alt="" />
      </button>
      <a
        className="cv"
        href="CVAlejandroGrajales.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download="CVAlejandroGrajales.pdf"
        title="Descarga mi hoja de vida"
      >
        <img width={30} src={cv} alt="" />
      </a>
    </header>
  );
};

export default NavBar;
