import TitleNav from "./TitleNav"
// icon
import { FaEarthAsia } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

// svg
import vietnamOfFlat from '../../assets/Flag_of_Vietnam.svg.png'
import englandOfFlat from '../../assets/Flag_of_the_United_Kingdom_(3-5).svg.png'
import logo from '../../assets/Logo.png'
import { useState } from "react";
import { menuItemsData } from "../Header/menuItem";
import { navData } from "./navData";

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className="fixed top-0 right-0 left-0 h-14 xl:h-4 bg-white border border-solid xl:border-none xl:bg-primary-green flex items-center justify-between xl:justify-end gap-5  py-4 px-[3%] xl:px-[15%]">
        <div className="xl:hidden rounded-md bg-green-500 text-white p-1 text-xl cursor-pointer">
          <p onClick={() => setIsOpenMenu(prev => setIsOpenMenu(!prev))}>
            <IoMenu/>
          </p>
        </div>
        
        <div className="hidden xl:flex items-center justify-center gap-5">
          <TitleNav icon={<FaEarthAsia/>} title="Sitemap"/>
  
          <TitleNav icon={<FaEarthAsia/>} title="Hạt ngọc trời"/>
  
          <TitleNav icon={<FaEarthAsia/>} title="Hương vị trời"/>
  
          <TitleNav icon={<FaEarthAsia/>} title="Quản nông xanh"/>
  
          <TitleNav icon={<FaUsers/>} title="Tuyển dụng"/>
          
          <TitleNav icon={<MdEmail/>} title="Liên hệ"/>
        </div>

        <div className="xl:hidden w-12 sm:w-20 z-10 ">
          <img
            src={logo}
            alt="logo"
            className="w-12 sm:w-20 xl:hidden sm:mt-[50%] ml-[50%] cursor-pointer z-10"
          />
        </div>

        <div className="flex items-center gap-2 md:gap-5">
          <img 
            src={englandOfFlat} 
            alt="england of flat"
            className="w-6 cursor-pointer"
          />

          <img 
            src={vietnamOfFlat} 
            alt="vietnam of flat"
            className="w-6 cursor-pointer"
          />

          <img 
            src="https://loctroi.vn/hatngoctroi-html/images/search-icon.png" 
            alt="search"
            className="w-4 xl:hidden cursor-pointer"
          />
        </div>
        
          <div className={`fixed z-50 top-[7%] bg-white opacity-90 w-72  bottom-0 flex flex-col items-start transition-all ease-in duration-500
          ${isOpenMenu ? 'left-0' : '-left-[100%]'}`}>
            {navData.map((menuI, idx) => (
              <div
                key={idx}
                className="z-50 px-3 flex items-center justify-start text-primary-green gap-4 w-full py-2 hover:bg-primary-green/30 cursor-pointer"
              >
                <p className="text-xl"><FaEarthAsia/></p>
                <p className="text-lg capitalize">{menuI.title}</p>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Nav
