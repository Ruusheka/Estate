import React, { useState ,useEffect} from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='auto'
    }
    return ()=>{
      document.body.style.overflow='auto'
    };
  },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} />
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
        <img 
          onClick={() => setshowMobileMenu(true)} 
          src={assets.menu_icon} 
          className='md:hidden w-7 cursor-pointer ml-auto' 
        />
        {/*---------------- MOBILE----------------*/}
        <div className={`md:hidden fixed top-0 left-0 h-full w-3/4 bg-white z-20 transform transition-transform duration-300 ${showMobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={() => setshowMobileMenu(false)} 
              
              src={assets.cross_icon} 
              className='w-6' 
            />
          </div>
          <ul className='flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium'>
            <a onClick={() => setshowMobileMenu(false)}  href='#Header' className='px-4 py-2 rounded-full inline-block'>Home</a>
            <a onClick={() => setshowMobileMenu(false)}  href='#About' className='px-4 py-2 rounded-full inline-block'>About</a>
            <a onClick={() => setshowMobileMenu(false)}  href='#Projects' className='px-4 py-2 rounded-full inline-block'>Projects</a>
            <a onClick={() => setshowMobileMenu(false)}  href='#Testimonials' className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
          </ul>
        </div>
        {/*---------------- MOBILE----------------*/}
      </div>
    </div>
  )
}

export default Navbar
