 import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/esm/Container';

//import { useContext, useState, useEffect } from 'react'
//import Context from '../Context';
//import axios from 'axios' 

export default function Admin() { 
 /* const { setUser: setGlobalUser } = useContext(Context);

  const [user, setLocalUser] = useState({});

  const getData = async () => {

    const urlServer = "";
    const endpoint = '' //**** */
 /*    const token = localStorage.getItem('token');
    try {
      const { data } = await axios.get(urlServer + endpoint, {
        headers: { Authorization: 'Bearer ' + token },
      });

      setGlobalUser(data);
      setLocalUser(data);
    } catch ({ response: { data: message } }) {
      alert(message + " Los datos ingresados no son válidos");
      console.log(message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
}  */
  
 return (
  <Container>

    <Container>
      <div className="welcome">
        <h2 >¡Bienvenid@! * Nombre*</h2>
        <h3> *email* </h3>
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
                    <button> <Nav.Link >Tus favoritos</Nav.Link></button>
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