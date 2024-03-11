const FooterLibrary = ({title, data}) => {
  return (
    <div className='text-white text-start py-2 md:w-[40%]'>
        <p className='text-lg'>{title}</p>

        <div className='flex items-center justify-between gap-2 md:gap-3 py-1'>
            {data.map((dataI, idx) => (
                <img
                    key={idx}
                    src={dataI.img}
                    alt={dataI.img}
                    className='w-16 h-16 md:w-24 md:h-16'
                />
            ))}
        </div>
    </div>
  )
}

export default FooterLibrary
