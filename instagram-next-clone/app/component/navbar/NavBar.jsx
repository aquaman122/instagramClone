import React, { useEffect, useState } from 'react'
import users from '@/app/mainpage/data'
import { collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '@/app/firebase/firebaseApp'
import { async } from '@firebase/util'

export default function NavBar() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onClick = () => {
    
  }

  return (
    <div className='w-full h-screen pt-8 pb-8 max-w-md:hidden'>

      <div className='flex mt-4 mb-1'>
        <div onClick={onClick}>
          <img src={users[7].image_url} className="w-16 h-16 rounded-full object-cover" />
        </div>
        <div className='w-9/12 flex flex-col justify-center pl-4 text-sm text-white'>
          <div>{nickname}</div>
          <div>{name}</div>
        </div>
        <div className='w-7 flex justify-center items-center text-xs text-blue-500'>전환</div>
      </div>

      <div className='flex justify-between'>
        <div className='text-gray-600 text-sm'>회원님을 위한 추천</div>
        <div className='text-white text-xs flex items-center'>모두 보기</div>
      </div>

      <div className='flex flex-col'>
        
        <div className='pt-1 pr-1.5 pl-1.5 pb-1'>
          <div className='flex mt-1 mb-1'>
            <div className='pr-3'>
              <img src={users[0].image_url} className="w-10 h-10 rounded-full object-cover" />
            </div>
            <div className='w-9/12 flex flex-col justify-center text-xs text-white'>
              <div>Aiony Haust</div>
              <div className='text-gray-600 overflow-x-hidden'>joe_33님 외 1명이 팔로우합니다</div>
            </div>
            <div className='w-10 flex justify-end items-center text-xs text-blue-500'>팔로우</div>
          </div>
        </div>

        <div className='pt-1 pr-1.5 pl-1.5 pb-1'>
          <div className='flex mt-1 mb-1'>
            <div className='pr-3'>
              <img src={users[1].image_url} className="w-10 h-10 rounded-full object-cover" />
            </div>
            <div className='w-9/12 flex flex-col justify-center text-xs text-white'>
              <div>joel_mott</div>
              <div className='text-gray-600 overflow-x-hidden'>joe_33님 외 1명이 팔로우합니다</div>
            </div>
            <div className='w-10 flex justify-end items-center text-xs text-blue-500'>팔로우</div>
          </div>
        </div>

        <div className='pt-1 pr-1.5 pl-1.5 pb-1'>
          <div className='flex mt-1 mb-1'>
            <div className='pr-3'>
              <img src={users[2].image_url} className="w-10 h-10 rounded-full object-cover" />
            </div>
            <div className='w-9/12 flex flex-col justify-center text-xs text-white'>
              <div>alex_suprun</div>
              <div className='text-gray-600 overflow-x-hidden'>회원님을 팔로우합니다.</div>
            </div>
            <div className='w-10 flex justify-end items-center text-xs text-blue-500'>팔로우</div>
          </div>
        </div>

        <div className='pt-1 pr-1.5 pl-1.5 pb-1'>
          <div className='flex mt-1 mb-1'>
            <div className='pr-3'>
              <img src={users[3].image_url} className="w-10 h-10 rounded-full object-cover" />
            </div>
            <div className='w-9/12 flex flex-col justify-center text-xs text-white'>
              <div>vince_fleming</div>
              <div className='text-gray-600 overflow-x-hidden'>회원님을 팔로우합니다.</div>
            </div>
            <div className='w-10 flex justify-end items-center text-xs text-blue-500'>팔로우</div>
          </div>
        </div>

        <div className='pt-1 pr-1.5 pl-1.5 pb-1'>
          <div className='flex mt-1 mb-1'>
            <div className='pr-3'>
              <img src={users[4].image_url} className="w-10 h-10 rounded-full object-cover" />
            </div>
            <div className='w-9/12 flex flex-col justify-center text-xs text-white'>
              <div>huston_wilson</div>
              <div className='text-gray-600 overflow-x-hidden'>회원님을 위한 추천</div>
            </div>
            <div className='w-10 flex justify-end items-center text-xs text-blue-500'>팔로우</div>
          </div>
        </div>
  
      </div>

      <div className='flex flex-col w-full text-gray-500 text-xs mt-10'>
        <div>
            <ul>
            <li>소개</li>
            <li>도움말</li>
            <li>홍보센터</li>
            <li>API</li>
            <li>채용 정보</li>
            <li>개인정보처리방침</li>
            <li>약관</li>
            <li>위치</li>
            <li>언어</li>
            <li>Meta Verified</li>
          </ul>
        </div>
        <span>@ 2023 INSTAGRAM FROM META</span>
      </div>
    </div>
  )
}
