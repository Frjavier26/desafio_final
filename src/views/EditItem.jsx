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

function EditItem() {
  const navigate = useNavigate();
  const { selectedProduct, getProducts, goToMyItems, urlServer } =
    useContext(Context);

  const [producto, setProducto] = useState({
    producto: `${selectedProduct[0].product_name}`,
    price: `${selectedProduct[0].price}`,
    img: `${selectedProduct[0].img_url}`,
    descripcion_corta: `${selectedProduct[0].short_description}`,
    descripcion: `${selectedProduct[0].long_description}`,
  });

  const handleSetProducto = ({ target: { value, name } }) => {
    setProducto({ ...producto, [name]: value });
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
      alert(
        'Hubo un error al intentar modificar tu producto, intenta nuevamente más tarde.'
      );
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
              <Form.Label>Ingresa el nombre de tu producto</Form.Label>
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
            <Form.Label>Imagen del producto</Form.Label>
            <div className="d-flex align-items-center justify-content-between">
              <Figure className="d-flex m-0 p-0 align-items-center">
                <Figure.Image
                  width={100}
                  height={100}
                  alt="Imagen"
                  src={selectedProduct[0].img_url}
                  className="m-0 p-0"
                />
              </Figure>
              <input
                value={producto.img_url}
                className="form-control ms-3"
                name="img"
                onChange={handleSetProducto}
                placeholder={selectedProduct[0].img_url}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción breve de tu producto</Form.Label>
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
            <Form.Label>Descripción completa de tu producto</Form.Label>
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
          <div className="d-flex justify-content-between">
            <Button
              variant="info"
              onClick={() => {
                editarProducto();
              }}
            >
              Guardar cambios
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

export default EditItem;
