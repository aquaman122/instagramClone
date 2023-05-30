import React from 'react'
import Link from 'next/link';
import { NAV_ICONS } from './data';
import NavIcons from './navIcons/NavIcons';
import { AiOutlineInstagram } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Nav() {
  
  return (
    <>
      <div className='xl:w-60 flex flex-col sm:max-xl:items-center bg-black w-20 h-screen sticky text-white pt-2 pl-3 pr-3 pb-5 text-3xl border-r border-gray-700'>

        <div className='p-3 mb-3 sm:max-xl:hover:bg-stone-900 rounded-lg'>
          <a>
            <div className='xl:hidden hover:scale-110 ease-linear'><AiOutlineInstagram /></div>
            <div className='sm:max-xl:hidden hover:cursor-pointer ease-linear text-xl mb-4'>Instagram</div>
          </a>
        </div>

        <div className='flex flex-col sm:max-xl:text-3xl xl:text-2xl'>
          {
            NAV_ICONS.map((item) => (
              <NavIcons
                className="hover:scale-110 ease-linear"
                Icon={item.icon}
                name={item.name}
                url={item.url}
                key={item.name}
              />
            ))
          }
        </div>

        <div>
          <div className='p-3 hover:bg-stone-900 rounded-lg'>
            <a className='xl:flex'>
              <div className='hover:scale-110 ease-linear mt-28'><RxHamburgerMenu /></div>
              <div className='flex items-end pl-4 text-base sm:max-xl:hidden'>더 보기</div>
            </a>
          </div>
        </div>

      </div>
    </>
  )
}