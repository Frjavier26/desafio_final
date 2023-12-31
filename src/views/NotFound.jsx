import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="nav-spc pt-5 mb-5">
      <Alert variant="warning">
        <Alert.Heading>Página no encontrada</Alert.Heading>
        <p>
          Al parecer estás intentando acceder a una página que no existe. Vuelve
          atrás o presiona el botón para ir al Inicio y encontrar el
          equipamiento ideal para tu zona gamer.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button variant="warning">
            <NavLink className="td-none text-black" to={'/'}>
              Ir al inicio
            </NavLink>
          </Button>
        </div>
      </Alert>
    </Container>
  );
};

export default NotFound;
