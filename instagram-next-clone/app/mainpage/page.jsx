'use client'
import React, { useState } from 'react';
import Nav from '../component/nav/Nav';
import NavBar from '../component/navbar/NavBar';
import Header from '../component/header/Header';
import Post from '../component/post/Post';


export default function MainPage() {
  
  return (
    <>
      <article className='flex bg-black'>
        <Nav />
          <div className='flex'>
            <div className='mr-14 ml-14 flex flex-col'>
            <Header />
            <section className='flex flex-col items-center gap-y-4'>
              {
                new Array(5).fill(1).map((_, i) => (
                  <Post key={i} index={i} />
                ))
              }
            </section>
            </div>
            <NavBar />
          </div>
      </article>
    </>
  )
}