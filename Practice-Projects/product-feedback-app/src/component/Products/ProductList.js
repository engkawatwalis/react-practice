import React from "react";
import ProductItem from "./ProductItem";


import styles from './ProductList.module.css';
import { staggerContainer } from "../Animation/Animation";

const ProductList = (props)=>{

    return(
        <ul 
            className={styles['product-list']}
            variants={staggerContainer}
            initial='hidden'
            animate='show'
            exit='exit'
            >
            {props.products.map(product => {
                    return <ProductItem key={product.id} product={product} />
                })
            }
        </ul>
        
    );
}

export default ProductList;