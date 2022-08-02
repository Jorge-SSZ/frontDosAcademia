import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';
import { BiMenuAltRight } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import Button from './Button';
import '../stylesheets/NavBar.css'

export const NavBar = () => {
  
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt='logo academia para nutris' />  
          </Link>   
            <div className='menu-icon' onClick={handleClick}>
              <i>
                {
                  click ? <FaTimes /> : <BiMenuAltRight />
                }
              </i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                   Inicio
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
                   Cursos
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                   Contacto
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                   Registrate
                </Link>
              </li>
            </ul>
            {
              button && <Button buttonStyle='btn--outline'>REGISTRARSE</Button>
            }
        </div>
      </nav>
    </>
  )
}

export default NavBar;