import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

import { useContext, useState, useEffect } from 'react';
import { Context } from '../Context';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  const { getUser, goToAddItem, goToEditItems, goToEditProfile, goToMyItems } =
    useContext(Context);

  return (
    <>
      <div className="nav-spc">
        <Container>
          <Navbar className="justify-content-between align-items-center dashboard-style px-3">
            <div>
              <h2>¡Bienvenid@! {getUser()}</h2>
              <h3> {getUser()} </h3>
            </div>
            <div>
              <Dropdown drop="start">
                <Dropdown.Toggle variant="warning" id="dropdown-dashboard">
                  Opciones
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item onClick={goToEditProfile}>
                    Editar Perfil
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={goToMyItems}>
                    Mis Publicaciones
                  </Dropdown.Item>
                  <Dropdown.Item onClick={goToAddItem}>
                    Crear Publicación
                  </Dropdown.Item>
                  <Dropdown.Item onClick={goToEditItems}>
                    Modificar Publicación
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Navbar>
        </Container>
      </div>
    </>
  );
}
