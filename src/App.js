import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';


// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Image from "./assets/img/house-banner.png";

const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
        <div className='md:hidden'>
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
