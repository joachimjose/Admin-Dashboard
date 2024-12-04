import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl text-gray-800 font-bold'>400</p>
          <p className='text-gray-400 font-semibold'>Completed Orders</p>
        </div>
        <p className='bg-blue-200 flex justify-center items-center p-4 rounded-lg'>
          <span className='text-blue-900 text-lg'>+38</span>
        </p>
      </div>

      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold text-gray-800'>$12,000</p>
          <p className='text-gray-400 font-semibold'>Today's Revenue</p>
        </div>
        <p className='bg-blue-200 flex justify-center items-center p-4 rounded-lg'>
          <span className='text-blue-900 text-lg'>+28</span>
        </p>
      </div>

      <div className=' bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold text-gray-800'>$900</p>
          <p className='text-gray-400 font-semibold'>Last Shift's Revenue</p>
        </div>
        <p className='bg-blue-200 flex justify-center items-center p-4 rounded-lg'>
          <span className='text-blue-900 text-lg'>+25</span>
        </p>
      </div>

    </div>
  )
}

export default TopCards           
