
import './App.css';
import Header from './Components/Layout/Header';
import Product from './Components/Product/Product';
import Footer from './Components/Layout/Footer';
import CartProvider from './Components/Store/CartProvider';

function App() {
  return ( <CartProvider>
     <Header/>
     <Product/>
     <Footer/>
    </CartProvider>
  );
}

export default App;
