import { useRef, useState, useEffect } from "react"
import RestaurantMenuList from "./RestaurantMenuList"

const RestaurantMenuCard = ({data, showMenuCard, menuCardIndex, setMenuCardIndex}) => {
    // const [showMenuList, setShowMenuList] = useState(showMenuCard)
    // const menuRef = useRef(null);

    // useEffect(() => {
    //     if (showMenuCard && menuRef.current) {
    //         menuRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    //     }
    // }, [showMenuCard]);

    const handleClick = (e) => {
        setMenuCardIndex();
        // setShowMenuList(!showMenuList)
    }
   

    return(
        <div >
             <div className=" bg-gray-100 w-6/12 mx-auto my-2 shadow-lg" >
            {data?.itemCards && <div className="flex justify-between cursor-pointer menu-accordion" onClick={handleClick}>
                <span className=" font-medium text-md">{data.title} ({data?.itemCards?.length})</span>
                <span>⬇️</span>
            </div>}
            {showMenuCard && <RestaurantMenuList listItems={data.itemCards}/>}
        </div>
        </div>
       
    )
}

export default RestaurantMenuCard