import React from 'react'

const TextTitle = ({title}) => {
  return (
    <p className='text-primary-green uppercase text-start text-sm 
        font-bold border-b border-solid border-primary-green py-1'>
        {title}
    </p>
  )
}

export default TextTitle
