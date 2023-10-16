import React, { useEffect, useState } from 'react';
import { BsMoonFill, BsSearch, BsSunFill } from 'react-icons/bs'

const Header = () => {
    // A mode for saving dark mode
    const [darkMode, setDarkMode] = useState(false);

    // Dark mode operation
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }, [darkMode])

    return (
        <div className='w-full bg-zinc-200 gap-4 sm:gap-0 dark:bg-zinc-900 shadow-2xl flex flex-col sm:flex-row items-center justify-between p-4 fixed z-50 top-0 left-0'>
            <div className='w-full flex justify-center sm:justify-start'>
                <a href='#home' className='text-3xl font-bold text-sky-500 dark:text-red-500 transition ease-in duration-700'>GALLERY</a>
            </div>
            <div className='w-1/12 sm:w-1/5 md:w-1/12 dark:bg-zinc-600 flex flex-col sm:flex-row justify-center sm:justify-around items-center gap-5 p-2 rounded-xl fixed right-2 sm:relative'>
                <BsMoonFill className='text-xl text-gray-600 dark:text-gray-300 dark:duration-150 cursor-pointer transition ease-in duration-200 active:rotate-[360deg]' onClick={() => setDarkMode(false)} />
                <BsSunFill className='text-xl text-amber-500 cursor-pointer transition ease-in duration-200 active:rotate-[360deg]' onClick={() => setDarkMode(true)} />
            </div>
            <div className='w-full flex justify-center sm:justify-end'>
                <div className='w-2/2 sm:w-1/2 relative'>
                    <input type="search" className='w-full border-none rounded-full focus:ring-0 bg-sky-200/50 dark:bg-rose-300 transition ease-in duration-700  pl-10' />
                    <BsSearch className='dark:text-zinc-800 absolute top-1/2 -translate-y-1/2 left-3' />
                </div>
            </div>
        </div>
    )
}

export default Header