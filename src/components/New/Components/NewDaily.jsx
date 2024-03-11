import React from 'react'
import TextTitle from '../../Shared/TextTitle'
import NewCard from './NewCard'

const NewDaily = ({title, dataNew, width = 268}) => {
    return (
        <div className="w-full flex flex-col items-start">
            <div > 
                {<TextTitle title={title}/>}
            </div>
    
            <div className="w-full flex gap-5  border-t border-solid py-3 overflow-hidden">
                {dataNew.map((newItem, idx) => (
                    <NewCard
                        key={idx}
                        imgI={newItem.imgI}
                        alt={newItem.title}
                        title={newItem.title}
                        width={width}
                    />
                ))}
            </div>
        </div>
      )
}

export default NewDaily
