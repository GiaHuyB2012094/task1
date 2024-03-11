import { IoMdArrowDropright } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const Dropdown = ({ subs, styles }) => {

  return (
    <ul className={twMerge(`min-w-40 absolute  top-full bg-gray-100 py-1 font-normal`,styles)}>
      {subs.map((menu, idx) => (
        <li key={idx}
          className="relative  group/item text-nowrap align-start hover:bg-green-600 py-2 hover:text-yellow-400 cursor-pointer px-3"
        >
            {menu.submenu ? (
              <>
                <button className='uppercase  flex gap-1 items-center justify-center'>
                    {menu.title} <IoMdArrowDropright/>
                </button>

                <div className="hidden group-hover/item:block !text-green-600">
                  <Dropdown subs={menu.submenu}
                    styles='left-full !top-0 '
                  />
                </div>

              </>
            ) : (
              <a href={menu.url}
                className=""
              >
                  {menu.title}
              </a>
            )}
            
        </li>
      ))}
    </ul>
  )
}

export default Dropdown
