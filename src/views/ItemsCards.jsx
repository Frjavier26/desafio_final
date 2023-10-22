import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect } from 'react';
import { Context } from '../Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ItemsCards = () => {
  const navigate = useNavigate();
  const {
    datos,
    setDatos,
    editarProducto2,
    formatNum,
    usuarioGlobal,
    urlServer,
  } = useContext(Context);

  const getProducts = async () => {
    const endpoint = '/productos';

    try {
      const { data } = await axios.get(urlServer + endpoint);
      setDatos(data);
      console.log('Ejecuta el Try de getProductos');
      console.log('Data de productos: ', data);
      console.log('Estado datos: ', datos);
    } catch ({ message }) {
      alert(message + ' 🙁');
      console.log(message);
    }
  };

  console.log('usuarioGlobal: ', usuarioGlobal);

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    return () => {
      getProducts();
    };
  }, []);

  const eliminarProducto = async (pid) => {
    const endpoint = `/productos/${pid}`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      await axios.delete(urlServer + endpoint, { headers });
      alert('Producto eliminado con éxito');
      navigate('/myItems');
    } catch (error) {
      alert('Algo salió mal ...');
      console.log(error);
    }
  };

  return (
    <>
      <Row xs={1} md={2} xl={3} xxl={4} className="g-4">
        {datos
          .filter((el) => el.user_email === usuarioGlobal.user_email)
          .map((p) => (
            <Col key={p.id}>
              <Card>
                <Container className="card-img-cont d-flex justify-content-center align-items-center">
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={p.img_url}
                    alt={p.product_name}
                  />
                </Container>
                <Card.Body>
                  <Card.Title
                    className="fs-5 text-secondary"
                    style={{ textTransform: 'capitalize' }}
                  >
                    {p.product_name}
                  </Card.Title>
                  <hr></hr>

                  <Card.Title className="text-center fs-4 my-5 text-secondary">
                    {formatNum(p.price)}
                  </Card.Title>
                  <Container fluid className="d-flex justify-content-between">
                    <Button
                      variant="warning"
                      value={p.id}
                      onClick={(e) => editarProducto2(e.target.value)}
                    >
                      Modificar{'   '}
                      <FontAwesomeIcon className="ms-2" icon={faPenToSquare} />
                    </Button>
                    <Button
                      variant="outline-danger"
                      value={p.id}
                      onClick={(e) => {
                        {
                          eliminarProducto(e.target.value);
                          refreshPage();
                        }
                      }}
                    >
                      Eliminar{'   '}
                      <FontAwesomeIcon className="ms-2" icon={faTrashCan} />
                    </Button>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default ItemsCards;
