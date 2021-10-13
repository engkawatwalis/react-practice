import React from "react";
import ReactDOM, { createPortal } from 'react-dom';

import Card from "./Card";
import styles from './Modal.module.css';

const BackDrop = (props) => {
    return (
        <div className={styles.backDrop} onClick={props.onClick}/>
    );
}

const ModalOverlay = (props) => {
    return (
        <Card className={`${styles.modalOverlay} ${props.className}`}>
            {props.children}
        </Card >
    );
}

const Modal = (props) => {
    return(
        <React.Fragment>
        {ReactDOM.createPortal(
            <BackDrop onClick={props.onClose} />, document.getElementById('backdrop-root')
        )}
        {ReactDOM,createPortal(
            <ModalOverlay className={props.className}>
                {props.children}
            </ModalOverlay>, document.getElementById('overlay-root')
        )}
    </React.Fragment>
    );
    
}
export default Modal;