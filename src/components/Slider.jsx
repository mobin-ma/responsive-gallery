import React from 'react'
import slider from '../images/slider.png'

const Slider = () => {
  return (
    <div className='w-full flex items-center justify-between' id='home'>
      <div className='w-full hidden sm:block'>
        <img src={slider} alt="slider" className='w-full h-auto' />
      </div>
      <div className='w-full flex flex-col items-center p-5 sm:items-start gap-4 justify-center'>
        <h1 className='text-xl sm:text-5xl font-bold text-sky-600 dark:text-red-600 transition ease-in duration-300'>Gallery</h1>
        <p className='md:pl-5 text-sm sm:text-base sm:font-bold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque
        </p>
        <span className='bg-sky-600 cursor-pointer text-white dark:bg-red-600 p-2 md:ml-5 rounded-full font-bold text-sm sm:text-base hover:bg-sky-400 dark:hover:bg-rose-500 transition ease-in duration-300'>Let's go!</span>
      </div>
    </div>
  )
}

export default Slider