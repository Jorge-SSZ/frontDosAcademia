import React from 'react';
import '../stylesheets/Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return(
    <Link to='/sign-up' className='button-59'>
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type} >
        {children}
      </button>
    </Link>
  )

}

export default Button;