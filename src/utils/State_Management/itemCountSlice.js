import { createSlice } from "@reduxjs/toolkit";

const itemCountSlice = createSlice({
    name: 'itemCount',
    initialState: {},
    reducers: {
        increaseCount: (state, actions) => {
            const { itemId } = actions.payload
            state[itemId] = (state[itemId] || 0) + 1;
        },
        decrementCount: (state, action) => {
            const { itemId } = action.payload;
            if (state[itemId] > 0) {
              state[itemId] -= 1;
            }
          },
        clearItemCount : () => {
            return {state:{}} 
        }
    }
})

export const {increaseCount, decrementCount, clearItemCount} = itemCountSlice.actions;
export default itemCountSlice.reducer;