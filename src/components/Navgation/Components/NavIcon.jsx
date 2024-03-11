import React from 'react'

const NavIcon = ({imgI, styles}) => {
  return (
        <img 
            src={imgI} 
            alt={imgI}
            className={`w-6 cursor-pointer ${styles}`}
        />
  )
}

export default NavIcon
