'use client'
import React, { useState } from 'react';
import Nav from '../component/nav/Nav';
import NavBar from '../component/navbar/NavBar';
import Header from '../component/header/Header';


export default function MainPage() {
  
  return (
    <>
      <article className='flex bg-black'>
        <Nav />

          <div className='mr-14 ml-14 flex flex-col'>
            <Header />
            <section className='text-white'>
              <div className='flex flex-col w-full bg-gray-100'>
                <div className='flex bg-white'>
                  <div>
                    <div className='w-4 h-4 bg-gray-400 border-2 border-pink-400' />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <NavBar />
      </article>
    </>
  )
}