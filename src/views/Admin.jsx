import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/esm/Container';

function LeftTabsExample() {
  return (
    <Container>

      <Container>
<div className="welcome">
        <h1 >Bienvenido Nombre e email</h1>
        </div>
      </Container>
<div className="btn-admin">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
        
            <Nav.Item className="nav-adm">
              <Nav.Link eventKey="second">Dashboard</Nav.Link>
              <Nav.Item>
              <Nav.Link eventKey="second"> Editar perfil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Favoritos</Nav.Link>
            </Nav.Item>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
  
        </Col>
      </Row>
    </Tab.Container></div>
    </Container>
  );
}

export default LeftTabsExample;