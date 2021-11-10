import React from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

import ActionButton from "../UI/ActionButton";
import Card from "../UI/Card";
import Tag from "../UI/Tag";
import styles from './ProductItem.module.css';
import { slideUp } from "../Animation/Animation";

const ProductItem = (props)=>{

    const {product} = props;

    const commentLink = `/home/comment/${product.id}`;
    return(
        <li 
            className={`${styles['product-item']}`}
            
            >
            <Card className={styles.card}>
                <div className={styles['description']}>
                    <div>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <Tag>{product.category}</Tag>
                    </div>
                    <ActionButton type='vote'>{product.upvotes}</ActionButton>
                   
                </div>
                
                <div className={styles.action}>
                    <ActionButton 
                        type='comment'
                        link={commentLink} >
                            {product.commentLength}
                    </ActionButton>    
                </div>
            </Card>
        </li>
        
    );
}

export default ProductItem;