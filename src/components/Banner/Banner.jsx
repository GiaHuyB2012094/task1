import React from 'react'
import { categoriesData } from './Components/Categories/categoriesData'
import Categories from './Components/Categories/Categories'

const Banner = () => {
  return (
    <div className='mt-14'>
        <img src="https://loctroi.vn/UploadFiles/Album/240118101512266/080623094623769_banner-1832-x-537.jpg" alt="1"/>
        
        <div className='px-6 xl:px-48 md:w-full'>
          <div className='min-w-[200px] py-5 flex items-center justify-start xl:justify-between  gap-20 xl:gap-10 
            overflow-x-hidden scroll-auto'>
            
            {categoriesData.map((item, idx) => 
              <div className='flex-shrink-0'>
                <Categories 
                  key={idx} 
                  imgI={item.url} 
                  text={item.text}
                />
              </div>
            )}
          
          </div>
        </div>
    </div>
  )
}

export default Banner
