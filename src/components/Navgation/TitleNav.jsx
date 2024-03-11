import React from 'react'

const TitleNav = ({icon, title}) => {
  return (
    <div className='flex items-center justify-center gap-2 text-white cursor-pointer'>
        <p className='text-xl mt-1'>{icon}</p>
        <p className='text-sm capitalize hover:text-yellow-200 font-medium'>{title}</p>
    </div>
  )
}

export default TitleNav
