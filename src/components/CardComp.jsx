import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect } from 'react';
import { Context } from '../Context';
import axios from 'axios';

const CardComp = () => {
  const { datos, setDatos, verDetalle, addProduct, formatNum, urlServer } =
    useContext(Context);

  const getProducts = async () => {
    const endpoint = '/productos';

    try {
      const { data } = await axios.get(urlServer + endpoint);
      setDatos(data);
    } catch ({ message }) {
      alert(
        'Estamos experimentando problemas de conexión para mostrar los productos, recarga la página para verlos.'
      );
      console.log(message);
    }
  };

  useEffect(() => {
    return () => {
      getProducts();
    };
  }, []);

  return (
    <>
      <Row xs={1} md={2} xl={3} xxl={4} className="g-4">
        {datos.map((p) => (
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

                <Card.Text className="text-secondary">
                  {p.short_description}
                </Card.Text>

                <Card.Title className="text-center fs-4 my-5 text-secondary">
                  {formatNum(p.price)}
                </Card.Title>

                <Container fluid className="d-flex justify-content-between">
                  <Button
                    variant="outline-warning"
                    value={p.id}
                    onClick={(e) => verDetalle(e.target.value)}
                  >
                    Ver más
                  </Button>

                  <Button
                    variant="warning"
                    value={p.id}
                    onClick={(e) => addProduct(e.target.value)}
                  >
                    Añadir{'   '}
                    <FontAwesomeIcon className="ms-2" icon={faCartPlus} />
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

export default CardComp;
