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
  const setActiveClass = ({ isActive }) =>
    isActive ? 'active' : 'td-none txt-violet';
  const { cart, formatNum, irAHome } = useContext(Context);
  const tot = cart.reduce((prev, { price, q }) => prev + price * q, 0);

  return (
    <Navbar bg="info" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand
          onClick={() => {
            irAHome();
          }}
        >
          <span>
            <img
              src="/GameZone_transparente.png"
              alt="GameZone logo"
              className="nav-img"
            />
          </span>
        </Navbar.Brand>
        <Container className="text-end">
          <NavLink className={setActiveClass} to="/login">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-gz">Login</Tooltip>}
            >
              <FontAwesomeIcon
                className="nav-icon-spc"
                icon={faUserCheck}
                size="lg"
              />
            </OverlayTrigger>
          </NavLink>
          <span></span>
          <NavLink className={setActiveClass} to="/Registro">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-gz">Registrarse</Tooltip>}
            >
              <FontAwesomeIcon
                className="nav-icon-spc"
                icon={faUserPlus}
                size="lg"
              />
            </OverlayTrigger>
          </NavLink>
          <span></span>
          <NavLink className={setActiveClass} to="/Cart">
            <FontAwesomeIcon
              className="nav-icon-spc"
              icon={faCartShopping}
              size="lg"
            />
            <Badge pill bg="secondary" className="text-light badge-pos">
              {cart.length}
            </Badge>{' '}
            <strong>{formatNum(tot)}</strong>
          </NavLink>
        </Container>
      </Container>
    </Navbar>
  );
}
