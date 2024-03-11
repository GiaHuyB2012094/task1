import React from 'react'

const NewCard = ({imgI, title, width }) => {
  return (
    <div className={`w-[${width}px] flex-shrink-0 flex flex-col justify-start gap-3 text-start cursor-pointer`}>
        <img 
            src={imgI}
            alt={imgI}
            className="w-full "
        />

        <p className=" text-primary-blue text-sm line-clamp-2 cursor-pointer">{title}</p>
    
    </div>
  )
}

export default NewCard
