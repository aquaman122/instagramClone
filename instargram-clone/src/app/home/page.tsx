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

          <div className='mt-2.5 mr-16 w-screen max-w-screen-sm'>
    
            <ul className='w-full flex justify-between items-start mb-8 space-x-3 overflow-x-scroll stories bg-parent p-4 rounded drop-shadow-xl'>
              {users.map((user) => (
                <li key={user.id} className="flex flex-none flex-col items-center space-y-1">
                  <div className={user.isUpdate ? "bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full" : "border border-gray-300 bg-white border-1 p-1 rounded-full"}>
                    <a href='#' className='block bg-white p-1 rounded-full relative'>
                      <img src={user.image_url}
                      className='w-16 h-16 rounded-full object-cover' 
                      />
                    </a>
                  </div>
                  <a href='#' className='text-xs text-white'>
                    {user.username}
                  </a>
                </li>
              ))}
            </ul>

            <div></div>
          </div>

          <div className='bg-blue-200'></div>
        </div>
      </article>
    </>
  )
}