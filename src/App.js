import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { initializeApp } from "firebase/app";
import MyProvider from './context/CartContext.jsx'
import ItemListContainer from './containers/ItemListContainer.jsx'
import ItemDetailContainer from './containers/ItemDetailContainer.jsx'
import NavBar  from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'
import Cart from './components/Cart.jsx'
import CheckOut from './components/CheckOut.jsx'
import AboutUs from './components/AboutUs.jsx'

export default function App() {

  initializeApp({
    apiKey: "AIzaSyA2gFN86AUqH3iDxgacQqDIPrqoVSpPRtU",
    authDomain: "floora-accesorios.firebaseapp.com",
    projectId: "floora-accesorios",
    storageBucket: "floora-accesorios.appspot.com",
    messagingSenderId: "564792694027",
    appId: "1:564792694027:web:3294c5ea7dc184710d3e0e"
  });

  return ( 
    
    <BrowserRouter>
    <MyProvider>
      <NavBar />
          <Routes>
            <Route path="*" element={<h1 className="text-center m-4">PAGE NOT FOUND</h1>} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
      <Footer />
    </MyProvider>
    </BrowserRouter>
    
  )
}