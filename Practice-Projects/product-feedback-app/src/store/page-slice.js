import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
    name: 'page',
    initialState:{
        currPage: '',
        prevPage: ''
    },
    reducers: {
        pageLoad(state, action){
            state.prevPage = state.currPage;
            state.currPage = action.payload.currPage;
        }
    }
})

export const pageActions = pageSlice.actions;

export default pageSlice;