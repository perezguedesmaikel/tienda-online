import React, {useState} from "react";
import {AiOutlineClose,AiOutlineMail } from "react-icons/ai"
import {FaLinkedinIn,FaGithub } from "react-icons/fa"
import {BsPersonLinesFill } from "react-icons/bs"

function Menu(props) {
    const nav=props.nav;
    function handleNav() {
        props.setNav(!props.nav);
    }
    return(
        <div><div className={nav?'z-50 fixed  left-0 top-0 w-[100%]  h-screen  bg-white p-10 ease-in duration-500':'z-40  fixed left-[-100%] top-0 w-[100%]  h-screen bg-[#ecf0f3] p-10 ease-in duration-500'}>
            <div>
                <div className='flex w-full items-center justify-between'>
                   <h1>Logo</h1>
                    <button className=' rounded-full shadow-lg shadow-gray-400 p-3 ' onClick={handleNav}>
                        <AiOutlineClose className='h-6 w-6 select-none'/>
                    </button>
                </div>
                <div className='border-b border-gray-300 my-4' >
                    <p className='w-[85%] md:w-[90%] py-4'>Tienda de Ropa La Espirituana</p></div>
            </div>
            <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                        <li className='py-4 text-sm'>Home</li>
                        <li className='py-4 text-sm'>Suscribirse</li>
                        <li className='py-4 text-sm'>Tienda</li>
                        <li className='py-4 text-sm'>Carrito</li>
                        <li className='py-4 text-sm'>Ayuda</li>
                </ul>
                <div className='pt-20'>
                    <p className='uppercase tracking-widest text-[#5651e5]'>Contáctanos</p>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaLinkedinIn/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <FaGithub/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <BsPersonLinesFill/>
                        </div>


                    </div>

                </div>
            </div>

        </div></div>

    )

}
export default Menu;