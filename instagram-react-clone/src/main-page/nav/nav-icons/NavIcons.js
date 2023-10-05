import { Link } from 'react-router-dom';
import React from 'react'


const NavIcons = (props) => {
  return (
    <>
      <div className='p-3 hover:bg-stone-900 rounded-lg'>        
        <Link to={props.url} className='xl:flex'>
          <props.Icon size={25} />
          <div className='pl-4 text-base sm:max-xl:hidden'>{props.name}</div>
        </Link>
      </div>
    </>
  )
}

export default NavIcons;