import React from 'react'

const NewsLetter = () => {
  return (
    <div className='pt-[5rem] pb-[5rem]'>
        <div className='text-center'>
            <h1 className='text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase'>Join For Hot Offers</h1>
            <p className='text-black text-opacity-70 w-[85%] md:w-[60%] mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repellendus ut incidunt eum numquam optio, aperiam ipsa dolorem modi error facilis mollitia reprehenderit sunt sequi repellat sint est possimus facere!</p>
            <div className='flex items-center space-x-2 mt-[3rem] justify-center'>
                {/* input */}
                <input type="email" placeholder='Enter your email' className='px-5 py-4 bg-gray-400 rounded-lg outline-none placeholder:text-black' />
                {/* subscribe button */}
                <button className='px-8 py-4 bg-green-700 hover:bg-green-900 transition-all  text-white rounded-lg'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
