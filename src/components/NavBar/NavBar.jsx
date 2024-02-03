import './NavBar.scss';
import Logo from '../icons/logo';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className='navbar__brand'>
        <Logo width={44}/>
        <p>DESARROLLADOR FRONTEND</p>
      </div>
      <ul className="list">
        <li className="list__item">INICIO</li>
        <li className="list__item">EXPERIENCIA</li>
        <li className="list__item">TRABAJOS</li>
      </ul>
      <button className="btn">Contacto</button>
    </nav>
  );
};

export default NavBar;
