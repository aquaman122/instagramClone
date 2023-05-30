'use client'
import { useState } from 'react';
import Link from 'next/link';
import Lottie from 'react-lottie-player'
import animation from '../public/animation/auth-animation';
import { AiFillFacebook } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Button from './component/button/Button';

export default function Home() {
  const { register, handleSubmit } = useForm();

  const onVaild = (data) => {
    console.log(data);
  }

  const [isAuthentic, setIsAuthentic] = useState(false);

  return (
    <>
      <article className="w-screen h-screen flex items-center justify-center">
      <div className="w-4/5 h-4/5 max-md:hidden flex justify-end pr-8">
        <Lottie
          loop
          animationData={animation}
          play
          className='w-9/12'
        />
      </div>

      <div className="w-4/5 h-4/5 max-lg:flex max-lg:justify-center">

        <div className='w-80 max-w-sm'>

          <div className='flex flex-col items-center shrink-0 border border-stone-300 rounded-sm text-center box-border'>
            <div className='h-24 text-4xl mt-12'>Instagram</div>
            <form onSubmit={handleSubmit(onVaild)} className='flex flex-col items-center'>
              <div>
                <div className='mb-2'>
                  <input {...register('email')} className='w-64 h-9 border border-gray-300 rounded-sm bg-gray-100 text-sm pl-2' placeholder='전화번호, 사용자 이름 또는 이메일' type="email" id='email' name='email' required />
                </div>

                <div className='mb-4'>
                  <input {...register('password')} className='w-64 h-9 border border-gray-300 rounded-sm bg-gray-100 text-sm pl-2' placeholder='비밀번호' type="password" id="password" name='password' required />
                </div>            
                <Button buttonText="로그인" />
                <div className='flex items-center mt-4 mb-8'>
                  <div className='h-px border border-gray-300 w-24'></div>
                  <div className='pl-4 pr-4 text-sm text-gray-500'>또는</div>
                  <div className='h-px border border-gray-300 w-24'></div>
                </div>
                <div className='flex justify-center items-center mb-6'>
                  <span className='mr-1 text-xl text-blue-900'><AiFillFacebook /></span>
                  <span className='text-blue-900 hover:cursor-pointer'>Facebook으로 로그인</span>
                </div>
              </div>

              <div className='text-sm mb-4 hover:cursor-pointer'>비밀번호를 잊으셨나요?</div>
            </form>
          </div>

          <div className='flex justify-center items-center border border-stone-300 mt-4 h-16'>
            <span className='flex text-sm'>
              <p className='pr-1'>계정이 없으신가요?</p>
              <Link href="/signup"><span className='text-blue-500 font-bold hover:cursor-pointer'>가입하기</span></Link>
            </span>
          </div>

          <div>
            <div className='mt-4'><span className='flex justify-center items-center hover:cursor-pointer'>앱을 다운로드하세요.</span></div>
            <div>
              <img></img>
              <img></img>
            </div>
          </div>
        </div>

      </div>
    </article>
    </>
  )
}
