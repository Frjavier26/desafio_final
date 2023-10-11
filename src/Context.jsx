import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [datos, setDatos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getProducts = async () => {
    const urlServer = 'http://localhost:3000';
    const endpoint = '/productos';

    try {
      const result = await axios.get(urlServer + endpoint);
      setDatos(result.data);
      console.log('Ejecuta el Try de getProductos');
      console.log('Data: ', result.data);
      console.log('Estado datos: ', datos);
    } catch ({ response: { data: message } }) {
      alert(message + ' 🙁');
      console.log(message);
    }
  };

  useEffect(() => {
    return () => {
      getProducts();
    };
  }, []);

  function verDetalle(pid) {
    const filteredProduct = datos.filter((el) => el.id === pid); //Aquí en vez de hacer un filtro del arreglo completo de productos, podemos hacer una conexión con la API con GET productos/:id
    console.log(filteredProduct);
    return (
      setSelectedProduct([filteredProduct[0]]),
      navigate(`/productos/${filteredProduct[0].id}`)
    );
  }

  const addProduct = (pid) => {
    const addedProduct = datos
      .filter((el) => el.id === pid)
      .map((p) => {
        return {
          id: p.id,
          url_imagen: p.url_imagen,
          nombre_producto: p.nombre_producto,
          precio: p.precio,
          q: 1,
        };
      });

    const exists = cart.some((el) => {
      if (el.id === pid) {
        return true;
      } else {
        return false;
      }
    });

    exists
      ? addQ(pid)
      : cart.length === 0
      ? setCart([addedProduct[0]])
      : setCart([...cart, addedProduct[0]]);
  };

  function emptyCart() {
    if (cart.length === 0) {
      handleShow();
    } else {
      setCart([]);
      handleShow();
    }
  }

  function irAHome() {
    navigate(`/`);
  }

  function irACarro() {
    navigate(`/cart`);
  }

  const addQ = (pid) => {
    const idx = cart.findIndex((el) => el.id === pid);
    cart[idx].q++;
    setCart([...cart]);
  };

  const rmvQ = (pid) => {
    const idx = cart.findIndex((el) => el.id === pid);
    if (cart[idx].q === 1) {
      const newArr = cart.filter((el) => el.id !== pid);
      return setCart([...newArr]);
    } else {
      cart[idx].q--;
      setCart([...cart]);
    }
  };

  function formatNum(num) {
    return num.toLocaleString('es-cl', { style: 'currency', currency: 'CLP' });
  }

  function formatText(str) {
    const newStr = str
      .split(' ')
      .map((txt) => {
        return txt.charAt(0).toUpperCase() + txt.slice(1);
      })
      .join(' ');
    return newStr;
  }

  const globalState = {
    datos,
    setDatos,
    verDetalle,
    selectedProduct,
    addProduct,
    cart,
    irAHome,
    emptyCart,
    formatNum,
    show,
    handleClose,
    handleShow,
    formatText,
    irACarro,
    addQ,
    rmvQ,
  };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
