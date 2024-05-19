import React, { Component, useContext, useState } from 'react';
import foodLogo from '../../utils/foodLogo.jpg';
import './Header.css'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import userContext from '../../utils/userContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [loginBtnText, setLoginBtnText] = useState('Login')
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(userContext);

    // cart items length is SUBSCRIBED to Redux Store slice of cart.
    const cartItems = useSelector((store)=> store.cartData.items)
    return(
        <div className='flex justify-between z-50 sticky top-0 bg-gradient-to-br from-gray-600 to-red-500 sm:from-gray-400 sm:to-yellow-300 lg:from-gray-400 lg:to-blue-300 header-container'>
            <div className='logo-container'>
                <img className=' w-[150px] h-[100px] logo-img' src={foodLogo} alt='food-logo'/>
            </div>
            <div className='nav-items-container'>
                <ul className='flex mr-6'>
                    <li className=' m-[10px] p-[10px] list-none text-lg font-mono bg-white hover:bg-orange-50 hover:underline'>Online Status: {onlineStatus ? '✅' : '🔴'}</li>
                    <li className=' m-[10px] p-[10px] list-none text-lg font-mono bg-white hover:bg-orange-50 hover:underline'><Link to='/'>Home</Link></li>
                    <li className=' m-[10px] p-[10px] list-none text-lg font-mono bg-white hover:bg-orange-50 hover:underline'><Link to='/about'>About us</Link></li>
                    <li className=' m-[10px] p-[10px] list-none text-lg font-mono bg-white hover:bg-orange-50 hover:underline'><Link to='/contact'>Contact</Link></li>
                    <li className=' m-[10px] p-[10px] list-none text-lg font-mono bg-white hover:bg-orange-50 hover:underline'><Link to='/grocery'>Grocery</Link></li>
                    <li className=' m-[10px] p-[10px] list-none text-lg font-mono bg-white hover:bg-orange-50 hover:underline'>
                        <Link to='/cart'>Cart- {cartItems.length} items</Link>
                    </li>
                    <button className=' m-[10px] p-[10px] list-none text-lg font-mono bg-white hover:bg-orange-50 hover:underline'
                    onClick={()=>{
                        if(loginBtnText === 'Login') {
                            setLoginBtnText('Logout')
                        } else {
                            setLoginBtnText('Login')
                        }
                    }}
                    >{loginBtnText}
                    </button>
                    {loginBtnText === 'Logout' && 
                    <li
                        className=' m-[10px] p-[10px] list-none text-lg font-mono bg-white hover:bg-orange-50'
                    >
                        {loggedInUser}
                    </li>}
                </ul>
            </div>
        </div>
    )
}

export default Header;