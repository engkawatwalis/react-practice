import { configureStore, createSlice } from '@reduxjs/toolkit';

import userSlice from './user-slice';
import productSlice from './product-slice';
import pageSlice from './page-slice';

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        product: productSlice.reducer,
        page: pageSlice.reducer
    },
});

export default store;