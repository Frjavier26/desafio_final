import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faUserCheck,
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
              src="/GameZone_transparente.png"
              alt="GameZone logo"
              className="nav-img"
            />
          </span>
        </Navbar.Brand>
        <Container className="text-end">
          <NavLink to="/login">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-gz">Login</Tooltip>}
            >
              <FontAwesomeIcon
                icon={faUserCheck}
                size="lg"
                style={{ color: '#8a2be2' }}
              />
            </OverlayTrigger>
          </NavLink>
          <span className="ms-2"></span>
          <NavLink to="/Registro">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-gz">Registrarse</Tooltip>}
            >
              <FontAwesomeIcon
                icon={faUserPlus}
                size="lg"
                style={{ color: '#8a2be2' }}
              />
            </OverlayTrigger>
          </NavLink>
          <span className="ms-3"></span>
          <NavLink className="td-none txt-violet" to="/Cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              style={{ color: '#8a2be2' }}
            />
            <Badge pill bg="secondary" className="text-light badge-pos">
              {cartPizzas.length}
            </Badge>{' '}
            <strong>{formatNum(tot)}</strong>
          </NavLink>
        </Container>
      </Container>
    </Navbar>
  );
}
