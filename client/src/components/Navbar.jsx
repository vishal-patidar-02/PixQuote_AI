import React from 'react';
import {assets} from '../assets/assets';
import {Link} from 'react-router-dom';
import {useClerk} from '@clerk/clerk-react';

const Navbar = () => {
  const {openSignIn} = useClerk();
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
        <Link className='flex items-center' to="/"><img className='w-13 sm:w-15 ' src={assets.logo_icon} alt="logo" /><p className='text-3xl mx-1 sm:mx-2 font-medium'>PixQuote AI</p></Link>
        
        <button onClick={()=>openSignIn({})} className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full'>
            Get started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" />
        </button>
    </div>
  )
}

export default Navbar