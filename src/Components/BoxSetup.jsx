import React from 'react'

import MobileSetupImage from '../assets/MobileSetup.webp'
import { BsApple } from 'react-icons/bs'
import { FaDownload } from 'react-icons/fa'
import icon from '../assets/IptvFill.svg'
const BoxSetup = () => {
    return (
        <div >
            <h1 className='text-2xl font-semibold'>Get IPTV on your Box setup and IOT devices</h1>
            <p className='my-4'>Explore TV in all your Devices</p>
            <div className='flex flex-row md:gap-40 gap-2 flex-wrap  items-center justify-center'>
                {/* Left content */}
                <div className='flex flex-col items-center justify-center gap-8 '>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-4'>
                            <h1 className='text-2xl font-semibold'>IOS</h1>
                            <BsApple fontSize={30} />
                        </div>
                        <button className='px-8  rounded-lg shadow-lg flex flex-row items-center gap-2 justify-between bg-blue-500 text-white'>
                            <img src={icon} alt="" />
                            <h1>Get IPTV</h1>
                            <FaDownload />
                        </button>
                        <button className='px-8  rounded-lg shadow-lg flex flex-row items-center gap-2 justify-between bg-blue-500 text-white'>
                            <img src={icon} alt="" />
                            <h1>Get IPTV</h1>
                            <FaDownload />
                        </button>
                    </div>

                    <div className='flex flex-col gap-2 mt-4 items-center justify-center'>
                        <div className='flex gap-2'>
                            <h1 className='text-2xl font-semibold'>IOS</h1>
                            <BsApple fontSize={30} />
                        </div>
                        <button className='px-8  rounded-lg shadow-lg flex flex-row items-center gap-6 justify-between bg-blue-500 text-white'>
                            <img src={icon} alt="" />
                            <h1>Get IPTV</h1>
                            <FaDownload />
                        </button>
                        <button className='px-8 rounded-lg shadow-lg flex flex-row items-center gap-6 justify-between bg-blue-500 text-white'>
                            <img src={icon} alt="" />
                            <h1>Get IPTV</h1>
                            <FaDownload />
                        </button>
                        <button className='px-8  rounded-lg shadow-lg flex flex-row items-center gap-6 justify-between bg-blue-500 text-white'>
                            <img src={icon} alt="" />
                            <h1>Get IPTV</h1>
                            <FaDownload />
                        </button>
                        <button className='px-8 rounded-lg shadow-lg flex flex-row items-center gap-6 justify-between bg-blue-500 text-white'>
                            <img src={icon} alt="" />
                            <h1>Get IPTV</h1>
                            <FaDownload />
                        </button>
                    </div>

                </div>
                {/* right image */}
                <div className='flex items-center justify-center'>
                    <div className='md:w-[40%] w-auto'>
                        <img src={MobileSetupImage} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BoxSetup