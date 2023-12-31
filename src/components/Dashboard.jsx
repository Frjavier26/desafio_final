import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { useContext, useEffect } from 'react';
import { Context } from '../Context';
import axios from 'axios';

export default function Dashboard() {
  const {
    urlServer,
    goToAddItem,
    goToEditProfile,
    goToMyItems,
    usuarioLogeado,
    setUsuarioLogeado,
  } = useContext(Context);

  const getUserData = async () => {
    const endpoint = '/usuarios';
    const token = localStorage.getItem('token');
    const { data } = await axios.get(urlServer + endpoint, {
      headers: { Authorization: 'Bearer ' + token },
    });
    setUsuarioLogeado(data);
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
              Dashboard de <span>{usuarioLogeado.user_name}</span>
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
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar>
      </Container>
    </div>
  );
}
