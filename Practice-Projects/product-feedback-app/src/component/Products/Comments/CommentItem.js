import React from "react";

import styles from './CommentItem.module.css';
import CommentContainer from "./CommentContainer";

const CommentItem = (props) =>{
    
    
    const {user, content, replies, id} = props.data;
    
    const replyHandler = (username) =>{
        props.onReply(username, id);
    }

    let newReplies=[];
    if(!!replies){
        
        for(const [key, value] of Object.entries(replies)){
            newReplies.push({
                id: key,
                content: value.content,
                user: value.user,
                replyingTo: value.replyingTo
        })
    }}
    
    return(
        <li className={styles['comment-item']}>
            <CommentContainer onReply={replyHandler} user={user} content={content}/>
            {!!replies && 
                <ul>
                    {newReplies.map(reply => {
                        return(
                            <CommentContainer key={reply.id} onReply={replyHandler} user={reply.user} content={reply.content} replyingTo={reply.replyingTo}/>
                        );
                    })}
                </ul>}
        </li>
    );
}

export default CommentItem;