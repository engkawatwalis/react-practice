import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {AnimatePresence} from 'framer-motion'

import iconHambergur from '../../Assets/icon-hamburger.svg'
import Card from '../UI/Card';
import styles from './BrandHeader.module.css'
import SideBar from "./SideBar";

const BrandHeader = (props) =>{

    const isMobile = useMediaQuery({maxWidth: 767});

    const [isSideBarOpen, setSidebarOpen] = useState(false);
    const onClickHandler = (event)=>{
        event.preventDefault();
        setSidebarOpen((prev)=>!prev);
    }
    return(
        <div className={styles['brand-header']}>
            <div>
                <h1>Feedback Board</h1>
                <p>Designed by Frontend Mentor <br/> Developed by Engkawat W.</p>
            </div>
            {isMobile &&
                <button onClick={onClickHandler}>
                    <img src={iconHambergur} />
                </button>}
            <AnimatePresence>
                {isSideBarOpen && isMobile &&
                                <SideBar /> } 
            </AnimatePresence>

              
        </div>
        

        
    );
}

export default BrandHeader;