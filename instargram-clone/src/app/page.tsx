import { AiFillFacebook } from 'react-icons/ai';

export default function Home() {
  return (
    <>
      <article className="flex h-screen mt-8">
        <div className="max-md:hidden lg:flex-1">

        </div>

        <div className="flex-1 max-lg:flex max-lg:justify-center">

          <div className='w-96 max-w-sm'>

            <div className='flex flex-col items-center shrink-0 border text-center box-border'>
              <div className='h-28 text-3xl flex items-center'>Instagram</div>
              <form className='flex flex-col items-center'>

                <div>
                  <div>
                    <label>
                      <input placeholder='전화번호, 사용자 이름 또는 이메일' type="text" required />
                    </label>
                  </div>

                  <div>
                  <label>
                      <input placeholder='비밀번호' type="text" required />
                    </label>
                  </div>
                  <div>
                    <button>로그인</button>
                  </div>
                  <div>
                    <div></div>
                    <div>또는</div>
                    <div></div>
                  </div>
                  <div className='flex justify-center'>
                    <span><AiFillFacebook /></span>
                    <span>Facebook으로 로그인</span>
                  </div>
                </div>

                <div>비밀번호를 잊으셨나요?</div>
              </form>
            </div>

            <div>
              <span>
                <p>계정이 없으신가요?</p>
                <span>가입하기</span>
              </span>
            </div>

            <div>
              <div><span>앱을 다운로드하세요.</span></div>
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
