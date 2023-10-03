import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function BasicExample() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError(true);
      return;
    }
    setError(false);
    setEmail('');
    setPassword('');
  };

  return (
    <Container className="nav-spc2 mb-5">
      <Form onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            No olvides ingresar con el correo con el cual te registraste
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button onClick={() => navigate('/')} variant="info" type="submit">
          Ingresa
        </Button>
      </Form>
    </Container>
  );
}

export default BasicExample;
