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
  const [usuarioLogeado, setUsuarioLogeado] = useState([]);

  //const urlServer = 'https://backend-desafio-final.onrender.com';
  const urlServer = 'http://localhost:3000';

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  useEffect(() => {
    return () => {
      getProducts();
    };
  }, []);

  function verDetalle(pid) {
    const filteredProduct = datos.filter((el) => el.id == pid);
    return (
      setSelectedProduct([filteredProduct[0]]),
      navigate(`/productos/${filteredProduct[0].id}`)
    );
  }

  function editarProducto2(pid) {
    const filteredProduct = datos.filter((el) => el.id == pid);
    setSelectedProduct([filteredProduct[0]]);
    navigate(`/editItem`);
  }

  const addProduct = (pid) => {
    const addedProduct = datos
      .filter((el) => el.id == pid)
      .map((p) => {
        return {
          id: p.id,
          img_url: p.img_url,
          product_name: p.product_name,
          price: p.price,
          q: 1,
        };
      });

    const exists = cart.some((el) => {
      if (el.id == pid) {
        return true;
      } else {
        return false;
      }
    });

    exists
      ? addQ(pid)
      : cart.length == 0
      ? setCart([addedProduct[0]])
      : setCart([...cart, addedProduct[0]]);
  };

  function emptyCart() {
    if (cart.length == 0) {
      handleShow();
    } else {
      setCart([]);
      handleShow();
    }
  }

  function goToHome() {
    navigate(`/`);
  }

  function goToCart() {
    navigate(`/cart`);
  }

  function goToAddItem() {
    navigate(`/addItem`);
  }

  function goToEditProfile() {
    navigate(`/editProfile`);
  }

  function goToMyItems() {
    navigate(`myItems`);
  }

  const addQ = (pid) => {
    const idx = cart.findIndex((el) => el.id == pid);
    cart[idx].q++;
    setCart([...cart]);
  };

  const rmvQ = (pid) => {
    const idx = cart.findIndex((el) => el.id == pid);
    if (cart[idx].q == 1) {
      const newArr = cart.filter((el) => el.id != pid);
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
    usuarioLogeado,
    setUsuarioLogeado,
    getProducts,
    datos,
    setDatos,
    verDetalle,
    editarProducto2,
    selectedProduct,
    addProduct,
    cart,
    goToHome,
    goToAddItem,
    goToEditProfile,
    goToMyItems,
    emptyCart,
    formatNum,
    show,
    handleClose,
    handleShow,
    formatText,
    goToCart,
    addQ,
    rmvQ,
    urlServer,
  };

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
