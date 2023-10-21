import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from '../Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ItemsCards = () => {
  const navigate = useNavigate();
  const { datos, editarProducto2, formatNum, usuarioGlobal, urlServer } =
    useContext(Context);
  console.log('datos: ', datos);
  console.log('usuarioGlobal: ', usuarioGlobal);

  const refreshPage = () => {
    window.location.reload();
  };

  const eliminarProducto = async (pid) => {
    //const urlServer = 'http://localhost:3000';
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
