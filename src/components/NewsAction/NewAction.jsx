import TextTitle from "../Shared/TextTitle"
import NewActionCard from "./NewActionCard"

const NewAction = ({title, dataNew}) => {
  return (
        <div className="w-full flex flex-col items-start">
            <div className="border-b border-gray-300">
                <TextTitle title={title}/>
            </div>
            <div className="w-full flex gap-5 overflow-hidden border-t border-solid py-3">
                {dataNew.map((newItem, idx) => (
                    <NewActionCard  
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

export default NewAction
