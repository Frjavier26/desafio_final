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
        <h2 >¡Bienvenid@!*Nombre*</h2>
        <h3>*email*</h3>
        </div>
      </Container>
<div className="btn-admin">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
        
            <Nav.Item className="nav-adm">
           <div className="buttons"> 
             <button> <Nav.Link > Dashboard</Nav.Link></button>
              <Nav.Item>
              <button> <Nav.Link > Editar perfil</Nav.Link></button>
            </Nav.Item>
            <Nav.Item>
            <button> <Nav.Link > Favoritos</Nav.Link></button>
            </Nav.Item></div>  
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