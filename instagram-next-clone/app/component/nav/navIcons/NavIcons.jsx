import Link from 'next/link'
import React from 'react'

export default function NavIcons({Icon, name, url}) {
  return (
    <>
      <div className='p-3 hover:bg-stone-900 rounded-lg'>        
        <Link href={url} className='xl:flex'>
          <Icon size={25} />
          <div className='pl-4 text-base sm:max-xl:hidden'>{name}</div>
        </Link>
      </div>
    </>
  )
}
