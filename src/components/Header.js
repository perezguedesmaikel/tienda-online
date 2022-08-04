import React from 'react';
import { AiOutlineMenu,AiOutlineClose,AiOutlineMail } from "react-icons/ai";
import { FaUpload } from "react-icons/fa"

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo.svg';

const Header = (props) => {
  function handleMenu() {
    const nav=props.nav;
    props.setNav(!nav);
  }
  return (
    <header className='py-6 border-b  '>
      <div className='container mx-auto flex justify-between items-center  '>
        <Link to='/'>
         <h1 className='text-2xl'>Logo</h1>
        </Link>
        <Link to='/publicar'><p className='flex text-sm md:text-base lg:text-lg'>Publicar Inmueble&nbsp;<FaUpload className='text-lg md:text-xl lg:text-xl'/></p></Link>
        <div className='md:hidden' onClick={handleMenu}><AiOutlineMenu size={50}/></div>
        <div className='hidden md:flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
