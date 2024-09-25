import React, { useState } from 'react'
import { NavbarMenu } from '../mockData/data'
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa";
import ResponsiveMenu from './ResponsiveMenu';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
       <div className='container flex items-center justify-between'>
      {/* LOGO SECTION */}
         <div className='flex items-center gap-2 text-2xl font-bold py-8 uppercase'>
          <FaDumbbell/>
          <p>Gym</p>
          <p className='text-secondary'>Web</p>
         </div>
      {/* MENU SECTION */}
      <div className='hidden md:block'>
         <ul className='flex items-center gap-5'>
          {
            NavbarMenu.map((item) =>{
             return(
              <li key={item.id}>
                <a href={item.link}
                className='inline-block px-3 py-1 hover:text-primary font-semibold'>{item.title}</a>
              </li>
             )
            })
          }
         </ul>
      </div>
      {/* ICONS SECTION */}

       <div className='flex items-center gap-4'>
          <button className='text-2xl hover:bg-primary hover:text-white rounded-full duration-200'>
            <CiSearch/>
          </button>
          <button className='text-2xl hover:bg-primary hover:text-white rounded-full duration-200'>
            <PiShoppingCartThin className='gap-3'/>
          </button>
          <button className='px-6 py-3 hover:bg-primary text-primary font-semibold  hover:text-white rounded-md border-2 border-secondary duration-200 hidden md:block'>Login</button>
       </div>
      {/* MOBILE MENU SECTION */}

       <div className='md:hidden' onClick={() => setOpen(!open)}>
        <MdMenu className='text-4xl'/>
       </div>

       </div>
    </nav>
    {/* Mobile SideBar Section */}
    <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar