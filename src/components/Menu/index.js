import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="My logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        New video
      </Button>
    </nav>
  );
}

export default Menu;