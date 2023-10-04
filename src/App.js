import Header from './components/Header';
import Home from "./pages/Home"
import quickship from './assets/quickship.gif'
import Footer from './components/Footer';
import {createBrowserRouter , Outlet , RouterProvider , ScrollRestoration} from "react-router-dom"
import Cart from './pages/Cart';
import Product from './components/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
import Favorite from './pages/Favorite';
const Layout =( )=>{
  return(
    <div>
      <img src={quickship} className="quickship react" alt="quickship logo" />
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  );
};
const router= createBrowserRouter([
  {
    path:'/',
    element :<Layout/>,
children :[
  { 
    path:"/",
    element: <Home/>,
  },
  { 
    path:"/product/:id",
    element: <Product/>,
  },
  { 
    path:"/cart",
    element: <Cart/>,
  },{
    path :'/login',
    element : <Login/>,
  },{
    path:'/register',
    element :<Register/>,
  },{
    path:'/product',
    element :<ProductPage/>
  }
  ,{
    path:'/favorite',
    element :<Favorite/>
  }

],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
])

function App() {
  return (
    <div className="font-bodyFont">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
