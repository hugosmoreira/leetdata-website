import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from '../assets/leetdata4.png';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='w-full h-[90px] bg-black'>
      <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
        <div className='w-full'>
          <a href='#'><img src={Logo} /></a>
        </div>
        <div className='hidden md:flex flex items-center justify-between flex-wrap'>
          <ul className='flex text-white items-center container '>
            <li className='cursor-pointer mr-6 flex-1 '>Vision</li>
            
            <li className='cursor-pointer mr-3'>Community</li>
            <li className='cursor-pointer mr-3'>About</li>
            <button className='ml-4 cursor-pointer mr-3'>Start</button>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
          
          
        </div>

        {/* Mobile Menu */}
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
            <li className='text-2xl'>Platform</li>
            <li className='text-2xl'>Developers</li>
            <li className='text-2xl'>Community</li>
            <li className='text-2xl'>About</li>
            <button className='m-8'>Get Started</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;