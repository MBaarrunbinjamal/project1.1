
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './componenets/Home';
import Hero from './componenets/Hero';
import Shop from './componenets/Shop';
import Aboutus from './componenets/Aboutus';
import Services from './componenets/Services';
import Blogger from './componenets/blogger';
import Contact from './componenets/Contact';
import Cart from './componenets/Cart';
import Check from './componenets/Check';
import Thank from './componenets/Thank';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import AuthGuard from './componenets/AuthGuard';
import { MyValue } from './componenets/Context';
import ReactWeb from './componenets/ReactWeb';

import Motion from './componenets/Motion';



function App() {
  let list = [
    {
      "Productname":"Nordic Chair",
      "Productprice":"$50.00",
      "Productimage":"images/product-3.png"
    },
      {
      "Productname":"Nordic Chair",
      "Productprice":"$50.00",
      "Productimage":"images/product-1.png"
    },
      {
      "Productname":"Kruzo Aero Chair",
      "Productprice":"$78.00",
      "Productimage":"images/product-2.png"
    },
      {
      "Productname":"Ergonomic Chair",
      "Productprice":"$43.00",
      "Productimage":"images/product-3.png"
    },  
     {
      "Productname":"Nordic Chair",
      "Productprice":"$50.00",
      "Productimage":"images/product-3.png"
    },
      {
      "Productname":"Nordic Chair",
      "Productprice":"$50.00",
      "Productimage":"images/product-1.png"
    },
      {
      "Productname":"Kruzo Aero Chair",
      "Productprice":"$78.00",
      "Productimage":"images/product-2.png"
    },
      {
      "Productname":"Ergonomic Chair",
      "Productprice":"$43.00",
      "Productimage":"images/product-3.png"
    },  
  ]
  
  return (
   <>
   {/* <ReactWeb/> */}
   <Header/>
   <MyValue.Provider value={"images/bowl-2.png"}>
   {/* <Hero/> */}

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<AuthGuard>
      <Shop data ={list}/>
    </AuthGuard>}/>
    <Route path='/aboutus' element={<AuthGuard><Aboutus/></AuthGuard>}/>
    <Route path='/services' element={<AuthGuard><Services/></AuthGuard>}/>
    <Route path='/contact' element={<AuthGuard><Contact/></AuthGuard>}/>
    <Route path='/blog' element={<AuthGuard><Blogger/></AuthGuard>}/>
    <Route path='/contact' element={<AuthGuard><Contact/></AuthGuard>}/>
    <Route path='/Cart' element={<AuthGuard><Cart/></AuthGuard>}/>
    <Route path='/check' element={<AuthGuard><Check/></AuthGuard>}/>
    <Route path='/thank' element={<AuthGuard><Thank/></AuthGuard>}/>
    <Route path='/Motion' element={<Motion/>}/>
   </Routes>
   </MyValue.Provider>
   {/* <Footer/> */}
   </>
  );
}

export default App;
