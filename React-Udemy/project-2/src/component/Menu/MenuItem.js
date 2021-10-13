import React from "react";

import ItemInfo from './ItemInfo';
import ItemMenuAction from "./ItemMenuAction";
import styles from './MenuItem.module.css';

const MenuItem = (props) =>{

    

    const onSubmitHandler = (submitAmount) =>{
        const submitItem = {
            title: props.title,
            id: props.id,
            price: props.price,
            amount: +submitAmount }
        props.onItemSubmit(submitItem);
    }

    return(
        <li className={styles.menuItem} > 
            <ItemInfo
                className = {styles.itemInfo}
                title = {props.title}
                description = {props.description}
                price = {props.price}
                id={props.id} />
            <ItemMenuAction onSubmit={onSubmitHandler}/>
        </li>
    );
}
export default MenuItem;