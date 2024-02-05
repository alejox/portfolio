import { useRef } from "react";
import "./NavBar.scss";
import Logo from "../icons/logo";
import close from "../icons/close.svg";
import menubar from "../icons/menu-hamburguesa.svg";

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="navbar" ref={navRef}>
      <div className="navbar__brand">
        <Logo width={44} />
        <p>DESARROLLADOR FRONTEND</p>
      </div>
      <nav>
        <a href="/#">INICIO</a>
        <a href="/#">EXPERIENCIA LABORAL</a>
        <a href="/#">TRABAJOS</a>
        <a href="#/" className="btn">
          Contacto
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <img src={close} alt="" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <img src={menubar} alt="" />
      </button>
    </header>
  );
};

export default NavBar;
