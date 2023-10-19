import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavbarComp from './components/NavbarComp';
import Cart from './views/Cart';
import Home from './views/Home';
import Detail from './views/Detail';
import NotFound from './views/NotFound';
import Login from './views/Login';
import Registro from './views/Registro';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import MyItems from './views/MyItems';
import EditItems from './views/EditItem';
import AddItem from './views/AddItem';
import ItemsList from './views/ItemsList';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <NavbarComp />
        <main className="scr-h">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productos/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/myItems" element={<MyItems />} />
            <Route path="/addItem" element={<AddItem />} />
            <Route path="/editItems" element={<EditItems />} />
            <Route path="/itemslist" element={<ItemsList />} />
          </Routes>
        </main>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
