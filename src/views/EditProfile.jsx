import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../components/Dashboard';

function EditProfile() {
  const navigate = useNavigate();
  const { usuarioLogeado, goToMyItems, urlServer } = useContext(Context);

  const [usuario, setUsuario] = useState({
    name: `${usuarioLogeado.user_name}`,
    lastName: `${usuarioLogeado.user_lastname}`,
  });

  const handleSetUsuario = ({ target: { value, name } }) => {
    setUsuario({ ...usuario, [name]: value });
  };

  const actualizarUsuario = async () => {
    const endpoint = `/usuarios/${usuarioLogeado.id}`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      await axios.put(urlServer + endpoint, usuario, { headers });
      alert('Usuario actualizado con éxito');
      navigate('/MyItems');
    } catch (error) {
      alert(
        'Hubo un error al intentar modificar tus datos de usuario, intenta nuevamente más tarde.'
      );
      console.log(error);
    }
  };

  return (
    <div className="nav-spc">
      <Dashboard />
      <Container className="pb-4">
        <h2 className="text-center txt-violet py-4 mb-4 bg-light d-flex align-items-center justify-content-center">
          Editar perfil
        </h2>
        <Form onSubmit={actualizarUsuario}>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Nombre</Form.Label>
            <input
              value={usuario.user_name}
              className="form-control"
              name="name"
              onChange={handleSetUsuario}
              placeholder={usuarioLogeado.user_name}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Apellido</Form.Label>
            <input
              value={usuario.user_lastname}
              className="form-control"
              name="lastName"
              onChange={handleSetUsuario}
              placeholder={usuarioLogeado.user_lastname}
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="info" onClick={actualizarUsuario}>
              Guardar cambios
            </Button>
            <Button
              className="ms-2"
              variant="outline-danger"
              onClick={goToMyItems}
            >
              Cancelar
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default EditProfile;
