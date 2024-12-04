import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { notificationsData } from '@/data/notificationsData'

const notifications = () => {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between px-4 p-4'>
                <h2 className='font-bold'>Notifications</h2>
                <h2>Welcome Back Joachim</h2>

            </div>

            <div className='p-4'>
                <div className='w-full m-auto border rounded-lg bg-white overflow-y-auto'>
                    <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 gridcols-2 items-center  justify-between cursor-pointer'>
                        <span>Title</span>
                        <span className='sm:text-left text-right'>Type</span>
                        <span className='hidden md:grid'>Time</span>
                        <span className='hidden sm:grid'>Message</span>
                    </div>

                    <ul>
                        {notificationsData.map((notification, id) => (
                            <li key={id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4  sm:grid-cols-3 grid-cols-2 items-center justify-btween cursor-pointer">
                                <div className='flex items-center'>
                                    <div className={
                                        notification.isRead == 'false' ? 'bg-blue-300 h-4 w-4 rounded-full' : 'h-4 w-4 rounded-full bg-gray-400'} />

                                    <div className='pl-4'>
                                        <p className='pl-2 font-semibold'>{notification.title}</p>

                                    </div>
                                </div>
                                <p className='text-gray-600 sm:text-left text-right'>

                                    <span
                                        className={
                                            notification.type == 'warning' ? 'bg-red-300 p-2 rounded-lg'
                                                : notification.type == 'success' ? 'bg-green-200 p-2 rounded-lg ' : 'bg-yellow-200 p-2 rounded-lg'
                                        }>
                                        {notification.type}

                                    </span>
                                </p>
                                <p className='hidden md:flex'>{notification.date}</p>
                                <div className='sm:flex hidden justify-between items-center'>
                                    <p>{notification.message}</p>
                                    <BsThreeDotsVertical />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default notifications
