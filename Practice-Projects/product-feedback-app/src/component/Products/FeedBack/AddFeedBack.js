import React from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {motion} from 'framer-motion'

import { PostData } from "../../../store/Actions/ProductFetchAction";
import styles from './AddFeedBack.module.css';
import FeedBackHeader from "./FeedBackHeader";
import FeedBackForm from "./FeedBackForm";
import { slideRight } from "../../Animation/Animation";


export default function AddFeedBack(props) {
    
    const history=useHistory();
    const dispatch = useDispatch();
    const submitHandler = async (values) =>{
        const res = await dispatch(PostData(values));
        history.goBack();
    }
    return (
        <motion.div className={styles['feedback']} variants={slideRight} initial='hidden' animate='show' exit='exit'>
            <FeedBackHeader />
            <FeedBackForm 
                type='new'
                onSubmit={submitHandler}/>
        </motion.div>
    )
}
