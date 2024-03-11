import React from 'react'

const FooterCard = ({title, data}) => {
  return (
    <div className='text-white text-start py-2 md:w-[30%]'>
        <p className='text-lg'>{title}</p>
        <div className='flex flex-col gap-2 py-1'>
            {
                data.map((dataI, idx) => (
                    <div    
                        key={idx} 
                        className='flex gap-3 items-center'
                    >
                        <img
                            src={dataI.img}
                            alt={dataI.img}
                            className='w-6 h-6'
                        />

                        <p className=''>{dataI.name}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FooterCard
