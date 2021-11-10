import React from "react";

import styles from './Button.module.css'

const Button = (props) =>{
    const {color} = props;
    return(
        <button 
            type={props.type}
            onSubmit={props.onSubmit}
            onClick={props.onClick} 
            className={`${styles.button} ${styles[color]}`}>
            {props.children}
        </button>
    );
}

export default Button;