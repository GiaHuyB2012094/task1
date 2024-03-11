import React from 'react'
import SubNewsCard from './SubNewsCard'
import TextTitle from '../Shared/TextTitle'

const SubNews = ({title, dataNew}) => {
  return (
    <div className="w-full flex flex-col items-start">
        <div > 
            {<TextTitle title={title}/>}
        </div>

        <div className="w-full flex gap-5  border-t border-solid py-3 overflow-hidden">
            {dataNew.map((newItem, idx) => (
                <SubNewsCard
                    key={idx}
                    imgI={newItem.imgI}
                    alt={newItem.title}
                    title={newItem.title}
                />
            ))}
        </div>
    </div>
  )
}

export default SubNews
