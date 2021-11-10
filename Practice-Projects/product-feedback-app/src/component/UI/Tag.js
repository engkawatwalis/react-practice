import React from "react";
import { Link } from "react-router-dom";

import iconComment from '../../Assets/icon-comment.svg';
import iconArrow from '../../Assets/icon-arrow.svg';
import styles from './Tag.module.css'



const Tag = (props) =>{
    
    
    const clickHandler = ()=>{
        if (!props.onClick) {return}
        props.onClick(props.children)
    }
    return(
            
        <button
            onClick={clickHandler}
            className={`${styles.tag} ${props.active && styles.active}`}>
            {props.children}
        </button>
    );
}

export default Tag;