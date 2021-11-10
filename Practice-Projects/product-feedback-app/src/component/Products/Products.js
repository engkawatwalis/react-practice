import React, {useState, useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import ProductList from "./ProductList";

import { ProductActions } from "../../store/product-slice";
import { fetchExistingData } from "../../store/Actions/ProductFetchAction";
import styles from './Products.module.css';
import ProductsHeader from "./ProductsHeader";
import { useLocation } from "react-router";

const Products = ()=>{

    const {search} = useLocation();
    const queryParams = new URLSearchParams(search);
    const category = queryParams.get('category');
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch();
    useEffect(async()=>{
        const res = await dispatch(fetchExistingData('productRequests'));
        dispatch(ProductActions.filterProducts({filter: category ? category : 'All'}));
    },[dispatch])

    
    const loadedData = useSelector(state => state.product.filterProducts);
    
    useEffect(() => {
        
        if(loadedData) setIsLoading(false)

        return () => {
            setIsLoading(true);
            
        }
    }, [loadedData])

    return(
        <div className={styles['products']}>
            <ProductsHeader />
            {!isLoading &&
                <ProductList 
                products={loadedData} />}
        </div>
        
    );
}

export default Products;