import React from 'react'
import Nav from '../component/nav/Nav'

export default function Compass() {
  return (
    <>
      <Nav />
      <div className='xl:pl-60 pl-20'>
        <div className='grid grid-rows-3 grid-column-3 w-full h-screen px-10 pt-3 bg-black'>
          <div className='w-full h-full bg-pink'>fads</div>
          <div className='w-full h-full bg-pink'>fads</div>
          <div className='w-full h-full bg-pink'>fads</div>
          <div className='w-full h-full bg-pink'>fads</div>
          <div className='w-full h-full bg-pink'>fads</div>
          <div className='w-full h-full bg-pink'>fads</div>
          <div className='w-full h-full bg-pink'>fads</div>
          <div className='w-full h-full bg-pink'>fads</div>
        </div>
      </div>
    </>
  )
}
