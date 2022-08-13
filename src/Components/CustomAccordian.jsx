import React, { useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { AiOutlineArrowDown } from 'react-icons/ai'
const CustomAccordian = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <div style={{ transition: 'height 0.5s ease' }} className='w-full shadow-sm rounded-md gap-8 p-8 transition-height  duration-500 ease-in-out dark:bg-blue-darkmd bg-white flex flex-col items-center justify-center'>
            <div className='w-full flex items-center justify-between'>
                <div className='flex items-center justify-center'>
                    <h1 className='dark:text-white font-semibold text-2xl text-blue-darkmd'>{question}</h1>
                </div>
                <div className='flex items-center justify-center'>
                    <button type='button' className='dark:text-white text-blue-darkmd' onClick={handleShow}>
                        {
                            !show ? (<AiOutlineArrowDown />) : (<AiOutlineArrowUp />)
                        }
                    </button>
                </div>
            </div>
            {
                show && (<p className='dark:text-white text-blue-lightmd w-full justify-start items-center'>{answer}</p>)
            }
        </div>
    )
}

export default CustomAccordian