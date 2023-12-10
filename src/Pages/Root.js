import { Outlet } from 'react-router-dom';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer'
import CartProvider from '../Components/Store/CartProvider';
const RootLayout = () => {
      return(
            <CartProvider>
            <Header/>
            <Outlet/>
            <Footer/>
          </CartProvider>
      );
};

export default RootLayout;