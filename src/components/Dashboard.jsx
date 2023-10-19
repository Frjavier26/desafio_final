import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

import { useContext, useState, useEffect } from 'react';
import { Context } from '../Context';
import axios from 'axios';

export default function Dashboard() {
  const [usuario, setUsuarioLocal] = useState({});
  const { setUsuario, setUsuarioGlobal } = useContext(Context);
  const {
    userData,
    setUserData,
    goToAddItem,
    goToItemsList,
    goToEditProfile,
    goToMyItems,
  } = useContext(Context);

  const getUserData = async () => {
    const urlServer = 'http://localhost:3000';
    const endpoint = '/usuarios';
    const token = localStorage.getItem('token');

    const { data } = await axios.get(urlServer + endpoint, {
      headers: { Authorization: 'Bearer ' + token },
    });
    setUsuarioGlobal(data);
    setUsuarioLocal(data);
    console.log('data: ', data);
    /*try {
      const { data } = await axios.get(urlServer + endpoint, {
        headers: { Authorization: 'Bearer ' + token },
      });
      setUsuarioGlobal(data);
      console.log('data: ', data);
      console.log('usuarioGlobal: ', usuarioGlobal);
    } catch ({ message }) {
      alert('catch de getUserData: ', message + ' 🙁');
      console.log(message);
    }*/
  };

  useEffect(() => {
    return () => {
      getUserData();
    };
  }, []);

  return (
    <div className="nav-spc">
      <Container>
        <Navbar className="justify-content-between align-items-center dashboard-style px-3">
          <div>
            <h2>
              Dashboard de <span>{usuario.user_name}</span>
            </h2>
          </div>
          <div>
            <Dropdown drop="start">
              <Dropdown.Toggle variant="warning" id="dropdown-dashboard">
                Opciones
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item onClick={goToEditProfile}>
                  Editar Perfil
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={goToMyItems}>
                  Mis Publicaciones
                </Dropdown.Item>
                <Dropdown.Item onClick={goToAddItem}>
                  Crear Publicación
                </Dropdown.Item>
                <Dropdown.Item onClick={goToItemsList}>
                  Modificar Publicación
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar>
      </Container>
    </div>
  );
}
