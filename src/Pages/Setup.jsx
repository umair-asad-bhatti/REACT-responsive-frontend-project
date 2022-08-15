import React, { useState, useRef } from 'react'
import { TbWorld } from 'react-icons/tb'
import { FaMobile } from 'react-icons/fa'
import { FiMonitor } from 'react-icons/fi'
import { TbDevices } from 'react-icons/tb'
import { MdCastConnected } from 'react-icons/md'
import WebSetup from '../Components/WebSetup'
import MobileSetup from '../Components/MobileSetup'
import TvSetup from '../Components/TvSetup'
import BoxSetup from '../Components/BoxSetup'
import CastingSetup from '../Components/CastingSetup'
import './style.css'

const Setup = ({ darkMode, setDarkMode }) => {
    const [current, setCurrent] = useState('Web');
    const notActiveBtn = 'transition-all duration-300 w-[170px]   ease-in-out dark:hover:bg-white hover:bg-blue-darkmdbg hover:text-white dark:hover:text-blue-lightmd   md:p-6 p-4 dark:text-white text-blue-lightmd  rounded-md dark:bg-blue-darkmdbg bg-white shadow-sm flex flex-col items-center justify-center gap-4'
    const Activebtn = 'transition-all duration-300  w-[170px]  ease-in-out dark:hover:bg-white dark:hover:text-blue-lightmd  md:p-6  p-4 rounded-md dark:text-white text-blue-lightmd dark:bg-white dark:text-blue-darkmdbg bg-blue-darkmdbg text-slate-100 shadow-sm flex flex-col items-center justify-center gap-4'

    //references
    const WebRef = useRef(null);
    const MobileRef = useRef(null);
    const TvRef = useRef(null);
    const BoxRef = useRef(null);
    const CastingRef = useRef(null);


    return (
        <div className=' w-screen p-8 md:p-0  mx-auto flex flex-col items-center justify-center'>

            <h1 className='text-center font-bold text-5xl  mt-20  text-white'>DOWNLOAD THE BEST IPTV APP</h1>
            <p className='text-center font-bold text-2xl mt-4  text-white'>Our Apps Work Flawlessly on tv, mobile and browser</p>

            <div className='mt-24  w-full md:w-[80%] lg:max-w-[900px] flex-wrap rounded-mg shadow-sm mx-auto flex items-center justify-between flex-col gap-8'>
                <div className='w-full  justify-between setup-buttons  p-2  flex  gap-8'>

                    {/* /icon 1 */}
                    <div onClick={(e) => {

                        WebRef.current?.scrollIntoView({ behavior: 'smooth' });
                        setCurrent('Web');

                    }}
                        className={` ${current == 'Web' ? Activebtn : notActiveBtn} 'btn'`} id='btn1'>

                        <button >
                            <TbWorld fontSize={60} />
                            <h1 className='font-bold text-xl'><a href="web">Web</a></h1>
                        </button>

                    </div>
                    {/* icons 2 */}
                    <div onClick={(e) => {
                        MobileRef.current?.scrollIntoView({ behavior: 'smooth' });
                        setCurrent('Mobile');

                    }} className={` ${current == 'Mobile' ? Activebtn : notActiveBtn} 'btn'`} id='btn2'>

                        <button>
                            <FaMobile fontSize={60} />
                            <h1 className='font-bold text-xl'>Mobile</h1>
                        </button>

                    </div>
                    {/* icon 3 */}
                    <div onClick={(e) => {
                        setCurrent('TV')
                        TvRef.current?.scrollIntoView({ behavior: 'smooth' });

                    }} className={` ${current == 'TV' ? Activebtn : notActiveBtn} 'btn'`} id='btn3'>
                        <button>
                            <FiMonitor fontSize={60} />
                            <h1 className='font-bold text-xl'>TV</h1>
                        </button>

                    </div>
                    {/* icon 4 */}
                    <div onClick={(e) => {

                        setCurrent('Box & Stick')
                        BoxRef.current?.scrollIntoView({ behavior: 'smooth' });

                    }} className={` ${current == 'Box & Stick' ? Activebtn : notActiveBtn} 'btn'`} id='btn4'>
                        <button>
                            <TbDevices fontSize={60} className='ml-5' />
                            <h1 className='font-bold text-xl'>Box & Stick</h1>
                        </button>

                    </div>
                    <div onClick={(e) => {

                        setCurrent('Casting');
                        CastingRef.current?.scrollIntoView({ behavior: 'smooth' });

                    }} className={` ${current == 'Casting' ? Activebtn : notActiveBtn} `} id='btn5'>
                        <button>
                            <h1><MdCastConnected fontSize={60} /></h1>
                            <h1 className='font-bold text-xl'>Casting</h1>
                        </button>

                    </div>
                </div>
            </div>
            <div className='mt-6 max-w-full md:w-[80%]  lg:max-w-[900px] dark:bg-blue-darkmd bg-white dark:text-white transition-all duration-300 ease-in-out text-blue-lightmd rounded-lg shadow-lg mx-auto flex items-center justify-center p-8'>
                {current === 'Web' ? <div ref={WebRef}><WebSetup /></div> : ''}
                {current === 'Mobile' ? <div ref={MobileRef}> <MobileSetup /></div> : ''}
                {current === 'TV' ? <div ref={TvRef}><TvSetup /></div> : ''}
                {current === 'Box & Stick' ? <div ref={BoxRef}><BoxSetup /></div> : ''}
                {current === 'Casting' ? <div ref={CastingRef}><CastingSetup /></div> : ''}
            </div>
        </div >
    )
}

export default Setup