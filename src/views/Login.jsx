import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Login() {
  const { urlServer } = useContext(Context);

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});

  const handleSetUsuario = ({ target: { value, name } }) => {
    /*const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });*/
    setUsuario({ ...usuario, [name]: value });
    console.log(`${name}`, value);
  };

  const iniciarSesion = async () => {
    const endpoint = '/login';
    const { user_email, user_password } = usuario;

    try {
      if (!user_email || !user_password)
        return alert('Email y password obligatorias');
      const { data: token } = await axios.post(urlServer + endpoint, usuario);
      console.log(token);
      alert('Usuario identificado con éxito 😀');
      localStorage.setItem('token', token);

      navigate('/myitems');
    } catch ({ message }) {
      alert(message + 'catch de iniciar sesión 🙁');
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

        <Button
          className="btn-detail m-2 px-2 py-1"
          variant="info"
          onClick={iniciarSesion}
        >
          Ingresa
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
