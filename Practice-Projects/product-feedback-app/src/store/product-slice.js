import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState:{
        products: [],
        sort: null,
        filterProducts: [],
        filter: 'All'
    },
    reducers:{
        loadProduct(state, action){
            state.products = action.payload;   
        },
        clearProduct(state, action){
            state.products = [];   
        },
        sortProducts(state,action){

            state.sort = action.payload.sortMethod;
            const sortedProduct = state.filterProducts.sort(
                (a , b) =>{
                    if (action.payload.sortMethod === 'Most Upvoted'){
                        return b.upvotes - a.upvotes
                    }
                    if (action.payload.sortMethod === 'Least Upvoted'){
                        return a.upvotes - b.upvotes
                    }
                    if (action.payload.sortMethod === 'Most Comments'){
                        return b.commentLength - a.commentLength;
                    }
                    if (action.payload.sortMethod === 'Least Comments'){
                        return a.commentLength - b.commentLength;
                    }      
                }
            );
            state.filterProducts = sortedProduct;  
        },
        filterProducts(state,action){

            state.filter = action.payload.filter;
            if (action.payload.filter === 'All' || state.filter === 'All') {
                state.filterProducts = state.products
            } else{
                state.filterProducts = state.products
                                        .filter(product => product.category === action.payload.filter );
            }
        }
    }
})

export const ProductActions = productSlice.actions;

export default productSlice;