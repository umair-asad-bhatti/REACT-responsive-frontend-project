import React from 'react'

import { AiOutlineArrowRight } from 'react-icons/ai'
const CustomCard1 = ({ mainHeading, subHeading, subPara, buttonHeading, image }) => {
    return (
        <div className='flex flex-row items-center justify-center gap-4 bg-white w-full dark:bg-blue-darkmd py-10 px-6 flex-wrap rounded-md shadow-sm'>
            <div className='flex flex-col items-start justify-start gap-4 w-[300px]'>
                <h1 className='dark:text-blue-700 text-5xl font-semibold'>{mainHeading}</h1>
                <h1 className='dark:text-white text-4xl font-bold'>{subHeading}</h1>
                <p className='text-justify dark:text-white font-lg font-normal'>
                    {subPara}
                </p>
                <button type='button' className='flex gap-2 items-center justify-center p-4 my-4 rounded-lg shadow-sm bg-gradient-to-r from-cyan-500 to-blue-500 '>
                    <h1 className='font-bold text-lg text-white'>{buttonHeading}</h1>
                    <AiOutlineArrowRight fontSize={20} color={'white'} />
                </button>
            </div>
            <div className='flex items-center justify-center p-4 w-[500px]' >
                <img src={image} alt="picture" />
            </div>
        </div>
    )
}

export default CustomCard1