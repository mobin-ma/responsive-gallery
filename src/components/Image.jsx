import React, { useState } from 'react';
import { BsHeartFill } from 'react-icons/bs'

const Image = ({ image }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='w-full break-inside-avoid relative cursor-pointer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`w-full h-full flex flex-col items-center bg-sky-500/60 dark:bg-red-500/60 absolute rounded-xl transition ease-in duration-300 ${isHovered ? '' : 'hidden'}`} >
                <ul className='w-full flex items-center gap-2 p-2'>
                    <li>
                        <img src={image.user.profile_image.medium} alt="user" className='w-full h-auto rounded-full' />
                    </li>
                    <li className='text-sm md:text-lg font-bold'>
                        {image.user.username}
                    </li>
                </ul>
                <ul className='w-full h-full flex items-start justify-center flex-col gap-5 p-2'>
                    <li>
                        <p className='text-base md:text-2xl p-2 font-bold'>{image.alt_description}</p>
                    </li>
                    <li>
                        <a href={image.links.download} className='p-2 underline'>Download</a>
                    </li>
                    <li>
                        <p className='flex items-center gap-2 p-2'><BsHeartFill />{image.likes}</p>
                    </li>
                </ul>
            </div>
            <img src={image.urls.full} alt={image.user} className='w-full h-auto rounded-xl' />
        </div>
    )
}

export default Image