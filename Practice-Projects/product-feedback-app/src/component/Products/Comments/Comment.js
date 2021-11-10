import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {motion} from 'framer-motion';

import { fetchExistingData } from "../../../store/Actions/ProductFetchAction";
import styles from './Comment.module.css'
import CommentHeader from "./CommentHeader";
import ProductItem from "../ProductItem";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { ProductActions } from "../../../store/product-slice";
import { pageActions } from "../../../store/page-slice";
import { slideLeft, slideRight } from "../../Animation/Animation";

const Comment = () =>{

    const [isLoading, setIsLoading] = useState(true);
    const [replyWho, setReplyWho] = useState({
        username: '',
        commentID: ''
    });
    const history = useHistory();
    const params = useParams();
    const location = useLocation();
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchExistingData(`productRequests/${params.id}`, 'comment'));
        dispatch(pageActions.pageLoad({currPage: location.pathname}));
        return () => {
            dispatch(ProductActions.clearProduct());
        }
    },[dispatch])

    const product = useSelector(state => state.product.products);
        
    useEffect(() => {
        if(product) setIsLoading(false)
    }, [product])

    const onEditHandler = ()=>{
        history.push(`/home/comment/${params.id}/edit`)
    }
    const onReply = (username, commentID)=>{
        setReplyWho({username: username, commentID: commentID});
    }

    const prevPage = useSelector(state => state.page.currPage);
    const pageAnimation = prevPage === '/home' ? slideLeft : slideRight;
    
    return(
        <motion.div className={styles.comment} variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <CommentHeader onEdit={onEditHandler}/>
            {!isLoading && <ProductItem product={product} />}
            {!isLoading && product.comments && <CommentList onReply={onReply} comments={product.comments} />}
            <AddComment reply={replyWho} id={params.id}/>
        </motion.div>
        
        
    );
}

export default Comment;