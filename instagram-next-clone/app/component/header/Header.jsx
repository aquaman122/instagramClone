import React from 'react'
import users from '@/app/mainpage/data'

export default function Header() {
  return (
    <section className='mt-2.5 mr-16 w-full max-w-2xl'>
      <ul className='flex justify-between items-start mb-8 space-x-3 overflow-scroll bg-parent pt-4 rounded drop-shadow-xl'>
        {users.map((user) => (
          <li key={user.id} className="flex flex-none flex-col items-center space-y-1">
            <div className={user.isUpdate ? "bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full" : "border border-gray-300 bg-white border-4 rounded-full"}>
              <a href='#' className='block bg-white p-1 rounded-full relative'>
                <img src={user.image_url}
                className='w-12 h-12 rounded-full object-cover' 
                />
              </a>
            </div>
            <a href='#' className='text-xs text-white'>
              {user.username}
            </a>
          </li>
        ))}
      </ul>

      <div className='bg-blue-700'>

        <div className='max-w-lg'>

          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>

        </div>

      </div>
    </section>
  )
}
