'use client'
import React, { useState } from 'react'
import Nav from '../component/nav/Nav'

export default function Compass() {

  const [onHover, setOnHover] = useState(true);
  return (
    <>
      <Nav />
      <div className='xl:pl-60 pl-20'>
        <div className='grid grid-rows-3 grid-cols-3 w-full h-max px-28 pt-6 bg-black gap-1'>
          <div className='w-full h-80 bg-white rounded-sm'>
            {}
            <div></div>
            <div></div>
          </div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
          <div className='w-full h-80 bg-white rounded-sm'></div>
        </div>
      </div>
    </>
  )
}
