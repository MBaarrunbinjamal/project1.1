
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


function App() {
  return (
   <>
   <Header/>
   <Hero/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/blog' element={<Blogger/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/check' element={<Check/>}/>
    <Route path='/thank' element={<Thank/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
