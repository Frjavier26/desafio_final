import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';
import { useContext } from 'react';
import { Context } from '../Context';
import { Container } from 'react-bootstrap';

const Admin = () => {
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
                  <Image src={p.img} rounded fluid />
                </Container>

                <Container>
                  <h2
                    className="text-secondary"
                    style={{ textTransform: 'capitalize' }}
                  >
                    {p.name}
                  </h2>
                  <hr></hr>
                  <p className="text-secondary">{p.desc}</p>
                  {/* <h4>Ingredientes:</h4>
                  <ul>
                    {p.ingredients.map((ing, i) => (
                      <li
                        className="d-flex mt-3"
                        style={{ textTransform: 'capitalize' }}
                        key={i}
                      >
                        <div className="pz-li">🍕</div> {ing}
                      </li>
                    ))}
                  </ul> */}
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="my-0 text-secondary">
                      Precio: {formatNum(p.price)}
                    </h3>
                    <div>
                      <Button variant="outline-warning" onClick={irAHome}>
                        Ver otros productos
                      </Button>
                      <Button
                        className="ms-2"
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
                        Agregaste el producto {formatText(p.name)}
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

export default Admin;