import Dropdown from "./Dropdown"

export const MenuItems = ({ items }) => {

    return (
        <li className="list-none relative group/dropdown text-start">
            {items.submenu ? (
                <>
                    <button className='cursor-pointer px-4 py-3 hover:text-yellow-400 hover:bg-gray-100 uppercase'>
                        {items.title}
                    </button>

                    <div className="hidden group-hover/dropdown:block">
                        <Dropdown subs={items.submenu} />
                    </div>
                </>
            ): (
                <a  href={items.url}
                    className="cursor-pointer px-4 py-3 hover:text-yellow-400 hover:bg-gray-100"
                > 
                    {items.title} 
                </a>
            )}
        </li>
    )
}