import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/esm/Container';

import { useContext, useState, useEffect } from 'react';
import { Context } from '../Context';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  const { getUser } = useContext(Context);

  return (
    <Container>
      <Container>
        <div className="welcome" style={{ marginTop: '100px' }}>
          <h2>¡Bienvenid@! {getUser()}</h2>
          <h3> {getUser()} </h3>
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
                          <Link to={'/admin/edit-profile'}>Editar Perfil</Link>
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
    </Container>
  );
}
