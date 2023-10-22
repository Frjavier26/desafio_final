import React, { useContext } from 'react';
import { Context } from '../Context';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faUserCheck,
  faUserPlus,
  faUserXmark,
  faTableColumns,
} from '@fortawesome/free-solid-svg-icons';

export default function NavbarComp() {
  const { cart, formatNum, goToHome } = useContext(Context);

  const token = localStorage.getItem('token');
  const setActiveClass = ({ isActive }) =>
    isActive ? 'active' : 'td-none txt-violet';

  const tot = cart.reduce((prev, { price, q }) => prev + price * q, 0);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <Navbar bg="info" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand
          onClick={() => {
            goToHome();
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
        <Container className="px-0 text-end">
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
          <Container className="px-0">
            <NavLink className={setActiveClass} to="/myItems">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-gz">Dashboard</Tooltip>}
              >
                <FontAwesomeIcon
                  className={token ? 'nav-icon-spc' : 'dn'}
                  icon={faTableColumns}
                  size="sm"
                />
              </OverlayTrigger>
            </NavLink>

            <NavLink to="/">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-gz">Cerrar Sesión</Tooltip>}
              >
                <FontAwesomeIcon
                  className={token ? 'nav-icon-spc' : 'dn'}
                  icon={faUserXmark}
                  style={{ color: '#e71861' }}
                  size="sm"
                  onClick={logout}
                />
              </OverlayTrigger>
            </NavLink>

            <NavLink className={setActiveClass} to="/login">
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-gz">Login</Tooltip>}
              >
                <FontAwesomeIcon
                  className={'nav-icon-spc'}
                  icon={faUserCheck}
                  size="sm"
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
                  size="sm"
                />
              </OverlayTrigger>
            </NavLink>
          </Container>
        </Container>
      </Container>
    </Navbar>
  );
}
