import React from 'react'
import News from './Components/News/News'
import NewDaily from './Components/NewDaily'
import { newsActionData, newsData, subNewsData } from './NewsData'

const New = () => {
  return (
    <div className='px-6 xl:px-48 py-1'>
        <div className=''>
            <NewDaily 
                title="tin tức hoạt động"
                dataNew={newsActionData}
                width="365"
            />
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
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
            
        <div className='gap-5 md:grid  md:grid-cols-2'>
            <NewDaily 
                title="bí kíp nhà nông"
                dataNew={subNewsData}
                width="268"
            />

            <NewDaily 
                title="thần nông vi hành"
                dataNew={subNewsData}
                width="268"
            />
        </div>
    </div>
  )
}

export default New
