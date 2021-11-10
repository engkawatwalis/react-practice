import React, {useEffect} from "react"
import Header from "./Header/Header"
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {motion} from 'framer-motion'

import styles from './Home.module.css'
import Products from "./Products/Products"
import { pageActions } from "../store/page-slice";
import { slideLeft } from "./Animation/Animation";


export default function Home() {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pageActions.pageLoad({currPage: location.pathname}))
    
    }, [dispatch])

    return (
        <motion.div className={styles.home}  initial='hidden' animate='show' exit='exit'>
            <Header />
            <Products />
        </motion.div>
    )
}
