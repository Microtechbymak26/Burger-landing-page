import React from 'react'
import { FaBurger, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
        <div className='w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[rem] items-start'>
            {/* 1st part */}
            <div className='flex items-center text-white space-x-2'> 
           <span className='w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500'><FaBurger size={25}/></span> 
           <h1 className='text-[20px] sm:text-[30px] font-semibold'>
            BurgerBite
            </h1>
          </div>

          {/* 2nd part */}
          <div>
            <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Products</h1>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Chicken Burger</p> 
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Beef Burger</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Crispy Burger</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'> Classic Burger</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Zinger Burger</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Cheese Zinger Burger</p>
            <br />
          </div>
          

          {/* 3rd part */}
          <div>
            <h1 className='text-[23px] font-semibold mb-[2rem] text-white'>Quick Links</h1>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Home</p> 
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>About</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Menu</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Products</p>
            <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>NewsLetter</p>
            <br />
          </div>
           
            <div className='text-white'>
                <h1 className='text-[20px] sm:text-[25px] font-bold text-white'>
                    Follow Us
                </h1>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Facebook</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Twitter</p>
                    <p className='mt-[0.7rem] text-white opacity-60 hover:text-yellow-300 transition-all duration-200 cursor-pointer w-fit'>Instagram</p>
                    <div className='flex mt-[2rem] items-center space-x-6'>
                <span className='w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] text-blue-400'>
                <FaFacebookF size={25}/>
                </span>
                <span className='w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] text-blue-400'>
                <FaTwitter size={25}/>
                </span>
                <span className='w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] text-red-400'>
                <FaInstagram size={25}/>
                </span>
            </div>
            </div>  
        </div>
    </div>
  )
}

export default Footer
