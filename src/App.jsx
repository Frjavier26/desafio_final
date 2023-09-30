import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import Cart from './views/Cart';
import Home from './views/Home';
import Detail from './views/Detail';
import NotFound from './views/NotFound';
import Login from "./views/Login"
import Registro from "./views/Registro"
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <NavbarComp />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
