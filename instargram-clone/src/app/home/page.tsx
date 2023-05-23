'use client'
import React, { useState } from 'react';
import {CgProfile} from 'react-icons/cg';
import Left from '../conponent/Left';


type Props = {}

export default function page({}: Props) {
  const users = [
    {
      id: 1,
      name: "Tatiana Pavlova",
      username: "tatiana_pavlova",
      isUpdate: true,
      image_url:
        "https://images.unsplash.com/photo-1626071466175-79ab723e9fdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=759&q=80",
    },
    {
      id: 2,
      name: "Aiony Haust",
      username: "aiony_haust",
      isUpdate: true,
      image_url:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: 3,
      name: "Joel Mott",
      username: "joel_mott",
      isUpdate: true,
      image_url:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
    },
    {
      id: 4,
      name: "Caique Silva",
      username: "caique_silva",
      isUpdate: true,
      image_url:
        "https://images.unsplash.com/photo-1504363081893-c8226db66926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 5,
      name: "Jemima Wood",
      username: "jemima_wood",
      isUpdate: true,
      image_url:
        "https://images.unsplash.com/photo-1644456070980-a6be4db8910a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 6,
      name: "Leio McLaren",
      username: "leio_mclaren",
      isUpdate: true,
      image_url:
        "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 7,
      name: "Alex Suprun",
      username: "alex_suprun",
      isUpdate: false,
      image_url:
        "https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 8,
      name: "Charles Deluvio",
      username: "charles_deluvio",
      isUpdate: false,
      image_url:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 9,
      name: "Luis Villasmil",
      username: "luis_villasmil",
      isUpdate: false,
      image_url:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      id: 10,
      name: "Jabari Timothy",
      username: "jabari_timothy",
      isUpdate: false,
      image_url:
        "https://images.unsplash.com/photo-1656473040206-53753fbbc767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 11,
      name: "Ben Parker",
      username: "ben_parker",
      isUpdate: false,
      image_url:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 12,
      name: "Ayo Ogunseinde",
      username: "ayo_ogunseinde",
      isUpdate: false,
      image_url:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 13,
      name: "Vince Fleming",
      username: "vince_fleming",
      isUpdate: false,
      image_url:
        "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 14,
      name: "Huston Wilson",
      username: "huston_wilson",
      isUpdate: false,
      image_url:
        "https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 15,
      name: "Leon Ell'",
      username: "leon_ell",
      isUpdate: false,
      image_url:
        "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
  
  return (
    <>
      <article className='flex bg-black'>
        <Left />
        <div className='flex-1 mr-14 ml-14 flex'>

          <div className='mt-2.5 mr-16 w-full max-w-2xl'>
    
            <ul className='flex justify-between items-start mb-8 space-x-3 overflow-x-scroll stories bg-parent pt-4 rounded drop-shadow-xl'>
              {users.map((user) => (
                <li key={user.id} className="flex flex-none flex-col items-center space-y-1">
                  <div className={user.isUpdate ? "bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full" : "border border-gray-300 bg-white border-1 p-1 rounded-full"}>
                    <a href='#' className='block bg-white p-1 rounded-full relative'>
                      <img src={user.image_url}
                      className='w-12 h-12 rounded-full object-cover' 
                      />
                    </a>
                  </div>
                  <a href='#' className='text-xs text-white'>
                    {user.username}
                  </a>
                </li>
              ))}
            </ul>

            <div className='bg-blue-700'>

              <div className='max-w-lg'>

                <div>
                  <div>ㄹㅇㅁㄴㄹㅁㄴㅇ</div>
                  <div></div>
                  <div></div>
                </div>

              </div>

            </div>
          </div>

          <div className='w-full h-screen pt-8 pb-8'>

            <div className='flex mt-4 mb-1'>
              <div>
                <img src={users[7].image_url} className="w-16 h-16 rounded-full object-cover" />
              </div>
              <div className='w-9/12 flex flex-col justify-center pl-4 text-sm text-white'>
                <div>jj__n23</div>
                <div>장석원</div>
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

        </div>
      </article>
    </>
  )
}