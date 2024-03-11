import logo from '../../assets/Logo.png'
import { FaSearch } from "react-icons/fa";
import { menuItemsData } from './menuItem';
import HeaderLogo from './Components/HeaderLogo';
import HeaderMenu from './Components/HeaderMenu';

const Header = () => {
  return (
    <div className="fixed right-0 left-0 top-8 bg-white hidden xl:flex items-center justify-center gap-5 h-24 border-b border-solid text-primary-green ">
        <HeaderLogo logo={logo}/>
        
        <HeaderMenu menuData={menuItemsData}/>
        
        <p className='cursor-pointer'>
          <FaSearch/>
        </p>
    </div>
  )
}

export default Header
