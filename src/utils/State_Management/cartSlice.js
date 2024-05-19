import { createSlice, current } from "@reduxjs/toolkit";


const cartSliceObj = {
    name: 'cartData',
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action)=> {
            state.items.push(action.payload);
        },
        removeItem: (state, action)=> {
            // state.items.pop()
            const indexToRemove = action.payload;
            if (indexToRemove !== -1) {
                state.items.splice(indexToRemove, 1);
            }
            // state.items = state.items.filter(item => item.card.info.id !== indexToRemove);
        },
        clearCart: (state)=> {
            state.items.length = 0;
        }
    }
}

const cartSlice = createSlice(cartSliceObj);

export const {addItems, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;