import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Image from "./assets/img/house-banner.png";
import Menu from "./components/Menu";


const App = () => {
    const [nav,setNav]=useState(false);
    function handleNav() {
        setNav(!nav);
    }
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header setNav={setNav} nav={nav}/>
      <Menu nav={nav} setNav={setNav}/>
        <div className='md:hidden mb-2'>
            <img src={Image} alt='' />
        </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
