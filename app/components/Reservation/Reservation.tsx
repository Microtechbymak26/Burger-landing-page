import React from 'react'
import { BiPhone } from 'react-icons/bi'
import ReservationForm from './ReservationForm'
const Reservation = () => {
  return (
    <div className='h-[100vh] pt-[50rem] bg-center bg-cover relative mt-[8rem] pb-[30rem] mb-[3rem] bg-[url("/bg-black.jpg")]'>
       {/* Overlay */}
        <div className='absolute w-full h-full bg-[#00000e6] top-0 left-0 right-0 bottom-0 flex items-center'>
          <div className='w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[10rem]'>
               {/* text content */}
               <div>
                <h1 className='text-[30px]  md:text-[40px] pt-[20rem] lg:text-[50px] text-white font-bold leading-[3rem] md:leading-[4rem] text-center '>DO YOU HAVE ANY DINNER PLAN TODAY? RESERVE YOUR TABLE</h1>
                <p className='text-[17px] mt-[1rem] text-white text-opacity-70  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est quas illum voluptatum veritatis consequatur similique, quo assumenda, perferendis dolorum nihil, inventore dolor commodi laborum odio impedit nobis? Natus, eius.</p>
                <div className='flex mt-[2rem] items-center space-x-4 '>
                    <div className='w-[3rem] h-[3rem] bg-red-600 rounded-full flex items-center justify-center flex-col'>
                        <span className='w-[1.7rem] h-[1.7rem] text-white'>
                        <BiPhone size={25}/>
                        </span>
                    </div>
                    <div>
                        <h1 className='text-[25px] text-white font-semibold'>Quick order 24/7</h1>
                        <h1 className='text-yellow-300 text-[30px] font-bold'>0321 245907</h1>
                    </div>
                </div>
             </div>
               {/* reservation form */}
               <ReservationForm/>
               <div></div>
          </div>
        </div>
    </div>
  )
}

export default Reservation
