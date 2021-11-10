import React from "react";
import { Link } from "react-router-dom";

import iconComment from '../../Assets/icon-comment.svg';
import iconArrow from '../../Assets/icon-arrow.svg';
import styles from './ActionButton.module.css'



const ActionButton = (props) =>{
    
    return(
            
        <Link to={props.link ? props.link : ''} className={`${styles['action-button']} ${styles[props.type]}`}>
            {props.type === 'vote' && <img src={iconArrow} />}
            {props.type === 'comment' && <img src={iconComment} />}
            {props.children}
        </Link>
    );
}

export default ActionButton;