import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from '../Context';

const CardComp = () => {
  const { data, verDetalle, addProduct, formatNum } = useContext(Context);

  return (
    <>
      <Row xs={1} md={2} xl={3} xxl={4} className="g-4">
        {data.map((p) => (
          <Col key={p.id}>
            <Card>
              <Container className="card-img-cont d-flex justify-content-center align-items-center">
                <Card.Img className="card-img" variant="top" src={p.img} />
              </Container>
              <Card.Body>
                <Card.Title
                  className="fs-5 text-secondary"
                  style={{ textTransform: 'capitalize' }}
                >
                  {p.name}
                </Card.Title>
                <hr></hr>

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
