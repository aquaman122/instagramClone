import React from 'react'
import Lottie from 'react-lottie-player'
import loadingAnimation from '../../../public/animation/loading-animation';

export default function LoadingOverlay({ isLoading }) {
  return (
    <div className='absolute top-0 left-0 inset-8 flex items-center justify-center w-80 h-full bg-black bg-opacity-10 z-10'>
      <Lottie
        loop
        animationData={loadingAnimation}
        play
        className='w-52'
      />
    </div>
  )
}
