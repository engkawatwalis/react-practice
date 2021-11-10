import React, {useEffect, useState} from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import TextBox from "../../UI/TextBox";
import styles from './AddComment.module.css';
import { PostComment } from "../../../store/Actions/ProductFetchAction";


const AddComment = (props) => {

    const history = useHistory();
    const user = useSelector(state=> state.user);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:{
            comment: ''
        },
        onSubmit: async values => {
            const res = await dispatch(PostComment({
                commentParent: props.reply.commentID,
                comment: values.comment[0] === '@' ? values.comment.substr(values.comment.indexOf(' ')+1) : values.comment,
                replyTo: values.comment.substr(0, values.comment.indexOf(' ')),
                user: user
            }, props.id))
            formik.resetForm();
            history.go(0);
        },
    })
    return(
        <Card className={styles['add-comment-card']}>
            <h3>Add Comment</h3>
            <form onSubmit={formik.handleSubmit}>
                <TextBox 
                    placeholder="Type your comment here"
                    rows="5" 
                    cols="1000"
                    maxlength="250"
                    name='comment'
                    id='comment'
                    onChange={formik.handleChange}
                    value={formik.values.comment || props.reply.username && `@${props.reply.username} `}
                    />
                <Button type='submit' color='purple'>Post Comment</Button>    
            </form>
        </Card>
    );
}
export default AddComment