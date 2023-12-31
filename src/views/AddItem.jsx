import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../components/Dashboard';

function AddItem() {
  const navigate = useNavigate();
  const [producto, setProducto] = useState({});
  const { setDatos, goToMyItems, urlServer } = useContext(Context);

  const getProducts = async () => {
    const endpoint = '/productos';

    try {
      const { data } = await axios.get(urlServer + endpoint);
      setDatos(data);
    } catch ({ message }) {
      alert(
        'Hubo un error al intentar obtener los productos en venta, intenta nuevamente más tarde.'
      );
      console.log(message);
    }
  };

  const handleSetProducto = ({ target: { value, name } }) => {
    setProducto({ ...producto, [name]: value });
  };

  const registrarProducto = async () => {
    const endpoint = '/productos';
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      await axios.post(urlServer + endpoint, producto, { headers });
      getProducts();
      alert('Producto registrado con éxito');
      navigate('/myItems');
    } catch (error) {
      alert(
        'Hubo un error al intentar crear tu producto, intenta nuevamente más tarde.'
      );
      console.log(error.message);
    }
  };

  return (
    <div className="nav-spc">
      <Dashboard />
      <Container className="pb-4">
        <h2 className="text-center txt-violet py-4 mb-4 bg-light d-flex align-items-center justify-content-center">
          Crear publicación
        </h2>
        <Form onSubmit={registrarProducto}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridText">
              <Form.Label>Ingresa el nombre de tu producto</Form.Label>
              <input
                value={producto.product_name}
                className="form-control"
                type="text"
                name="product"
                onChange={handleSetProducto}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPrice">
              <Form.Label>Precio</Form.Label>
              <input
                value={producto.price}
                className="form-control"
                type="number"
                name="precio"
                onChange={handleSetProducto}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridImg">
            <Form.Label>Imagen</Form.Label>
            <div className="d-flex align-items-center justify-content-between">
              <Figure className="d-flex m-0 p-0 align-items-center">
                <Figure.Image
                  width={100}
                  height={100}
                  alt="Imagen"
                  src={producto.url}
                  className="m-0 p-0"
                />
              </Figure>

              <input
                value={producto.img_url}
                className="form-control ms-3"
                name="url"
                onChange={handleSetProducto}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción breve de tu producto</Form.Label>
            <Form.Control
              value={producto.short_description}
              className="form-control"
              type="text"
              name="short_description"
              onChange={handleSetProducto}
              as="textarea"
              rows={2}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción completa de tu producto</Form.Label>
            <Form.Control
              value={producto.long_description}
              className="form-control"
              type="text"
              name="long_description"
              onChange={handleSetProducto}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="info" onClick={registrarProducto}>
              Agrega tu producto
            </Button>

            <Button
              className="ms-2"
              variant="outline-danger"
              onClick={goToMyItems}
            >
              Cancelar
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default AddItem;
