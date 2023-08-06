import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { IoAddCircleOutline } from 'react-icons/io5';
import { TfiGallery } from 'react-icons/tfi';

const Navbar = () => {
    return (
        <div className='w-full sm:w-1/2 md:w-1/5 bg-zinc-300 dark:bg-zinc-900 transition ease-in duration-200 rounded-full py-3 px-2 flex items-center justify-around fixed left-1/2 -translate-x-1/2 bottom-3 z-20'>
            <div>
                <a href="#home">
                    <BiHomeAlt className='text-zinc-800 dark:text-zinc-300 cursor-pointer transition ease-in duration-300 hover:text-sky-500 dark:hover:text-red-500 text-2xl font-bold' />
                </a>
            </div>
            <div>
                <IoAddCircleOutline className='text-zinc-800 dark:text-zinc-300 cursor-pointer transition ease-in duration-300 hover:text-sky-500 dark:hover:text-red-500 text-2xl font-bold' />
            </div>
            <div>
                <a href="#gallery">
                    <TfiGallery className='text-zinc-800 dark:text-zinc-300 cursor-pointer transition ease-in duration-300 hover:text-sky-500 dark:hover:text-red-500 text-2xl font-bold' />
                </a>
            </div>
        </div>
    )
}

export default Navbar