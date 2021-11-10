import React from "react";

import styles from './Avatar.module.css'

const Avatar = (props) =>{
    return(
        <img src={props.src} className={`${styles.avatar} ${props.className}`}>
            {props.children}
        </img>
    );
}

export default Avatar;