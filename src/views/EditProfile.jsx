import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../components/Dashboard';

function GridComplexExample() {
  /*const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);*/

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
    console.log(field);
  };

  const actualizarUsuario = async () => {
    const urlServer = 'http://localhost:3000';
    const endpoint = '/usuarios/:id';
    try {
      await axios.post(urlServer + endpoint, usuario);
      alert('Usuario actualizado con exito');
      navigate('/MyItems');
    } catch (error) {
      alert('Algo salió mal ...');
      console.log(error);
    }
  };

  return (
    <Container className="nav-spc2 mb-5">
      <Dashboard />
      <Form onSubmit={actualizarUsuario}>
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

        <Button variant="info" onClick={actualizarUsuario}>
          Actualizar!
        </Button>
      </Form>
    </Container>
  );
}

export default GridComplexExample;
