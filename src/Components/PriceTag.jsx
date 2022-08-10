import React from 'react'

const PriceTag = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <h1 className='px-14 py-2 rounded-md shadow-sm text-white bg-orange-400  font-bold text-4xl'>100$</h1>
            <p className='font-semibold dark:text-white text-blue-lightmd'>Top-Up Amount</p>
        </div>
    )
}

export default PriceTag