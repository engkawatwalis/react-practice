import React, { useState } from "react";

import styles from './UserInput.module.css';

const UserInput = props =>{

    const inputChangeHandler = e =>{
        props.onRecieveUserInput(e.target);
    }
    return(
        <div className={`${props.id}Input ${styles.input}`}>
                <label>{`${props.label}: `}</label>
                <input className={props.id} id={props.id} type="text" onChange={inputChangeHandler} value={props.value} />
        </div>
    );
}

export default UserInput;