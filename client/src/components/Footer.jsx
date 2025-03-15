import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 lg:px-44 py-3'>
        <img width={40} src={assets.logo_icon} alt="" />
        <p className='mr-2 font-bold text-xl text-black'>PixQuote AI</p>
        <p className='flex-1  border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
            |  Copyright @VishalPatidar.dev  |  All right reserved</p>
        <div className='flex gap-1'>
            <img width={40} src={assets.facebook_icon} alt="" />
            <img width={40} src={assets.twitter_icon} alt="" />
            <img width={40} src={assets.google_plus_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer;