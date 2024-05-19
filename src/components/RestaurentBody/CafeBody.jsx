import React, { Component, useContext, useEffect, useState } from 'react';
import './CafeBody.css'
import restData from '../../utils/mockData';
import { CDN_URL } from '../../utils/constant';
import ShimmerUI from '../../utils/shimmerUI';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import OfflinePage from '../../utils/OfflinePage';
import CafeCard, { TopRatedCafeCard } from '../CafeCard/CafeCard';
import userContext from '../../utils/userContext';

export const CafeBody = () => {
    const [filterRestList, setFilterRestList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [ filterRestaurantList, setFilterRestaurantList ] = useState([]);
    const {loggedInUser, setUserName} = useContext(userContext);


    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        // const data = await fetch(`https://api.allorigins.win/get?' + url=${encodeURIComponent('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')}`);
        if (!data) {
            throw new Error('No response from server');
        }
        const jsonData = await data.json();
        console.log('response',jsonData)
        setFilterRestList(jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurantList(jsonData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }



    const onlineStatus = useOnlineStatus ();
    const TopRatedCard = TopRatedCafeCard(CafeCard)
    if(!filterRestList) return null;

    return filterRestList.length === 0 ? <ShimmerUI /> : (
        <>
        <div className='search-bar'>
            <input data-testid = 'search-input' type='text' className=' border border-blue-300 search-box' value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>

            <button value='Search' className='search-btn' onClick={()=>{
                const filteredRestaurant = filterRestList.filter((resName)=> resName.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilterRestaurantList(filteredRestaurant)
            }}>Search</button>


            <button value='filter-btn' className='filter-btn' onClick={()=>{
                const filterList = filterRestList.filter((res)=>res.info.avgRating >= 4);
                setFilterRestaurantList(filterList)
            }}>See Top Rated Restaurants</button>

            <label>{`change user name (learning activity to change context live)->:`}</label>
            <input type='text' className=' border border-black' value={loggedInUser || ''} onChange={(e)=> {
                setUserName(e.target.value);

                }} />
           
        </div>
        <div className='cafe-container'>
            {console.log(filterRestaurantList) || filterRestaurantList && (!onlineStatus ? <OfflinePage /> : filterRestaurantList.map((restaurant, index) => 
            <Link key={index + restaurant?.info?.id} to={'restaurant/'+restaurant?.info?.id}>
                {
                    restaurant?.info?.avgRating >= 4.4 ?
                    <TopRatedCard cafeData={restaurant}/> :
                    <CafeCard cafeData={restaurant} />
                }
            </Link>))}
        </div>
        </>
    )
}

export default CafeBody