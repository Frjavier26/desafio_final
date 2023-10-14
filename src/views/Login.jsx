import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { setUser, setRole } = useContext(Context);


  const validarDatos = () => {
    if (email === '' || password === '') {
      setError(true);
      return;
    }
    setError(false);
    setEmail('');
    setPassword('');
  };


  const handleSubmit = (e) => {
    e.preventDefault()
    validarDatos()
    if(email === 'admin@admin.com') {
      setUser(email)
      setRole('admin')
      navigate('/admin')
    } else {
      setUser(email)
      setRole('user')
      navigate('/')
    }
  }

  return (
    <Container className="nav-spc2 mb-5">
      <Form>
        {error ? <p className='text-danger'>Todos los campos son obligatorios</p> : null}
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

        <Button
          className="btn-detail m-2 px-2 py-1"
          variant="info"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Ingresa
        </Button>


        <NavLink to={'/admin'}>
          <Button variant="outline-info">Ingresar como Admin</Button>{' '}
        </NavLink>
      </Form>
    </Container>
  );
}

export default Login;
