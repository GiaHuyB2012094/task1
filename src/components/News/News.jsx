import TextTitle from "../Shared/TextTitle"

const News = ({title, imgI, name, desc}) => {
  return (
    <div className="w-full flex flex-col items-start justify-start text-start">
        <div>
          <TextTitle title={title}/>
        </div>

        <div className="border-t border-solid pt-3">
          <div className="w-full z-0 h-30 flex flex-col gap-3 p-3 bg-[#f1f3f2] justify-start text-start cursor-pointer overflow-hidden">
              <div className="w-full h-30 overflow-hidden ">
                <img 
                    src={imgI}
                    alt={imgI}
                    className="w-full h-full hover:scale-125 hover:-z-10 transition ease-linear delay-150 duration-500"
                />
              </div>
      
              <p className="uppercase text-primary-blue text-xl line-clamp-1">{name}</p>
      
              <p className="line-clamp-3">{desc}</p>
          </div>
        </div>
    </div>
  )
}

export default News
