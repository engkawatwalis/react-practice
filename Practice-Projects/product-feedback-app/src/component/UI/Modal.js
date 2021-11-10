import React from "react";
import ReactDOM, { createPortal } from 'react-dom';
import {motion, AnimatePresence} from 'framer-motion';

import Card from "./Card";
import styles from './Modal.module.css';

const BackDrop = (props) => {
    const animation={
        hidden:{
            opacity: 0,
            
        },
        show:{
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.4,
              },
        },
        exit:{
            opacity: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.4,
              },
        }
    }
    return (
        <motion.div 
            variants={animation}
            initial='hidden'
            animate='show'
            exit= 'exit'
            className={styles.backDrop} 
            onClick={props.onClick}/>
    );
}

const ModalOverlay = (props) => {
    return (
        <motion.div 
            variants={props.animation}
            initial='hidden'
            animate='show'
            exit= 'exit'
            className={`${styles.modalOverlay} ${props.className}`}>
            {props.children}
        </motion.div >
    );
}

const Modal = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
                <BackDrop onClick={props.onClose} />, document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay animation={props.animation} className={props.className}>
                    {props.children}
                </ModalOverlay>, document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
    
}
export default Modal;