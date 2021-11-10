import React, {useState, useEffect} from "react"
import { useParams, useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {motion, AnimatePresence} from 'framer-motion';

import { modalAnimation, slideLeft } from "../../Animation/Animation";
import { pageActions } from "../../../store/page-slice";
import { ProductActions } from "../../../store/product-slice";
import { DeleteData, fetchExistingData, PutData } from "../../../store/Actions/ProductFetchAction";
import styles from './EditFeedBack.module.css';
import FeedBackHeader from "./FeedBackHeader";
import FeedBackForm from "./FeedBackForm";
import Modal from "../../UI/Modal";
import Card from "../../UI/Card";
import Button from "../../UI/Button";



export default function EditFeedack(props) {
    
    const location=useLocation();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchExistingData(`productRequests/${params.id}`, 'edit'));
        dispatch(pageActions.pageLoad({currPage: location.pathname}));
        return () => {
            dispatch(ProductActions.clearProduct());
        }
    },[dispatch])

    const product = useSelector(state => state.product.products);
    
    useEffect(() => {
        if(!!product) setIsLoading(false)
    }, [product])
    
    const submitHandler = async (values) =>{
        const res = await dispatch(PutData({...values, id: params.id, comments:product.comments}));
        history.goBack();
    }

    const confirmDeleteHandler = async () =>{
        const res = await dispatch(DeleteData({id: params.id}));
        history.push('/home');
    }

    const deleteHandler = ()=>{
        setIsModalOpen(true);
    }

    const cancelDeleteHandler = ()=>{
        setIsModalOpen(false);
    }
    
    return (
        <motion.div className={styles['feedback']} variants={slideLeft} initial='hidden' animate='show' exit='exit'>
            <FeedBackHeader />
            {!isLoading && product.title && 
                <FeedBackForm 
                    onDelete={deleteHandler}
                    onSubmit={submitHandler}
                    product={product}
                    type='edit' />}
            <AnimatePresence>
                {isModalOpen &&
                    <Modal animation={modalAnimation} className={styles.modal}>
                        <Card className={styles['message-container']}>
                            <h2>Are you sure you want to delete this feedback?</h2>
                            <p>This action cannot be reverted</p>
                            <div>
                            <Button onClick={confirmDeleteHandler} color='red'>Confirm</Button>
                            <Button onClick={cancelDeleteHandler}color='neutral'>Cancel</Button> 
                            </div> 
                        </Card>
                    </Modal>
                }
            </AnimatePresence>
            
        </motion.div>
    )
}
