import Link from 'next/link'
import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BiShoppingBag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { Fa500Px } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiShoppingCartThin } from "react-icons/pi";


const Sidebar = ({ children }) => {
    return (
        <div className='flex'>
            <div className='fixed w-20 h-screen p-4 bg-blue-300 border-r-[1px] flex flex-col justify-between rounded-r-2xl'>
                <div className='flex-col items-center '>

                    <div className=' text-white rounded-lg inline-block '>
                        <Fa500Px size={50} />
                    </div>

                    <div>
                        <span className='border-b-[2px]  border-black  w-32 ml-2 mr-2'></span>
                    </div>
                    <div className='flex-col mt-16 '>
                        <Link href='/'>
                            <div className='bg-gray-100 text-black hover:bg-gray-200 cursor-pointer mt-4  rounded-lg inline-block p-3'>
                                <RxDashboard size={20} />
                            </div>
                        </Link>
                        <Link href='/customers'>
                            <div className='bg-gray-100 text-black hover:bg-gray-200 cursor-pointer mt-6 rounded-xl inline-block p-3'>
                                <BsPerson size={20} />
                            </div>
                        </Link>
                        <Link href='/orders'>
                            <div className='bg-gray-100 text-black hover:bg-gray-200 cursor-pointer mt-6 rounded-xl inline-block p-3'>
                                <PiShoppingCartThin size={20} />
                            </div>
                        </Link>
                        <Link href='/notifications'>
                            <div className='bg-gray-100 text-black hover:bg-gray-200 cursor-pointer mt-6 rounded-xl inline-block p-3'>
                              <IoMdNotificationsOutline size={20}/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <main className='ml-20 w-full'>{children}</main>
        </div>
    )
}

export default Sidebar