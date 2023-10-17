import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/esm/Container';
import Dropdown from 'react-bootstrap/Dropdown';

import { useContext, useState, useEffect } from 'react';
import { Context } from '../Context';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  const { getUser } = useContext(Context);

  return (
    <>
      <div className="nav-spc">
        <Container>
          <div className="welcome">
            <h2>¡Bienvenid@! {getUser()}</h2>
            <h3> {getUser()} </h3>
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-dashboard">
                Opciones
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Editar Perfil</Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Mis Publicaciones
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Crear Publicación
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Modificar Publicación
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
        <div className="btn-admin">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item className="nav-adm">
                    <div className="buttons">
                      <button>
                        <Nav.Link>
                          <Link to="/admin/dashboard">Dashboard</Link>
                        </Nav.Link>
                      </button>
                      <Nav.Item>
                        <button>
                          <Nav.Link to="edit-profile">
                            <Link to={'/admin/edit-profile'}>
                              Editar Perfil
                            </Link>
                          </Nav.Link>
                        </button>
                      </Nav.Item>
                      <Nav.Item>
                        <button>
                          <Nav.Link to="edit-products">
                            <Link to={'/admin/edit-product'}>
                              Editar Productos
                            </Link>
                          </Nav.Link>
                        </button>
                      </Nav.Item>
                    </div>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Outlet />
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </>
  );
}
