import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import { Context } from '../Context';

const Cart = () => {
  const { cart, irAHome, emptyCart, show, handleClose, formatNum, addQ, rmvQ } =
    useContext(Context);

  const tot = cart.reduce((prev, { price, q }) => prev + price * q, 0);

  return (
    <>
      <Container className="nav-spc py-5">
        <Container className="py-4 bg-light align-items-center">
          <Container>
            <h5>Detalles del pedido:</h5>
            <ListGroup variant="flush">
              {cart.map((p) => {
                return (
                  <ListGroup.Item className="px-0" key={p.id}>
                    <Container className="p-0 d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <Image
                            className="cart-img mx-2"
                            src={p.img}
                            rounded
                          />
                        </div>
                        <div>
                          <span
                            style={{ textTransform: 'capitalize' }}
                            className="me-2 text-secondary"
                          >
                            {p.name}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center fw-bold">
                        <span className="mx-2 txt-violet fw-normal">
                          {formatNum(p.price * p.q)}
                        </span>
                        <Button
                          className="ms-3 me-1 fw-bold"
                          variant="outline-danger"
                          value={p.id}
                          onClick={(e) => rmvQ(e.target.value)}
                        >
                          -
                        </Button>{' '}
                        <span>{p.q}</span>{' '}
                        <Button
                          className="ms-1 fw-bold"
                          variant="outline-success"
                          value={p.id}
                          onClick={(e) => addQ(e.target.value)}
                        >
                          +
                        </Button>
                      </div>
                    </Container>
                  </ListGroup.Item>
                );
              })}

              <ListGroupItem className="py-3 text-end">
                <h4 className="txt-violet me-3 mb-5">
                  Total: {formatNum(tot)}
                </h4>
                <div className="d-flex justify-content-between">
                  <div>
                    <Button variant="info">Ir a pagar</Button>
                    <Button
                      variant="outline-warning"
                      className="ms-2"
                      onClick={() => {
                        irAHome();
                      }}
                    >
                      Seguir navegando
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="outline-danger"
                      onClick={() => {
                        emptyCart();
                      }}
                    >
                      Vaciar carro
                    </Button>

                    <Modal show={show} onHide={handleClose}>
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
                        El carro está vacío, presiona el botón "Ver productos"
                        para encontrar los mejores productos para tu zona gamer
                      </Modal.Body>
                      <Modal.Footer className="d-flex justify-content-between">
                        <Button
                          variant="warning"
                          onClick={() => {
                            handleClose();
                            irAHome();
                          }}
                        >
                          Ver productos
                        </Button>
                        <Button variant="outline-danger" onClick={handleClose}>
                          Cerrar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Cart;
