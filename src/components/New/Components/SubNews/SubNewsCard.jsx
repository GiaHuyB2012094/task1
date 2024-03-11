const SubNewsCard = ({imgI, title}) => {
  return (
    <div className="w-[268px] flex-shrink-0 h-56 flex flex-col justify-start gap-3 text-start cursor-pointer">
        <img 
            src={imgI}
            alt={imgI}
            className="w-full h-48"
        />

        <p className=" text-primary-blue text-sm line-clamp-2 cursor-pointer">{title}</p>
    
    </div>
  )
}

export default SubNewsCard
