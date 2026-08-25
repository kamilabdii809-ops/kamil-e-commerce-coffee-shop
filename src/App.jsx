
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Routes,Route}from "react-router-dom";
import Home from './pages/Home.jsx';
import Cart from "./pages/Cart.jsx";
import Menu from './pages/Menu.jsx';
import Checkout from "./pages/Checkout.jsx";
import SignIn from './pages/SignIn.jsx';
import Signup from './pages/Signup.jsx';
import Profile from './pages/Profile.jsx';
import ProtectedRouter from './components/ProtectedRouter.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Notfound from './pages/Notfound.jsx';
function App() {
 

  return (
    <>
    <Navbar />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path ="/Cart" element={<Cart />}/>
     <Route path='/Menu' element={<Menu />}/>
     <Route path='/Checkout' element={

      <ProtectedRouter>
      <Checkout />
      </ProtectedRouter>
     } />
     <Route path='/SignIn' element={<SignIn />} />
     <Route path='/Signup' element={<Signup />} />
      <Route path='/Profile' element={

        <ProtectedRouter>
           <Profile />
        </ProtectedRouter>

      } />
      <Route path="product/:id"element= {<ProductDetail />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer /> 
   
    </>
  )
}

export default App;
