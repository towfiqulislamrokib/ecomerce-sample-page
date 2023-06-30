import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Layouts/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import { ProductsAndCartLoader } from './components/loaders/ProductsAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipping from './components/Shipping/Shipping';
import Privateroute from './rotues/Privateroute';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: ProductsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Privateroute><Inventory></Inventory></Privateroute>
        },
        {
          path: '/shipping',
          element: <Privateroute><Shipping></Shipping></Privateroute>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    } 
  ])
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
