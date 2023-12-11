
import './App.css';

import Product from './Components/Product/Product';
import Home from './Pages/Home';
import CartProvider from './Components/Store/CartProvider';
import RootLayout from './Pages/Root';
import About from './Pages/About';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Product/> },
      {path:"/Home",element:<Home/>},
      { path: "/About", element: <About /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
