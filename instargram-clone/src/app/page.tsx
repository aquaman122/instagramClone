
export default function Home() {
  return (
    <>
      <div className="p-10 flex h-screen">
        <div className="flex-1">
          <img></img>
          1
        </div>
        <div className="flex-1 p-5 flex flex-col items-center w-full border border-slate-300 sm:w-3/5">
          <div className="text-3xl mb-20">Instagram</div>
          <div>
            <form>
              <div className="block pb-7">
                <input className="border border-slate-200 contrast-more:border-slate-400" placeholder="전화번호, 사용자 이름 또는 이메일" />
              </div>
              <div>
                <input placeholder="비밀번호" />
              </div>
              <div></div>
              <div></div>
              <div></div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
