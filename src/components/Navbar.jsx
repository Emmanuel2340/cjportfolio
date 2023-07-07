import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { TfiClose } from 'react-icons/tfi'
import L from './images/Picture1.png'

const Navbar = () => {
    const [onBars,ofBars] = useState(true)

    const handleBar =() =>{
        ofBars(!onBars)
    }
  return (
    <div className="flex py-auto px-1 w-[100%] h-[60px] bg-white shadow-lg sm:w-full sm:flex sm:p-3 sm:h-[75px]">
      <div className='flex justify-between w-full items-center h-auto mx-0 my-auto'>
        <img src={L} className='cursor-pointer  w-[10%] sm:w-[5%]' alt='' />
        <ul className='hidden sm:flex gap-4 text-[20px] sm:text-[25px] text-purple-500 my-auto mx-0'>
          <li className=''>
            <a href="#5" className=''>Home</a>
          </li>
          <li className=''>
            <a href='#0'>About</a>
          </li>
          <li className=''>
            <a href="#4">Let's Talk</a>
          </li>
        </ul>
        {
            onBars?<FaBars className='block sm:hidden text-pink-600 sm:text-pink-600 md:text-pink-600 h-[30px] w-[35px] sm:h-[40px] sm:w-[45px] cursor-pointer' onClick={handleBar} />:
            <TfiClose className='block sm:hidden text-pink-600 sm:text-pink-600 md:text-pink-600 h-[30px] w-[35px] sm:h-[40px] sm:w-[45px] cursor-pointer'onClick={handleBar}   />
        }
        
      </div>
    </div>
  )
}

export default Navbar
