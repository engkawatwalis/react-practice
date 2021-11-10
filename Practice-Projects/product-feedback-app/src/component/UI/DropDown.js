import React, {useState, useEffect } from "react";

import iconTick from '../../Assets/icon-tick.svg'
import Card from "./Card";
import styles from './DropDown.module.css';

const DropDown = (props) =>{

    const {options} = props;
    const onClickHandler = (e) =>{
        props.onSubmit(e.target.id);
    }
    return(
        <Card className={`${styles['drop-down']} ${props.className}`}>
            <ul>
                {options.map((option, i) => {
                    return(
                        <li key={i}>
                            <a id={option} onClick={onClickHandler}>
                                {option}
                                {props.selectedOption === option && <img src={iconTick} />}
                            </a>
                        </li>
                    );
                })}
            </ul>
            
        </Card>
    );
}

export default DropDown;