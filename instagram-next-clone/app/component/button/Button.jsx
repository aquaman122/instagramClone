import React from 'react'

export default function Button({buttonText}) {
  return (
    <button 
    type='submit' 
    className='w-64 h-8 border bg-sky-500 rounded-md text-white text-sm active:scale-95 transition hover:cursor-pointer'>
      {buttonText}
    </button>
  )
}
