import React, { Component } from 'react';
import useAddToCardCounter from './useAddToCardCounter';

const AddToCartCounter = () => {
    const [count, increment, decrement] = useAddToCardCounter();
    return (
        <div className='menu-counter'>
            <button className='menu-counter' onClick={decrement}>-</button>
            <span className='menu-counter'>{count}</span>
            <button className='menu-counter' onClick={increment}>+</button>
            {/* <span>totl- {cartValue}</span> */}
        </div>
    )
}

export default AddToCartCounter