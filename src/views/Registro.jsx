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

function GridComplexExample() {
  /*const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);*/
  const { urlServer } = useContext(Context);
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
    console.log(field);
  };

  const registrarUsuario = async () => {
    //const urlServer = 'http://localhost:3000';
    const endpoint = '/usuarios';
    try {
      await axios.post(urlServer + endpoint, usuario);
      alert('Usuario registrado con éxito');
      navigate('/login');
    } catch (error) {
      alert('Algo salió mal ...');
      console.log(error);
    }
  };

  /*const validarInput = (e) => {
    e.preventDefault();
    if (nombre === '' || apellido === '' || password === '' || email === '') {
      setError(true);
      return;
    }
    setError(false);
    setNombre('');
    setApellido('');
    setPassword('');
    setEmail('');
    //registrarUsuario();
  };*/
  return (
    <Container className="nav-spc2 mb-5">
      <Form onSubmit={registrarUsuario}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <input
              value={usuario.user_email}
              className="form-control"
              type="email"
              name="email"
              onChange={handleSetUsuario}
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
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Nombre</Form.Label>
          <input
            value={usuario.user_name}
            className="form-control"
            name="name"
            onChange={handleSetUsuario}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Apellido</Form.Label>
          <input
            value={usuario.user_lastname}
            className="form-control"
            name="lastName"
            onChange={handleSetUsuario}
          />
        </Form.Group>

        <Button variant="info" onClick={registrarUsuario}>
          Regístrate
        </Button>
      </Form>
    </Container>
  );
}

export default GridComplexExample;
