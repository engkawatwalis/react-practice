import React from "react";

import Card from "../UI/Card";
import Modal from "../UI/Modal";
import MenuList from "../Menu/MenuList";
import styles from './Cart.module.css';

const Cart = (props) => {
    return(
        <Modal className={styles.cart} onClose={props.onCloseCart}>
           {props.orders.length > 0 ? 
           <MenuList listType='orders' displayItems={props.orders} needAction={false} onSubmitItems={props.onSubmitItems}/>
           : <h1>No items in your cart yet</h1> }
        </Modal>
    );
}
export default Cart;