import React from 'react'
import {AiOutlineHeart, AiFillHome, AiOutlineInstagram, AiOutlineCompass} from 'react-icons/ai';
import {FiSearch, FiPlusSquare} from 'react-icons/fi';
import {BiMoviePlay} from 'react-icons/bi';
import {SlPaperPlane} from 'react-icons/sl';
import {CgProfile} from 'react-icons/cg';
import {RxHamburgerMenu} from 'react-icons/rx';
import Link from 'next/link';

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
          <div className='p-3 hover:bg-stone-900 rounded-lg'>
            <Link href="/home" className='xl:flex'>
              <div className='hover:scale-110 ease-linear'><AiFillHome /></div>
              <div className='pl-4 text-base sm:max-xl:hidden'>홈</div>
            </Link>
          </div>

          <div className='p-3 hover:bg-stone-900 rounded-lg'>
            <a className='xl:flex'>
              <div className='hover:scale-110 ease-linear'><FiSearch /></div>
              <div className='flex items-end pl-4 text-base sm:max-xl:hidden'>검색</div>
            </a>
          </div>

          <div className='p-3 hover:bg-stone-900 rounded-lg'>
            <a className='xl:flex'>
              <div className='hover:scale-110 ease-linear'><AiOutlineCompass /></div>
              <div className='flex items-end pl-4 text-base sm:max-xl:hidden'>탐색 탭</div>
            </a>
          </div>

          <div className='p-3 hover:bg-stone-900 rounded-lg'>
            <a className='xl:flex'>
              <div className='hover:scale-110 ease-linear'><BiMoviePlay /></div>
              <div className='flex items-end pl-4 text-base sm:max-xl:hidden'>릴스</div>
            </a>
          </div>

          <div className='p-3 hover:bg-stone-900 rounded-lg'>
            <a className='xl:flex'>
              <div className='hover:scale-110 ease-linear'><SlPaperPlane /></div>
              <div className='flex items-end pl-4 text-base sm:max-xl:hidden'>메세지</div>
            </a>
          </div>

          <div className='p-3 hover:bg-stone-900 rounded-lg'>
            <a className='xl:flex'>
              <div className='hover:scale-110 ease-linear'><AiOutlineHeart /></div>
              <div className='flex items-end pl-4 text-base sm:max-xl:hidden'>알림</div>
            </a>
          </div>

          <div className='p-3 hover:bg-stone-900 rounded-lg'>
            <a className='xl:flex'>
              <div className='hover:scale-110 ease-linear'><FiPlusSquare /></div>
              <div className='flex items-end pl-4 text-base sm:max-xl:hidden'>만들기</div>
            </a>
          </div>

          <div className='p-3 hover:bg-stone-900 rounded-lg'>
            <a className='xl:flex'>
              <div className='hover:scale-110 ease-linear'><CgProfile /></div>
              <div className='flex items-end pl-4 text-base sm:max-xl:hidden'>프로필</div>
            </a>
          </div>
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