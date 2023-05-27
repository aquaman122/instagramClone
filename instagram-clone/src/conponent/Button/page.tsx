import React from 'react'

type Props = {
  buttonText:string,
}

export default function Button({buttonText}: Props) {
  return (
    <button className='w-64 h-8 border bg-sky-500 rounded-md text-white text-sm active:scale-95 transition'>{buttonText}</button>
  )
}