import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Login() {
  const { urlServer, goToHome } = useContext(Context);

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    setUsuario({ ...usuario, [name]: value });
  };

  const iniciarSesion = async () => {
    const endpoint = '/login';
    const { user_email, user_password } = usuario;

    try {
      if (!user_email || !user_password)
        return alert('El correo y contraseña son obligatorios');
      const { data: token } = await axios.post(urlServer + endpoint, usuario);
      console.log(token);
      alert('Usuario identificado con éxito 😀');
      localStorage.setItem('token', token);
      navigate('/myitems');
    } catch (error) {
      alert(
        'El correo o contraseña son incorrectos, intenta nuevamente. Si no te has registrado, ve a la sección de registro.'
      );
      console.log(message);
    }
  };

  return (
    <Container className="nav-spc2 mb-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <input
            value={usuario.email}
            className="form-control"
            type="email"
            name="user_email"
            onChange={handleSetUsuario}
          />
          <Form.Text className="text-muted">
            No olvides ingresar con el correo con el cual te registraste
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <input
            value={usuario.password}
            className="form-control"
            type="password"
            name="user_password"
            onChange={handleSetUsuario}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="info" onClick={iniciarSesion}>
            Ingresa
          </Button>

          <Button className="ms-2" variant="outline-danger" onClick={goToHome}>
            Cancelar
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
