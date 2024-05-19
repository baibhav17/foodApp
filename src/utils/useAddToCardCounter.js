import React, { useContext, useState } from 'react';
import { dataContext } from '../App';

const useAddToCardCounter = () => {
   const [count, setCount] = useState(0);
//    const [cartValue, setCartValue] = useState(0)
   const {cartCountVal, setCartCountVal } =useContext(dataContext);
    
    const increment = () => {
        setCount(count+1);
        setCartCountVal(cartCountVal + 1)
        console.log(cartCountVal)
        // setCartValue(cartValue+1)
    }

    const decrement = () => {
        count > 0 && setCount(count-1);
    }

    return [ count, increment, decrement]
}

export default useAddToCardCounter