import React from 'react'
import { categoriesData } from './categoriesData'
import Categories from './Components/Categories/Categories'

const Features = () => {
  return (
    <div className=''>
        
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

export default Features
