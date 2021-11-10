import React from "react";

import Modal from '../UI/Modal';
import TaskHeader from "./TaskHeader";
import styles from './SideBar.module.css';
import RoadMapHeader from "./RoadMapHeader";

const SideBar = ()=>{
    const animation={
        hidden:{
            x: 400,
            opacity: 0.5
            
        },
        show:{
            x: 0,
            opacity: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.4,
              },
        },
        exit:{
            x: 400,
            opacity: 0.5,
            transition: {
                ease: "easeInOut",
                duration: 0.4,
              },
        }
    }
    return(
        <Modal 
            animation={animation}
            className={styles['side-bar']}>
                <TaskHeader />
                <RoadMapHeader />
            
        </Modal>
    );
}

export default SideBar;