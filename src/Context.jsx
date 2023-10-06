import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const endpoint = '/productos.json';

  const getProducts = async () => {
    const resp = await fetch(endpoint);
    const dat = await resp.json();
    setData(dat);
  };

  useEffect(() => {
    return () => {
      getProducts();
    };
  }, []);

  function verDetalle(pid) {
    const filteredProduct = data.filter((el) => el.id === pid);
    return (
      setSelectedProduct([filteredProduct[0]]),
      navigate(`/productos/${filteredProduct[0].id}`)
    );
  }

  const addProduct = (pid) => {
    const addedProduct = data
      .filter((el) => el.id === pid)
      .map((p) => {
        return { id: p.id, img: p.img, name: p.name, price: p.price, q: 1 };
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
    data,
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
