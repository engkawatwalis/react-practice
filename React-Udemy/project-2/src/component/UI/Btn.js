import React from "react";

import styles from './Btn.module.css';

const Btn = (props)=>{

    return(
        <button type={props.type} id={props.id} className={`${styles.btn} ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
        
    );
}

export default Btn;