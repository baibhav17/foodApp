import { createSlice } from "@reduxjs/toolkit";

const resInfoSlice = createSlice({
    name: 'resInfo',
    initialState: {
        resInfoItem:[]
    },
    reducers: {
        getResInfo: (state,actions)=>{
            state.resInfoItem.push(actions.payload);
        },
        clearResInfo: (state) => {
            state.resInfoItem.length = 0;
        }
    }
})

export const {getResInfo, clearResInfo} = resInfoSlice.actions;
export default resInfoSlice.reducer