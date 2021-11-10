import React from "react";
import Card from "../../UI/Card";

import CommentItem from "./CommentItem";
import styles from './CommentList.module.css';

const CommentList = (props) =>{
    
    const {comments} = props;
    
    let newComment=[];
    for(const [key, value] of Object.entries(comments)){
        newComment.push({
            id: key,
            content: value.content,
            user: value.user,
            replies: value.replies

        })
    }
    


    return(
        <Card className={styles['comment-list-card']}>
            <h2>{newComment ? props.comments.length: 0} Comments</h2>
            <ul>
                {newComment.map(comment=>{
                    return(
                        <CommentItem onReply={props.onReply} key={comment.id} data={comment}/>
                    );
                })}
            </ul>
        </Card>
    );
}

export default CommentList;