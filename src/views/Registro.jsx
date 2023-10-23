import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context';
import axios from 'axios';

function Registro() {
  const { urlServer } = useContext(Context);
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    /*const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });*/
    setUsuario({ ...usuario, [name]: value });
    console.log('field: ', name, value);
  };

  const registrarUsuario = async () => {
    const endpoint = '/usuarios';
    if (
      !usuario.name ||
      !usuario.lastName ||
      !usuario.email ||
      !usuario.password
    ) {
      alert(
        'Recuerde que todos los datos son obligatorios, revise antes de registrarse.'
      );
    } else {
      try {
        await axios.post(urlServer + endpoint, usuario);
        alert('Usuario registrado con éxito');
        navigate('/login');
      } catch (error) {
        alert('Error al crear el usuario.');
        console.log(error);
      }
    }
  };

  return (
    <Container className="nav-spc2 mb-5">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={usuario.user_email}
              className="form-control"
              type="email"
              name="email"
              onChange={handleSetUsuario}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <input
              value={usuario.user_password}
              className="form-control"
              type="password"
              name="password"
              onChange={handleSetUsuario}
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            value={usuario.user_name}
            className="form-control"
            name="name"
            onChange={handleSetUsuario}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            value={usuario.user_lastname}
            className="form-control"
            name="lastName"
            onChange={handleSetUsuario}
            required
          />
        </Form.Group>

        <Button variant="info" onClick={registrarUsuario}>
          Regístrate
        </Button>
      </Form>
    </Container>
  );
}

export default Registro;
