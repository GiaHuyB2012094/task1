
const NewActionCard = ({imgI, title}) => {
  return (
    <div className="w-[365px] flex-shrink-0 h-80 flex flex-col gap-3 justify-start text-start">
        <img 
            src={imgI}
            alt={imgI}
            className="w-full h-72"
        />

        <p className=" text-primary-blue text-sm line-clamp-2">
          {title}
        </p>
    
    </div>
  )
}

export default NewActionCard
