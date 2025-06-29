import React from 'react'
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser, HiOutlineLocationMarker } from 'react-icons/hi'
const Info = () => {
  return (
    <div className='flex flex-col gap-6 md:gap-10'>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[280px] flex items-center gap-4">
          <HiOutlinePhone className='text-2xl mt-1 text-accent'/>
          <div className="">
            <p className='text-lg'>Date of Birth</p>
            <p>07 June 2003</p>
          </div>
        </div>
        <div className="w-[280px] flex items-center gap-4">
          <HiOutlineMail className='text-2xl mt-1 text-accent'/>
          <div className="">
            <p className='text-lg'>Email Address</p>
            <p>mahmoudsamaedbm@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[280px] flex items-center gap-4">
          <HiOutlinePhone className='text-2xl mt-1 text-accent'/>
          <div className="">
            <p className='text-lg'>Phone</p>
            <p>+49 163 1481230</p>
          </div>
        </div>
        <div className="w-[280px] flex items-center gap-4">
          <HiOutlineMail className='text-2xl mt-1 text-accent'/>
          <div className="">
            <p className='text-lg'>Location</p>
            <p>Regensburg, Germany</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info