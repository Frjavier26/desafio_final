import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';
import { useContext } from 'react';
import { Context } from '../Context';

const Detail = () => {
  const {
    selectedProduct,
    addProduct,
    formatNum,
    show,
    handleClose,
    handleShow,
    irAHome,
    formatText,
    irACarro,
  } = useContext(Context);

  return (
    <Container className="nav-spc py-5">
      <Row>
        <Col></Col>
        <Col md="auto">
          {selectedProduct.map((p) => {
            return (
              <Container className="cust-card" key={p.id}>
                <Container>
                  <Image src={p.img_url} rounded fluid />
                </Container>

                <Container>
                  <h2
                    className="text-secondary"
                    style={{ textTransform: 'capitalize' }}
                  >
                    {p.product_name}
                  </h2>
                  <hr></hr>
                  <p className="text-secondary">{p.short_description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="my-2 me-2 text-secondary">
                      Precio: {formatNum(p.price)}
                    </h3>
                    <div>
                      <Button
                        className="m-2"
                        variant="outline-warning"
                        onClick={irAHome}
                      >
                        Ver otros productos
                      </Button>
                      <Button
                        className="m-2"
                        variant="warning"
                        value={p.id}
                        onClick={(e) => {
                          addProduct(e.target.value);
                          handleShow();
                        }}
                      >
                        Añadir{'   '}
                        <FontAwesomeIcon className="ms-2" icon={faCartPlus} />
                      </Button>
                    </div>

                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>
                          <img
                            src="/GameZone_transparente.png"
                            alt="GameZone logo"
                            className="nav-img"
                          />
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Agregaste el producto {formatText(p.product_name)}
                      </Modal.Body>
                      <Modal.Footer className="d-flex justify-content-between">
                        <div>
                          <Button
                            variant="warning"
                            onClick={() => {
                              handleClose();
                              irAHome();
                            }}
                          >
                            Ver productos
                          </Button>
                          <Button
                            variant="outline-info"
                            className="ms-2"
                            onClick={() => {
                              handleClose();
                              irACarro();
                            }}
                          >
                            Ver carrito
                          </Button>
                        </div>
                        <Button variant="outline-danger" onClick={handleClose}>
                          Cerrar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </Container>
              </Container>
            );
          })}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Detail;
