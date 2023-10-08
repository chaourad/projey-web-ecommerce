import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import quickship from './assets/quickship.gif';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Product from './components/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './components/admin/Dashboard';
import ProductPage from './pages/ProductPage';
import Favorite from './pages/Favorite';
import Paymentgateway from './pages/Paymentgateway';
import MenuProfile from './components/profil/MenuProfile';
import AddressComponent from './components/profil/AddressComponent';
import SecurityComponent from './components/profil/SecurityComponent';
import ReturnPolicy from './components/profil/ReturnPolicy';
import Shippinginfo from './components/profil/Shipping-info';
import SideBar from './components/admin/SideBar';
import Users from './components/admin/Users';
import ProductsAd from './components/admin/ProductsAd';
import Categories from './components/admin/Categories';
import Commande from './components/admin/Commande';
import LigneDesCommande from './components/admin/LigneDesCommande';

const Layout = () => {
  return (
    <div>
      <img src={quickship} className="quickship react" alt="quickship logo" />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const IndexUser = () => {
  return (
    <div>
      <img src={quickship} className="quickship react" alt="quickship logo" />
      <Header />
      <div className='flex flex-row'>
      <MenuProfile  />
      <Outlet  />
    </div>
      <Footer />
    </div>
  );
};
const Admin= ()=>{
  return (
<div className='flex flex-row'>
  <SideBar/>
  <Outlet/>
  
</div>
  );
}

function App() {
  return (
    <div className="font-bodyFont">
      <Router>
        <Routes>
                {/*-------------*/}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="favorite" element={<Favorite />} />
            <Route path="paymentgateway" element={<Paymentgateway />} />
          </Route>
                {/*-------------*/}
          <Route path="/user" element={<IndexUser />}>
            <Route path="addressbook" element={<AddressComponent />} />
            <Route path="security" element={<SecurityComponent />} />
            <Route path="return-policy" element={<ReturnPolicy />} />
            <Route path="shippin-info" element={<Shippinginfo />} />
          </Route>
          {/*-------------*/}
          <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path='users' element={<Users/>}/>
          <Route path='product' element={<ProductsAd/>}/>
          <Route path='category' element={<Categories/>}/>
          <Route path='commande' element={<Commande/>}/>
          <Route path='ligne-des-commandes' element={<LigneDesCommande/>}/>

          </Route>
          
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
