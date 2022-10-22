import React from 'react'

function MiniProfile() {
  return (
    <div className='flex item-center justify-between mt-14 ml-10'>
        <img className='rounded-full border p-[2px] w-16 h-16' src='http://cdn1.shl.se/photos/14/01/52e6030706f05d4f2800fe5dced8cba8/thumb_0.jpg' alt=''></img>
    
        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>Michael Scott</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>

        <button className='text-blue-400 text-sm font-semibold mt-1'>
            Sign out
        </button>
    </div>
  )
}

export default MiniProfile
