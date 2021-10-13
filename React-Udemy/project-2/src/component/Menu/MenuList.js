import React from "react";

import MenuItem from "./MenuItem";
import OrderItem from "../Cart/OrderItem";
import styles from './MenuList.module.css';

const MenuList = (props)=>{

    return(
        <ul className={styles.menuList}>
            {props.listType === 'menu' && 
                    props.displayItems.map((item) => {
                        return (
                        <MenuItem
                        key={item.id}
                        title = {item.title}
                        description = {item.description}
                        price = {item.price}
                        amount = {item.amount}
                        id={item.id} 
                        onItemSubmit={props.onSubmitItems}
                        />);
                    })
            }
            {props.listType === 'orders' &&
                    props.displayItems.map((item) => {
                        return (
                        <OrderItem
                        key={item.id}
                        title = {item.title}
                        description = {item.description}
                        price = {item.price}
                        amount = {item.amount}
                        id={item.id} 
                        onItemSubmit={props.onSubmitItems}
                        />);
                    })
            }
        
        </ul>
        
    );
}
export default MenuList;