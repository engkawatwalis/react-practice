import React from "react";

import Button from '../../UI/Button';
import GoBackButton from "../../UI/GoBackButton";
import styles from './CommentHeader.module.css';

const CommentHeader = (props)=>{
    
    return(
        <div className={styles['comment-header']}>
            <GoBackButton />
            <Button 
                onClick={props.onEdit}
                type='button' 
                color='blue' >Edit Feedback</Button>
        </div>
    );
}

export default CommentHeader;