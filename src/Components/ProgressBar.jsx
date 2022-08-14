import React from 'react'
import greenBar from '../assets/greenBar.svg'

const ProgressBar = ({ mainHeading, perHeading, instruction }) => {
    return (
        <div className='flex items-center flex-wrap justify-between gap-4 overflow-hidden  py-4'>


            <h1 className='dark:text-white text-blue-darkmdbg font-semibold text-xl'>{mainHeading}</h1>


            <h1 className='text-green-600 font-bold text-lg'>{perHeading}</h1>
            <img src={greenBar} alt="" />
            <div className='w-6 h-6 rounded-full bg-green-800 p-1'>
                <div className='bg-green-500 w-full h-full rounded-full animate-fade'>


                </div>

            </div>
            <h1 className='text-green-600 font-bold text-lg md:block'>{instruction}</h1>

        </div>
    )
}

export default ProgressBar