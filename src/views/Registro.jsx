import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';

function GridComplexExample() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const validarInput = (e) => {
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
  };
  return (
    <Container className="nav-spc2 mb-5">
      <Form onSubmit={validarInput}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <input
              className="form-control"
              type="email"
              name="password"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Nombre</Form.Label>
          <input
            className="form-control"
            name="nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Apellido</Form.Label>
          <input
            className="form-control"
            name="apellido"
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>

        <Button variant="info" type="submit">
          Regístrate
        </Button>
      </Form>
    </Container>
  );
}

export default GridComplexExample;
