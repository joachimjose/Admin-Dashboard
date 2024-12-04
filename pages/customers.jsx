import React from 'react'
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '@/data/data'

const customers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-4 p-4'>
        <h2 className='font-bold'>Customers</h2>
        <h2>Welcome Back Joachim</h2>

      </div>

      <div className='p-4'>
        <div className='w-full m-auto border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 gridcols-2 items-center  justify-between cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>

          <ul>
            {data.map((order, id) =>
              <li key={id} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4">
                <div className='flex items-center'>
                  <div className='bg-blue-200 p-3 rounded-lg'>
                    <BsPersonFill className='text-blue-900' />
                  </div>
                  <p className='pl-4 font-semibold'>{order.name.first + ' ' + order.name.last}</p>
                </div>
                <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
                <p className='hidden md:flex'>{order.date}</p>

                <div className='sm:flex hidden justify-between items-center'>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical/>
                </div>
              </li>

            )}


          </ul>
        </div>

      </div>
    </div>
  )
}

export default customers
