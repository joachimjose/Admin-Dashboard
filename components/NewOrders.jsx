import React from 'react';
import { data } from '@/data/data';
import { BiSolidShoppingBag } from 'react-icons/bi'

const NewOrders = () => {
    return (
        <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh]
    m-auto p-4 border rounded-lg overflow-scroll bg-white'>
            <h1> New Orders</h1>
            <ul>
                {data.map((order, id) => (
                    <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
                        <div className='bg-blue-200 rounded-lg p-3'>
                            <BiSolidShoppingBag />
                        </div>
                        <div className='pl-4'>
                            <p className='text-gray-800 font-bold'>${order.total}</p>
                            <p className='text-gray-400 font-semibold text-sm'>{order.name.first}</p>
                        </div>
                        <p className='lg:flex md:hidden absolute right-6 text-sm mt-4'>
                            {order.date}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NewOrders