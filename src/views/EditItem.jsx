import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../components/Dashboard';
import { Context } from '../Context';

function EditItem() {
  const navigate = useNavigate();
  const { selectedProduct, getProducts, urlServer } = useContext(Context);
  console.log('selected product en editar: ', selectedProduct);
  const [producto, setProducto] = useState({
    producto: `${selectedProduct[0].product_name}`,
    price: `${selectedProduct[0].price}`,
    img: `${selectedProduct[0].img_url}`,
    descripcion_corta: `${selectedProduct[0].short_description}`,
    descripcion: `${selectedProduct[0].long_description}`,
  });
  console.log('producto state: ', producto);

  const handleSetProducto = ({ target: { value, name } }) => {
    /*const field = {};
    field[name] = value;
    setProducto({ ...producto, ...field });*/
    setProducto({ ...producto, [name]: value });
    console.log('field producto: ', field);
    console.log('producto: ', producto);
  };

  const editarProducto = async () => {
    const endpoint = `/productos/${selectedProduct[0].id}`;
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      await axios.put(urlServer + endpoint, producto, { headers });
      getProducts();
      alert('Producto modificado con éxito');
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
          Modificar publicación
        </h2>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNombre">
              <Form.Label>Ingresa tu nombre de Producto</Form.Label>
              <input
                value={producto.product_name}
                className="form-control"
                type="text"
                name="producto"
                onChange={handleSetProducto}
                placeholder={selectedProduct[0].product_name}
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
                placeholder={selectedProduct[0].price}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridImg">
            <Form.Label>Modifica tu Imagen</Form.Label>
            <input
              value={producto.img_url}
              className="form-control"
              name="img"
              onChange={handleSetProducto}
              placeholder={selectedProduct[0].img_url}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion breve de tu producto</Form.Label>
            <Form.Control
              value={producto.short_description}
              className="form-control"
              name="descripcion_corta"
              onChange={handleSetProducto}
              as="textarea"
              rows={2}
              placeholder={selectedProduct[0].short_description}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion formal</Form.Label>
            <Form.Control
              value={producto.long_description}
              className="form-control"
              name="descripcion"
              onChange={handleSetProducto}
              as="textarea"
              rows={3}
              placeholder={selectedProduct[0].long_description}
            />
          </Form.Group>

          <Button variant="info" onClick={editarProducto}>
            Modifica tu Producto!
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default EditItem;
