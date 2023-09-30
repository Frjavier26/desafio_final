import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState([]);
  const [cartPizzas, setCartPizzas] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const endpoint = '/pizzas.json';

  const getPizzas = async () => {
    const resp = await fetch(endpoint);
    const dat = await resp.json();
    setData(dat);
  };

  useEffect(() => {
    return () => {
      getPizzas();
    };
  }, []);

  function verDetalle(pid) {
    const filteredPizza = data.filter((el) => el.id === pid);
    return (
      setSelectedPizza([filteredPizza[0]]),
      navigate(`/pizza/${filteredPizza[0].id}`)
    );
  }

  const anhadirPizza = (pid) => {
    const addedPizza = data
      .filter((el) => el.id === pid)
      .map((p) => {
        return { id: p.id, img: p.img, name: p.name, price: p.price, q: 1 };
      });

    const exists = cartPizzas.some((el) => {
      if (el.id === pid) {
        return true;
      } else {
        return false;
      }
    });

    exists
      ? addQ(pid)
      : cartPizzas.length === 0
      ? setCartPizzas([addedPizza[0]])
      : setCartPizzas([...cartPizzas, addedPizza[0]]);
  };

  function emptyCart() {
    if (cartPizzas.length === 0) {
      handleShow();
    } else {
      setCartPizzas([]);
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
    const idx = cartPizzas.findIndex((el) => el.id === pid);
    cartPizzas[idx].q++;
    setCartPizzas([...cartPizzas]);
  };

  const rmvQ = (pid) => {
    const idx = cartPizzas.findIndex((el) => el.id === pid);
    if (cartPizzas[idx].q === 1) {
      const newArr = cartPizzas.filter((el) => el.id !== pid);
      return setCartPizzas([...newArr]);
    } else {
      cartPizzas[idx].q--;
      setCartPizzas([...cartPizzas]);
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
    selectedPizza,
    anhadirPizza,
    cartPizzas,
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
