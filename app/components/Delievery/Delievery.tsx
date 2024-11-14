import React from 'react'
import Image from 'next/image'
import { RiEBike2Fill } from 'react-icons/ri'
import { IoFastFood } from 'react-icons/io5'
import { BsDoorOpen } from 'react-icons/bs'

const Delievery = () => {
  return (
    <div className='pt-[8rem] pb-[3rem] '>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]'>
            {/* Image */}
            <div>
                <Image src="/Capture.PNG" alt={''} height={800} width={900}/>
            </div>
            {/* Text */}
            <div>
                <h1 className='text-[30px] uppercase md:text[40px] lg:text-[50px] xl:text-[60px] font-bold leading:[3rem] md:leading-[4rem]'>Your <span className='text-red-600'>Favourite Burger</span> on the way</h1>
                <p className='mt-[2rem] text-black text-[17px] text-opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iusto repellendus quibusdam aspernatur nesciunt animi porro earum consectetur similique voluptatum nostrum corporis dolores beatae aliquam nisi neque mollitia necessitatibus consequuntur.</p>
                {/* <button className='mt-[2rem] bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700'>Order Now</button> */}

                <div className='flex items-center space-x-3 mt-[2rem] '>
                    <span className='w-[2rem] h-[2rem] text-red-600'>
                    <RiEBike2Fill size={30}/>
                    </span>
                    <h1 className='text-[18px] text-black font-medium'>Delivery in 30 mins</h1>
                </div>

                <div className='flex items-center space-x-3 mt-[1rem] '>
                    <span className='w-[2rem] h-[2rem] text-red-600'>
                    <IoFastFood size={30}/>
                    </span>
                    <h1 className='text-[18px] text-black font-medium'>Free shipping from 75%</h1>
                </div>

                <div className='flex items-center space-x-3 mt-[1rem] '>
                    <span className='w-[2rem] h-[2rem] text-red-600'>
                    <BsDoorOpen size={30}/>
                    </span>
                    <h1 className='text-[18px] text-black font-medium'>Delivery in your Doorstep</h1>
                </div>

               

            </div>
        </div>
    </div>
  )
}

export default Delievery
