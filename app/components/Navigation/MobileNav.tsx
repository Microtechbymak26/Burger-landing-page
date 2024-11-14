import Link from 'next/link'
import React from 'react'
import { ImCross } from "react-icons/im"

interface Props{
  showNav:boolean;
  closeNav:()=>void;
}


const MobileNav = ({closeNav,showNav}:Props) => {

   const navStyle = showNav ? 'translate-x-0' : 'translate-x-[100%]'

  return (
    <div className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}>
      <span onClick={closeNav} className='absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white'>
      <ImCross/>
      </span> 
      {/* Nav div */}
      <div className={`bg-emerald-700 ${navStyle} transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%]`}>

        {/* nav links */}

<ul className='space-y-10'>
<li className='text-[35px] font-medium hover:text-yellow-400 text-white'>
   <a href="/">Home</a>
</li>

<li className='text-[35px] font-medium hover:text-yellow-400 text-white'>
   <a href="/">Shop</a>
</li>

<li className='text-[35px] font-medium  hover:text-yellow-400 text-white'>
   <a href="/">Menu</a>
</li>

<li className='text-[35px] font-medium  hover:text-yellow-400 text-white'>
   <a href="/">Blog</a>
</li>

<li className='text-[35px] font-medium  hover:text-yellow-400 text-white'>
   <a href="/">Contact</a>
</li>
</ul>
      </div>
    </div>
  )
}

export default MobileNav
