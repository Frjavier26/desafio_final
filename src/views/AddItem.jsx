import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../components/Dashboard';

function GridComplexExample() {
  const navigate = useNavigate();
  const [producto, setProducto] = useState({});

  const handleSetProducto = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setProducto({ ...producto, ...field });
    console.log(field);
  };

  const registrarProducto = async () => {
    const urlServer = 'http://localhost:3000';
    const endpoint = '/productos';
    try {
      await axios.post(urlServer + endpoint, producto);
      alert('Producto registrado con éxito');
      navigate('/myItems');
    } catch (error) {
      alert('Algo salió mal ...');
      console.log(error);
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
              <Form.Label>Ingresa tu nombre de Producto</Form.Label>
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
                name="price"
                onChange={handleSetProducto}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridImg">
            <Form.Label>Imagen</Form.Label>
            <input
              value={producto.img_url}
              className="form-control"
              name="url"
              onChange={handleSetProducto}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion breve de tu producto</Form.Label>
            <Form.Control
              value={producto.short_description}
              className="form-control"
              type="text"
              name="descripcion_corta"
              onChange={handleSetProducto}
              as="textarea"
              rows={2}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion formal</Form.Label>
            <Form.Control
              value={producto.long_description}
              className="form-control"
              type="text"
              name="descripcion"
              onChange={handleSetProducto}
              as="textarea"
              rows={3}
            />
          </Form.Group>

          <Button variant="info" onClick={registrarProducto}>
            Agrega tu Producto!
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default GridComplexExample;
