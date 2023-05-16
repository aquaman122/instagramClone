'use client'
import { AiFillFacebook } from 'react-icons/ai'

export default function Home() {
  return (
    <>
      <article className="flex h-screen m-8">

        <div className='flex-1'>
          <img className='w-1/2 h-1/2 object-cotain' src='instaImg1.png'></img>
        </div>

        <div className='flex flex-col grow-1 justify-center mt-12 m-w-sm'>

          <div className="items-center bg-white border border-rgb(219, 219, 219) rounded-sm box-border flex flex-col shrink-0 text-inherit mb-10px pt-10px align-baseline relative ">
            <div className="text-3xl mb-20">Instagram</div>

              <div>

                <form className="flex flex-col">
                  <div className="relative ml-40 mr-40 mb-2">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-sm">전화번호, 사용자 이름 또는 이메일</span>
                    </div>
                    <input className="block outline-none w-full h-9 pl-2 bg-slate-100 border rounded-sm border-slate-200 contrast-more:border-slate-400" type="email" required />
                  </div>

                  <div className="relative ml-40 mr-40 mb-4">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                      <span className="text-gray-500 text-sm">비밀번호</span>
                    </div>
                    <input className="block outline-none w-full h-9 pl-2 bg-slate-100 border rounded-sm border-slate-200 contrast-more:border-slate-400" type="password" required />
                  </div>

                  <div className="ml-40 mr-40 mb-4">
                    <button className="w-full h-8 rounded-md bg-sky-400 text-white" type="submit">로그인</button>
                  </div>

                  <div className="flex items-center ml-40 mr-40 mb-2">
                    <div className="border border-gray-200 w-28"></div>
                    <div className="pl-4 pr-4 text-gray-600 text-sm w-16 flex justify-center">또는</div>
                    <div className="border border-gray-200 w-28"></div>
                  </div>

                  <div className="ml-40 mr-40 mb-2">
                    <button className="flex">
                      <span className='flex items-center text-xl'><AiFillFacebook /></span>
                      <span className="">Facebook으로 로그인</span>
                    </button>
                  </div>

                </form>

                <div className="flex justify-center">
                  <a>비밀번호를 잊으셨나요?</a>
                </div>

            </div>

          </div>

          <div className='border'>
            <span>계정이 없으신가요?</span>
            <a>가입하기</a>
          </div>
          <div>
            <span>앱을 다운로드하세요.</span>
            <div>
              <img></img>
              <img></img>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
