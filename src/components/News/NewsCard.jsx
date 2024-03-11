const NewsCard = ({imgI, title}) => {
  return (
    <main className="w-[366px] h-[300px]">
        <img 
            src={imgI} 
            alt={imgI} 
            className="w-full h-[230px]"
        />
        
        <p className="">{title}</p>
    </main>
  )
}

export default NewsCard
