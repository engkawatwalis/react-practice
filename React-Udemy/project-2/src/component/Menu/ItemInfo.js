import React from "react";

import styles from './ItemInfo.module.css';

const ItemInfo = (props) =>{
    return(
        <div className={styles.itemInfo} > 
            <h3>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
            <p className={`${styles.price} price`}>{props.price}
                { props.parent === 'OrderItem' && <span className={styles.amount}>x{props.amount}</span>}
            </p>
            
        </div>
    );
}
export default ItemInfo;