import React, { useState } from "react";

import Btn from '../UI/Btn';
import styles from './ItemOrderAction.module.css';

const ItemOrderAction = (props) =>{

    let amount = 0;
    const onClickHandler = (event) => {
        amount = event.target.id === '+' ? 1 : -1;
        props.onSubmit(amount);
        amount = 0;
    }
    return(
        <div className={styles.itemAction} > 
                <Btn type='text' id='-' onClick={onClickHandler}>
                    -
                </Btn>
                <Btn type='text' id='+' onClick={onClickHandler}>
                    +
                </Btn>
            
        </div>
    );
}
export default ItemOrderAction;