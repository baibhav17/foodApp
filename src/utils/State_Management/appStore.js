import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import resInfoReducer from './resInfoSlice';
import itemCountReducer from './itemCountSlice';

const appStore = configureStore({
    reducer:{
        cartData: cartReducer,
        resInfo: resInfoReducer,
        itemCount: itemCountReducer,
    }
});

export default appStore;