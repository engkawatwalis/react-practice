import React from "react";

import Card from "./Card";
import styles from './TextBox.module.css';

const TextBox = (props) => {

    return(
    
        <textarea 
                className={styles['textbox']} 
                name={props.name} 
                id={props.id} 
                cols={props.cols} 
                rows={props.rows}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                value={props.value}
                onChange={props.onChange}>
            {props.children}
        </textarea>
        
    );
}
export default TextBox