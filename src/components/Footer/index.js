import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/wribeiiro/" target="_blank">
        <img className="Logo" src={Logo} alt="My logo" />
      </a>
      <p>
        Proudly created during a
        {' '}
        <a href="https://www.alura.com.br/">
          Alura's React Immersion
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
