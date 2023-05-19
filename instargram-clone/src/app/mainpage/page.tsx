'use client'
import React, { useState } from 'react';
import {CgProfile} from 'react-icons/cg';
import Left from '../conponent/Left';

type Props = {}

export default function MainPage({}: Props) {
  const profile = ['ss', 'ee', 'gg', 'aa', 'ww'];


  return (
    <>
      <article className='flex bg-black'>
        <Left />
        <div className='flex-1 mr-14 ml-14'>

          <div className='bg-red-200 mt-2.5 mr-16'>
            <div className='mt-4 pt-4 pb-4'>
              
            <div>
              
            </div>

            </div>
            <div></div>
          </div>

          <div className='bg-blue-200'></div>
        </div>
      </article>
    </>
  )
}