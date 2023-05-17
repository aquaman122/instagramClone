import { AiFillFacebook } from 'react-icons/ai';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <article className="flex mt-8 max-h-screen">
        <div className="max-md:hidden lg:flex-1 flex justify-end pr-8">
          <div className='w-64'>
            <img className='object-cover border-2 border-black rounded-3xl' src={`/instaImg${2}.png`}></img>
          </div>
        </div>

        <div className="flex-1 max-lg:flex max-lg:justify-center">

          <div className='w-80 max-w-sm'>

            <div className='flex flex-col items-center shrink-0 border border-stone-300 rounded-sm text-center box-border'>
              <div className='h-24 text-4xl mt-12'>Instagram</div>
              <form className='flex flex-col items-center'>

                <div>
                  <div className='mb-2'>
                      <input className='w-64 h-9 border border-gray-300 rounded-sm bg-gray-100 text-sm pl-2' placeholder='전화번호, 사용자 이름 또는 이메일' type="text" required />
                  </div>

                  <div className='mb-4'>
                      <input className='w-64 h-9 border border-gray-300 rounded-sm bg-gray-100 text-sm pl-2' placeholder='비밀번호' type="text" required />
                  </div>
                  <div className='mb-4'>
                    <Link href=""><button className='w-64 h-8 border bg-sky-500 rounded-md text-white text-sm'>로그인</button></Link>
                  </div>
                  <div className='flex items-center mb-8'>
                    <div className='h-px border border-gray-300 w-24'></div>
                    <div className='pl-4 pr-4 text-sm text-gray-500'>또는</div>
                    <div className='h-px border border-gray-300 w-24'></div>
                  </div>
                  <div className='flex justify-center items-center mb-6'>
                    <span className='mr-1 text-xl text-blue-900'><AiFillFacebook /></span>
                    <span className='text-blue-900'>Facebook으로 로그인</span>
                  </div>
                </div>

                <div className='text-sm mb-4'>비밀번호를 잊으셨나요?</div>
              </form>
            </div>

            <div className='flex justify-center items-center border border-stone-300 mt-4 h-16'>
              <span className='flex text-sm'>
                <p className='pr-1'>계정이 없으신가요?</p>
                <span className='text-blue-500 font-bold'>가입하기</span>
              </span>
            </div>

            <div>
              <div className='mt-4'><span className='flex justify-center items-center'>앱을 다운로드하세요.</span></div>
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
