import React from "react";

import ItemInfo from "../Menu/ItemInfo";
import ItemOrderAction from "./ItemOrderAction";
import styles from './OrderItem.module.css';

const OrderItem = (props) => {

    const onSubmitHandler = (submitAmount) =>{
        console.log(submitAmount)
        const submitItem = {
            title: props.title,
            id: props.id,
            price: props.price,
            amount: +submitAmount }
        props.onItemSubmit(submitItem);
    }
    return(
        <li className={styles.orderItem} > 
            <ItemInfo
                className = {styles.itemInfo}
                title = {props.title}
                description = {props.description}
                price = {props.price}
                id={props.id}
                amount={props.amount}
                parent='OrderItem' />
            <ItemOrderAction onSubmit={onSubmitHandler}/>
        </li>
    );
}
export default OrderItem;