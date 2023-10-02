import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faRightToBracket,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Context } from '../Context';

export default function NavbarComp() {
  const { cartPizzas, formatNum } = useContext(Context);
  const tot = cartPizzas.reduce((prev, { price, q }) => prev + price * q, 0);

  return (
    <Navbar bg="info" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <span>
            <img
              src="/public/GameZone_transparente.png"
              alt="logo"
              className="nav-img"
            />
          </span>
        </Navbar.Brand>
        <Container className="text-end">
          <NavLink to="/login" className="td-none text-white">
            <FontAwesomeIcon icon={faRightToBracket} size="lg" />
          </NavLink>
          <NavLink to="/Registro">
            <FontAwesomeIcon
              icon={faUserPlus}
              size="lg"
              style={{
                '--fa-primary-color': '#4c0075',
                '--fa-secondary-color': '#5a007a',
                '--fa-secondary-opacity': '0.5',
              }}
            />
          </NavLink>
          <NavLink className="td-none text-white" to="/Cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <Badge pill bg="warning" className="text-dark badge-pos">
              {cartPizzas.length}
            </Badge>{' '}
            {formatNum(tot)}
          </NavLink>
        </Container>
      </Container>
    </Navbar>
  );
}
