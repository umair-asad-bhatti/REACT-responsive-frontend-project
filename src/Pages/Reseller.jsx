import React, { useState, useEffect } from 'react'
import Bitcoin from '../assets/Bitcoin.svg'
import BitcoinLight from '../assets/BitcoinLight.svg'
import WhiteCard from '../Components/WhiteCard'
import { Data } from '../Components/ResellerData'
import { questions } from '../Components/FaqData'
import CustomAccordian from '../Components/CustomAccordian'
import PriceTag from '../Components/PriceTag'
import TimeTag from '../Components/TimeTag'

const Reseller = ({ darkMode, setDarkMode }) => {
    const [data, setData] = useState(null)
    const [FAQ, setFAQ] = useState(null);
    useEffect(() => {
        setFAQ(questions);
        setData(Data)
    }, [])
    return (
        < div className='w-screen ' >
            <div className='w-[80vw] mx-auto flex flex-wrap my-20   items-center justify-center'>
                <div className='md:w-[50%]  flex-col gap-8 flex items-start justify-around flex-wrap'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-start text-white font-bold text-6xl'>The Worlds <span className='text-orange-600'>Best </span> IPTV Reseller Program</h1>
                    </div>
                    <div>
                        <p className='text-start text-white font-normal text-lg'>Earn Easy Money by Selling A Super-Fast, Super-Secure, And The Most Reliable IPTV Service.</p>
                    </div>

                    <div className='flex items-center justify-center flex-col bg-green-400 p-4 rounded-md shadow-sm'>
                        <button type='button' className='w-'>
                            <h1 className='text-white text-2xl font-normal'>Become a Seller</h1>
                        </button>

                    </div>
                </div>
                <div>
                    {
                        darkMode ? (<img src={Bitcoin} alt="" />) : (<img src={BitcoinLight} alt="" />)
                    }

                </div>
            </div>
            <div className='dark:bg-blue-darkmd bg-white w-[85vw] flex flex-col items-center justify-center gap-8  p-16 mx-auto shadow-sm rounded-md mt-14'>

                <div className='flex flex-col items-center justify-center gap-3'>
                    <h1 className='text-center  dark:text-white text-blue-darkmd font-bold text-3xl'>Why should You Select Out IPTV Reseller Prgoram?</h1>
                    <h2 className='text-center dark:text-white text-blue-lightmd font-normal text-lg'>Cccambox is a well-known brand in the IPTV industry. We have been delivering super-fast, highly secure, and the most reliable IPTV service with extraordinary features since 2010 to more than 200 000 users. Here’s what makes the Cccambox TV reseller program an ideal choice.</h2>
                </div>
                <div className='mt-12 gap-12 flex items-center flex-wrap justify-between'>
                    {
                        data && data.map((item, index) => {
                            return <WhiteCard key={index} {...item} />
                        })
                    }
                </div>
            </div>
            <div className='md:w-[85vw] w-[90vw] mx-auto my-20 py-8 px-4 dark:bg-blue-darkmd bg-white flex items-center flex-col justify-between gap-8 shadow-sm rounded-md'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h1 className='dark:text-white text-blue-lightmd font-bold text-3xl'>Pay-As-You-Go pricing</h1>
                    <p className='dark:text-white text-blue-lightmd font-light md:px-32 px-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam enim praesentium velit nam dicta ullam. Vitae dignissimos delectus illum sint laboriosam totam! Delectus, exercitationem assumenda voluptas culpa ut aperiam nobis?</p>
                </div>

                <div className='md:w-[80%]  flex gap-2 md:my-8 items-center justify-between flex-wrap'>
                    <PriceTag />
                    <PriceTag />
                    <PriceTag />
                    <PriceTag />
                    <PriceTag />
                    <PriceTag />
                    <PriceTag />
                    <PriceTag />
                </div>
                <h1 className='dark:text-white text-blue-lightmd text-4xl font-bold'>Package Cost for Resellers</h1>
                <div className='flex items-center justify-center gap-4 flex-wrap'>
                    <TimeTag />
                    <TimeTag />
                    <TimeTag />
                    <TimeTag />
                </div>
                <div className='flex items-center justify-center flex-col bg-green-400 p-4 rounded-md shadow-sm'>
                    <button type='button' className='w-'>
                        <h1 className='text-white text-2xl font-normal'>Subscribe-to-pay as you go</h1>
                    </button>

                </div>
            </div>
            {/* FAQ */}
            <h1 className='text-white mt-12 text-5xl font-semibold mx-auto text-center'>FAQ</h1>
            <div className='my-8 w-[70vw] mx-auto flex flex-col items-center justify-center gap-6'>
                {
                    FAQ && FAQ.map((faq, index) => {
                        return <CustomAccordian key={index} {...faq} />
                    })
                }
            </div>
        </div >

    )
}

export default Reseller