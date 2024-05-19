import React, { useEffect, useState } from 'react';
import ShimmerUI from '../../utils/shimmerUI';
import './RestaurantMenu.css'
import { FOOD_IMG_URL, RESTAURANT_URL } from '../../utils/constant';
import { useParams } from 'react-router-dom';
import AddToCartCounter from '../../utils/AddToCartCounter';
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import restData from '../../utils/mockData';
import RestaurantMenuCard from './RestaurantMenuCard';

const RestaurantMenu = () => {

    // const [menuDetails, setMenuDetails] = useState([])
    const [foodItem, setFoodItem]=('');
    const [foodItemCount, setFoodItemCount] = ([]);
    const { resId } = useParams();
    let menuDetails = useRestaurantMenu(resId);
    const [menuCardIndex, setMenuCardIndex] = useState(0)



    // useEffect(()=>{
    //     fetchMenu();
    // },[])

    // const fetchMenu = async ()=> {
    //     // const menuProm = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId='+resId+'&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER');
    //     const menuProm = await fetch(RESTAURANT_URL+resId);

    //     const menuData = await menuProm.json();
    //     setMenuDetails(menuData?.data?.cards[2]?.card?.card?.info)
    //     setMenuDetails(menuData?.data)
    // }

    
    if(menuDetails.length === 0) return <ShimmerUI />
    const { name, cuisines, costForTwo, locality, city, avgRating, sla } = menuDetails?.cards?.[2]?.card?.card?.info;
    let {REGULAR} = menuDetails?.cards[4]?.groupedCard?.cardGroupMap;

    // REGULAR = REGULAR?.cards.slice(1,6)
    
    REGULAR = REGULAR.cards.filter((item)=>{
        return item?.card?.card?.['@type'].includes('ItemCategory')
    })

    return(
        <div className=' text-center menu-page'>
            <h1 className='font-bold my-6 text-2xl restaurant-name'>{name}</h1>
            <h3>{cuisines.join(",")}- cost for two is {costForTwo/100}</h3>
            <h5>{locality}- {city}</h5>
            <h6>Rating- {avgRating}</h6>
            <h6>Delivery Time- {sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</h6>
            {
                REGULAR.map((item,index) => <RestaurantMenuCard key={index+item.card.card.title} data={item.card.card} showMenuCard={ index == menuCardIndex} menuCardIndex={menuCardIndex} setMenuCardIndex={()=>setMenuCardIndex(index)}/>)
            }
            {/* {REGULAR.map((item, index)=>{
                return (
                    <div key={index+item.card.card.title}>
                <h3 className='font-medium underline bg-gray-100' >{item.card.card.title}</h3>
                {item?.card?.card?.itemCards?.map((resMenu)=>{
                    return(
                    <ul className='food-menu-card' key={resMenu.card.info.id} onClick={handleMenuItems}>
                        <li>{resMenu.card.info.name}
                        <div>
                       
                       

                        <img className='food-img' src={FOOD_IMG_URL + resMenu.card.info.imageId} alt='food-img' />
                        <p>price- {(resMenu.card.info.price)/100}</p>
                        <p>Rating- {resMenu.card.info.ratings.aggregatedRating.rating || 0}</p>
                        <p>{resMenu.card.info.ratings.aggregatedRating.ratingCountV2 ? `Rated by-  ${resMenu.card.info.ratings.aggregatedRating.ratingCountV2} people` : ''}</p>
                        <AddToCartCounter />
                        </div>
                        </li>
                    </ul>
                   )
                })}
                </div>
                )
            })} */}
        </div>
    )
}

export default RestaurantMenu;