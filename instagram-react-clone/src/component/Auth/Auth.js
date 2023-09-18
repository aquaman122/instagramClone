import './Auth.css';
import Lottie from 'react-lottie-player';
import animation from '../../animation/auth-animation.json';

const Auth = () => {

  return (
    <>
      <div className="auth-container">
        <div className="auth-animation">
          <Lottie
            loop
            animationData={animation}
            play
            className='w-9/12'
          />
        </div>

      <div className="auth-container__right">

        <div className='w-80 max-w-sm'>

          <div className='flex flex-col items-center shrink-0 border border-stone-300 rounded-sm text-center box-border'>
            <div className='h-24 text-4xl mt-12'>Instagram</div>
            <form className='flex flex-col items-center'>
              <div>
                <div className='mb-2'>
                  <input className='w-64 h-9 border border-gray-300 rounded-sm bg-gray-100 text-sm pl-2' placeholder='전화번호, 사용자 이름 또는 이메일' type="email" id='email' name='email' required />
                </div>

                <div className='mb-4'>
                  <input className='w-64 h-9 border border-gray-300 rounded-sm bg-gray-100 text-sm pl-2' placeholder='비밀번호' type="password" id="password" name='password' required />
                </div>            
                
                <div className='flex items-center mt-4 mb-8'>
                  <div className='h-px border border-gray-300 w-24'></div>
                  <div className='pl-4 pr-4 text-sm text-gray-500'>또는</div>
                  <div className='h-px border border-gray-300 w-24'></div>
                </div>
                <div className='flex justify-center items-center mb-6'>
                  <span className='mr-1 text-xl text-blue-900'></span>
                  <span className='text-blue-900 hover:cursor-pointer'>Facebook으로 로그인</span>
                </div>
              </div>

              <div className='text-sm mb-4 hover:cursor-pointer'>비밀번호를 잊으셨나요?</div>
            </form>
          </div>

          <div className='flex justify-center items-center border border-stone-300 mt-4 h-16'>
            <span className='flex text-sm'>
              <p className='pr-1'>계정이 없으신가요?</p>
              <span className='text-blue-500 font-bold hover:cursor-pointer'>가입하기</span>
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
    </div>
    </>
  );
}

export default Auth;