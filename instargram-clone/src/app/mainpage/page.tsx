import React from 'react'
import {AiOutlineHeart, AiFillHome, AiOutlineInstagram, AiOutlineCompass} from 'react-icons/ai';
import {FiSearch, FiPlusSquare} from 'react-icons/fi';
import {BiMoviePlay} from 'react-icons/bi';
import {SlPaperPlane} from 'react-icons/sl';
import {CgProfile} from 'react-icons/cg';
import {RxHamburgerMenu} from 'react-icons/rx';

type Props = {}

export default function mainpage({}: Props) {
  return (
    <>
      <article className='flex bg-black'>
        <div className='flex flex-col items-center bg-black w-16 h-screen sticky text-white pt-2 pl-3 pr-3 pb-5 text-3xl border-r border-gray-700'>

          <div className='flex items-center h-20 mb-7'>
            <a>
              <div className='hover:scale-110 ease-linear'><AiOutlineInstagram /></div>
            </a>
          </div>

          <div>
            <a className='mt-5'>
              <div className='hover:scale-110 ease-linear'><AiFillHome /></div>
            </a>
            <a>
              <div className='hover:scale-110 ease-linear mt-5'><FiSearch /></div>
            </a>
            <a>
              <div className='hover:scale-110 ease-linear mt-5'><AiOutlineCompass /></div>
            </a>
            <a>
              <div className='hover:scale-110 ease-linear mt-5'><BiMoviePlay /></div>
            </a>
            <a>
              <div className='hover:scale-110 ease-linear mt-5'><SlPaperPlane /></div>
            </a>
            <a>
              <div className='hover:scale-110 ease-linear mt-5'><AiOutlineHeart /></div>
            </a>
            <a>
              <div className='hover:scale-110 ease-linear mt-5'><FiPlusSquare /></div>
            </a>
            <a>
              <div className='hover:scale-110 ease-linear mt-5'><CgProfile /></div>
            </a>
          </div>

          <div>
            <a>
              <div className='hover:scale-110 ease-linear mt-28'><RxHamburgerMenu /></div>
            </a>
          </div>
        </div>

        <div className='flex-1 mr-14 ml-14'>

          <div className='bg-red-200'>
            <div></div>
            <div></div>
          </div>

          <div className='bg-blue-200'></div>
        </div>
      </article>
    </>
  )
}