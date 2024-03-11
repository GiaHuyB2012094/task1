const Categories = ({imgI, text}) => {
  return (
    <div className="flex gap-5 items-center font-bold uppercase text-primary-green">
      <img 
        src={imgI} 
        alt={imgI}
        className="w-20"
    />

      <p className="text-lg xl:text-base text-nowrap">{text}</p>
    </div>
  )
}

export default Categories
