import React, {useState} from "react";

import Btn from '../UI/Btn'
import styles from './CartBtn.module.css'

const CartBtn = (props) => {

    const [itemNum, setItemNum] = useState(0)

    return(
        <Btn 
        type="text"
        className={styles.CartBtn}
        onClick={props.onClick}>
            <span>
            🛒  Your Cart
            </span>
            <div className={styles.itemNum}>
               {props.totalOrder}
            </div> 
        </Btn>
    );
}

export default CartBtn;