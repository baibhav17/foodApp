import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constant";
import { useDispatch } from "react-redux";
import { getResInfo } from "./State_Management/resInfoSlice";


const useRestaurantMenu = (restId) => {

    const [restarantMenuInfo, setRestarantMenuInfo] = useState([])

    // const dispatch = useDispatch();

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {

        const data = await fetch(RESTAURANT_URL + restId);
        const jsonData = await data.json();
        setRestarantMenuInfo(jsonData.data)
    }

    return restarantMenuInfo;

}
export default useRestaurantMenu;