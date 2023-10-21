import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../components/Dashboard';
import { useContext } from 'react';
import { Context } from '../Context';

function EditProfile() {
  const navigate = useNavigate();
  const { usuarioGlobal, urlServer } = useContext(Context);
  const [usuario, setUsuario] = useState({
    name: `${usuarioGlobal.user_name}`, // Valor inicial para name
    lastName: `${usuarioGlobal.user_lastname}`, // Valor inicial para lastName});
  });

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
    console.log(field);
    console.log('usuario: ', usuario);
  };

  const actualizarUsuario = async () => {
    //const urlServer = 'http://localhost:3000';
    const endpoint = `/usuarios/${usuarioGlobal.id}`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      await axios.put(urlServer + endpoint, usuario, { headers });
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
            placeholder={usuarioGlobal.user_name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Apellido</Form.Label>
          <input
            value={usuario.user_lastname}
            className="form-control"
            name="lastName"
            onChange={handleSetUsuario}
            placeholder={usuarioGlobal.user_lastname}
          />
        </Form.Group>

        <Button variant="info" onClick={actualizarUsuario}>
          Actualizar!
        </Button>
      </Form>
    </Container>
  );
}

export default EditProfile;
