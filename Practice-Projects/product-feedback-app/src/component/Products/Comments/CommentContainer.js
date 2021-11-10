import React, {useState, useEffect} from "react";
import Button from "../../UI/Button";

import Avatar from '../../UI/Avatar';
import styles from './CommentContainer.module.css';
import axios from "axios";


const CommentContainer = (props) =>{

    const {image, username, name} = props.user; 
    const onClickHandler = ()=>{
        props.onReply(username);
    }

    return(
        <div className={styles['comment-container']}>
            <div className={styles['user-info']}>
                <Avatar src={image} alt={name} />
                <div className={styles['user-name']}>
                    <h4>{name}</h4>
                    <p>@{username}</p>
                </div>
                <Button onClick={onClickHandler} color='neutral'>Reply</Button>
            </div>
            <div className={styles['comment-body']}>
                <p>
                    {props.replyingTo && <span>@{props.replyingTo} </span>} 
                    {props.content}
                </p>
            </div>
        </div>
            
        
    );
}

export default CommentContainer;