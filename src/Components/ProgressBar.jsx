import React from 'react'
import greenBar from '../assets/greenBar.svg'

const ProgressBar = ({ mainHeading, perHeading, instruction }) => {
    return (
        <div className='flex items-center justify-center gap-4 overflow-hidden border-gray-50 border-b-2 py-4'>

            <div className='w-[180px]'>
                <h1 className='dark:text-white text-blue-darkmdbg font-semibold text-xl'>{mainHeading}</h1>
            </div>
            <div className='flex flex-wrap items-center justify-start gap-5'>
                <h1 className='text-green-600 font-bold text-lg'>{perHeading}</h1>
                <img src={greenBar} alt="" />
                <h1 className='text-green-600 font-bold text-lg md:block hidden'>{instruction}</h1>
            </div>
        </div>
    )
}

export default ProgressBar