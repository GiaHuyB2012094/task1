import React from 'react'
import NewAction from './Components/NewsAction/NewAction'
import { newsActionData } from './Components/NewsAction/newsactionData'
import { newsData } from './Components/News/newsData'
import News from './Components/News/News'
import SubNews from './Components/SubNews/SubNews'
import { subnewsData } from './Components/SubNews/subnewsData'

const New = () => {
  return (
    <div>
        <div className='px-6 xl:px-48 py-1'>
            <div className='border-t border-solid w-full py-3'>
            <NewAction 
                title="TIN TỨC HOẠT ĐỘNG"
                dataNew={newsActionData}
            />
            </div>
        </div>
        
        <div className='px-6 xl:px-48 py-1 grid grid-cols-1 md:grid-cols-2 gap-5'>
            {newsData.map((newItem, idx) => (
            <News
                key={idx}
                name={newItem.name}
                title={newItem.title}
                imgI={newItem.imgI}
                desc={newItem.desc}
            />
            ))}
        </div>
            
        <div className='px-6 xl:px-48 py-1 gap-5 justify-between md:grid  md:grid-cols-2'>
            <div className='w-full'>
            <SubNews 
                title="BÍ KÍP NHÀ NÔNG"
                dataNew={subnewsData}
            />
            </div>
    
            <div className='w-full'>
            <SubNews 
                title="THẦN NÔNG VI HÀNH"
                dataNew={subnewsData}
            />
            </div>
        </div>
    </div>
  )
}

export default New
