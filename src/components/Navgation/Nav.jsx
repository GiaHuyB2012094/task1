import NavTitle from "./Components/NavTitle"
// icon
import { FaEarthAsia } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

// svg
import vietnamOfFlat from '../../assets/Flag_of_Vietnam.svg.png'
import englandOfFlat from '../../assets/Flag_of_the_United_Kingdom_(3-5).svg.png'
import logo from '../../assets/Logo.png'
import iconSearch from '../../assets/search-icon.png'
import { navData, navMobileData } from "./navData";
import NavIcon from "./Components/NavIcon";

const Nav = () => {

  return (
    <div className="fixed top-0 right-0 left-0 h-14 xl:h-4 bg-white border border-solid xl:border-none xl:bg-primary-green flex items-center justify-between xl:justify-end gap-5  py-4 px-[3%] xl:px-[15%]">
          
        <div className="xl:hidden rounded-md bg-green-500 text-white p-1 text-xl cursor-pointer">
          <label for="dropdown" className="cursor-pointer peer " 
          >
            <input type="checkbox" id="dropdown" class="hidden" />
            <IoMenu/>
          </label>

          <div className="absolute top-full -left-full w-72 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none  transition-all ease-in duration-500
            peer-has-[:checked]:left-0"
            role="menu" 
            aria-orientation="vertical" 
            aria-labelledby="options-menu"
          >
            {navMobileData.map((menuI, idx) => (
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
        
        {/* fixed z-50 top-[7%] left-0 bg-white opacity-90 w-72  bottom-0 hidden flex-col items-start transition-all ease-in duration-500 */}
        




        <div className="hidden xl:flex items-center justify-center gap-5">
          {navData.map((navI, idx) => (
            <NavTitle 
              key={idx}
              icon={navI.icon} 
              title={navI.title}
            />
          ))}
        </div>

        <div className="w-12 xl:hidden sm:w-20 z-10">
          <img
            src={logo}
            alt={logo}
            className="w-12 sm:w-20 !xl:hidden sm:mt-[50%] ml-[50%] cursor-pointer z-10"
          />
        </div>

        <div className="flex items-center gap-2 md:gap-5">
          <NavIcon imgI={englandOfFlat}/>
          <NavIcon imgI={vietnamOfFlat}/>
          <NavIcon imgI={iconSearch} styles="!w-4 !h-4 xl:hidden"/>
        </div>
        
        
    </div>
  )
}

export default Nav
