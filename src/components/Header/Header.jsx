import logo from '../../assets/Logo.png'
import { FaSearch } from "react-icons/fa";
import { menuItemsData } from './Components/menuItem';
import { MenuItems } from './Components/MenuItems';

const Header = () => {
  return (
    <div className="hidden mt-8 xl:flex items-center justify-center gap-5 h-24 border-b border-solid text-primary-green ">
        <div className="w-24">
            <img
            src={logo}
            alt="logo"
            className="w-24"
            />
        </div>

        <div className="flex text-sm items-center justify-center font-bold uppercase ">
            {menuItemsData.map((menu, idx) => (
                <MenuItems items={menu} key={idx}/>
            ))}
        </div>

        <p className='cursor-pointer'><FaSearch/></p>
    </div>
  )
}

export default Header
