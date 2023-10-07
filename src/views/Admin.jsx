import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/esm/Container';

function LeftTabsExample() {
  return (
    <Container className="admincss">
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
        
            <Nav.Item>
              <Nav.Link eventKey="second">Perfil</Nav.Link>
              <Nav.Item>
              <Nav.Link eventKey="second"> Productos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
  
        </Col>
      </Row>
    </Tab.Container>
    </Container>
  );
}

export default LeftTabsExample;