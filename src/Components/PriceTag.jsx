import React from 'react'

const PriceTag = () => {
    return (
        <div className='flex flex-col max-w-auto gap-4 text-[16px]'>
            <h1 className='px-14 py-2 rounded-md shadow-sm text-white bg-orange-400  font-bold  text-3xl'>100$</h1>
            <p className='font-semibold dark:text-white sm:text-sm text-normal text-blue-lightmd'>Top-Up Amount</p>
        </div>
    )
}

export default PriceTag