import React, { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'

const Channel = () => {
    const notActiveBtn = 'transition-all duration-300 ease-in-out dark:hover:bg-[#1e253b] hover:bg-[#cbcdd0]  dark:hover:text-white md:w-full w-full dark:text-white text-black  rounded-md dark:bg-[#262F4A] bg-[#E2E4E8] shadow-sm flex flex-col items-center justify-center gap-4'
    const Activebtn = 'transition-all duration-300 ease-in-out dark:hover:bg-white dark:hover:text-blue-lightmd md:w-full w-full  rounded-md dark:text-white text-blue-lightmd dark:bg-white dark:text-blue-darkmdbg bg-blue-darkmdbg text-slate-100 shadow-sm flex flex-col items-center justify-center gap-4'
    const [current, setCurrent] = useState('Animals');
    const [search, setSearch] = useState('')
    const [filteredArray, setfilteredArray] = useState(null)

    const Animals = [
        "Aardvark",
        "Albatross",
        "Alligator",
        "Alpaca",
        "Ant",
        "Anteater",
        "Antelope",
        "Ape",
        "Armadillo",
        "Donkey",
        "Baboon",
        "Badger",
        "Barracuda",
        "Bat",
        "Bear",
        "Beaver",
        "Bee",
        "Bison",
        "Boar",
        "Buffalo",
        "Butterfly",
        "Camel",
        "Capybara",
        "Caribou",
        "Cassowary",
        "Cat",
        "Caterpillar",
        "Cattle",
        "Chamois",
        "Cheetah",
        "Chicken",
        "Chimpanzee",
        "Chinchilla",
        "Chough",
        "Clam",
        "Cobra",
        "Cockroach",
        "Cod",
        "Cormorant"]
    const Plants = [
        "Tunisian Restaurant",
        "Hypnotherapy Service",
        "Armenian Restaurant",
        "Chamber of Commerce",
        "District Government Office",
        "Millwork Shop",
        "Time and Temperature Announcement Service",
        "Dock Builder",
        "Ammunition Supplier",
        "Youth Social Services Organization",
        "Wholesale Fish Merchant",
        "Satellite Communication Service",
        "Elementary School",
        "Soup Shop",
        "Family Restaurant",
        "Bus Tour Agency",
        "Motorcycle Insurance Agency",
        "Bankruptcy Service",
        "Towing Service",
        "Ecuadorian Restaurant",
        "Theaters",
        "South African Restaurant",
        "Trading Card Store",
        "Water Sports Equipment Rental Service",
        "Authentic Japanese  Restaurant",
        "Flag Store",
        "General Store",
        "Dental Clinic",
        "Mexican Grocery Store",
        "Church of Christ",
        "Dump Truck Dealer",
        "Camera Repair Shop",
        "Well",
        "Tribal Headquarters",
        "Runway",
        "Trade School",
        "Archaeological Museum",
        "Psychotherapist",
        "Bedroom Furniture Store",
        "Marriage Counselor",
        "Batting Cage Center",
        "Real Estate Developer",
        "Auditorium",
        "Paraguayan Restaurant",
        "Dry Ice Supplier",
        "Credit Union",
        "Flea Market",
        "Tax Consultant",
        "Cemetery",
        "Hose Supplier",
        "Mailing Service",
        "Mobile Home Supply Store",
        "Envelope Supplier",
        "Dried Flower Shop",
        "Lawn Irrigation Equipment Supplier"
    ]
    //filtering feature
    useEffect(() => {

        if (current == 'Animals') {
            let temp = Animals.filter((animal) => (animal.toLowerCase().includes(search.toLowerCase())));
            setfilteredArray(temp);
        }
        if (current == 'Plants') {

            setfilteredArray(null)
            let temp = Plants.filter((plant) => (plant.toLowerCase().includes(search.toLowerCase())));
            setfilteredArray(temp);
        }
    }, [search, current]);
    return (
        <div className='md:w-screen lg:w-auto  my-20 '>
            <h1 className='text-center font-bold text-6xl text-white'>Our Full IPTV Channels List</h1>
            <p className='text-white mt-6 text-center font-semibold text-lg'>An Easy Access And Super Simple IPTV Services For Your Devives</p>
            <div className='flex md:flex-row my-12  flex-col items-center justify-center gap-4  md:w-[90%] lg:w-[1400px] mx-auto'>
                {/* left menu */}
                <div className='dark:bg-[#040E2E] overflowy p-1  md:h-[600px] md:w-[30%] w-[90%] flex flex-col items-center justify-start  gap-2 bg-[#FFFFFF] rounded-md shadow-md'>
                    {/* /button 1 */}
                    <div onClick={(e) => { setCurrent('Animals'); }}
                        className={` ${current == 'Animals' ? Activebtn : notActiveBtn} `}>

                        <button className='flex items-center justify-between w-full p-1'>
                            <h1 className='font-bold text-xl'>Animals</h1>
                            <AiOutlineArrowRight />
                        </button>
                    </div>

                    {/* /button 2 */}
                    <div onClick={(e) => {
                        setCurrent('Plants');

                    }}
                        className={` ${current == 'Plants' ? Activebtn : notActiveBtn}`}>

                        <button className='flex items-center justify-between w-full p-1'>
                            <h1 className='font-bold text-xl'>Plants</h1>
                            <AiOutlineArrowRight />
                        </button>

                    </div>


                </div>
                <div className='md:w-[50%] lg:w-[800px] w-[90%]  rounded-md shadow-md h-[600px] overflow-y-auto flex flex-row flex-wrap gap-8 items-start justify-center p-6  dark:bg-blue-darkmd bg-[#FFFFFF] '>
                    <div className='w-full  relative'>
                        <AiOutlineSearch fontSize={30} color='black' className='absolute right-0 top-[50%] translate-y-[-50%]' />
                        <input placeholder='Search' type="search " className='w-full border-none outline-none p-2 rounded-md shadow-md' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div className='flex flex-wrap gap-8 items-center justify-between'>

                        {

                            filteredArray && filteredArray.map((animal, index) => {

                                return <h1 key={index} className='md:w-[350px] w-[120px] rounded-md shadow-md  h-[40px] px-4 py-0.5 dark:bg-[#262F4A] dark:text-white  bg-[#E2E4E8] text-black text-2xl overflow-hidden'>{animal}</h1>
                            })
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Channel