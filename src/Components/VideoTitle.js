import React from 'react'
import { IoIosPlay } from "react-icons/io";

const videoTitle = ({title,date,overview}) => {
  return (
    <div className=' h-[100vh] md:pt-[46vh] pt-[40vh] absolute pl-4 md:pl-16 bg-gradient-to-r from-black'>
     <h1 className='text-white md:text-6xl text-4xl font-black pb-4'>{title}</h1> 
     <h1 className='text-white text-xl hidden md:block font-light md:w-2/4 pb-4'>{overview}</h1> 
     <h1 className='text-white pb-4'>{date}</h1>
     <div className='flex gap-6'>
     <button className='px-10 py-2 bg-gray-600 rounded text-white flex justify-center items-center font-semibold'><IoIosPlay /> Play Now</button>
     <button className='px-10 py-2 bg-gray-600 rounded text-white'>More Info</button>
      </div> 
    </div>
  )
}

export default videoTitle
