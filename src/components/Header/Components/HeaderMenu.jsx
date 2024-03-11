import React from 'react'
import { MenuItems } from './MenuItems'

const HeaderMenu = ({menuData}) => {
  return (
    <div className="flex text-sm items-center justify-center font-bold uppercase ">
        {menuData.map((menu, idx) => (
            <MenuItems 
                items={menu} 
                key={idx}
            />
        ))}
    </div>
  )
}

export default HeaderMenu
