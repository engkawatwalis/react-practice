import React, { useState } from "react";

import Btn from '../UI/Btn';
import styles from './ItemMenuAction.module.css';

const ItemMenuAction = (props) =>{

    const [amount, setAmount] = useState('')

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // todo: lift state up to update cart
        props.onSubmit(amount, props.id)
        setAmount('')
    }

    const onChangeHandler = (event) => {
        setAmount(event.target.value);
    }
    return(
        <div className={styles.itemAction} > 
            <form className={styles.amountForm} onSubmit={onSubmitHandler}>
                <label htmlFor="amount">Amount</label>
                <input type="text" name="amount" id="amount" onChange={onChangeHandler} value={amount} />
                <Btn type='submit'>
                    <span>+ Add</span>
                </Btn>
            </form>
            
        </div>
    );
}
export default ItemMenuAction;