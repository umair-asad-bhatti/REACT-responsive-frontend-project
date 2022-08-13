import React from 'react'
import Dashboard from '../assets/Dashboard.svg'
const WhiteCard = ({ image, heading, subHeading }) => {
    return (
        <div className='w-[300px] flex flex-col items-start justify-center gap-2'>
            {/* Add Custom images here via props */}
            <img src={Dashboard} className='w-[200px]' alt="" />
            <h1 className='dark:text-white font-bold text-blue-lightmd font-lg'>{heading}</h1>
            <p className='dark:text-white  text-xl md:text-2xl w-[200px] text-blue-lightmd font-lg'>{subHeading}</p>
        </div>
    )
}

export default WhiteCard