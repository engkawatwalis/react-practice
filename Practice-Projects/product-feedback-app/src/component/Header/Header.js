import React from "react";
import { useMediaQuery } from "react-responsive";

import BrandHeader from "./BrandHeader";
import RoadMapHeader from "./RoadMapHeader";
import TaskHeader from "./TaskHeader";
import styles from './Header.module.css'


const Header = () =>{

    const isMobile = useMediaQuery({maxWidth: 767})
    return(
        <header className={styles.header}>
            <BrandHeader />
            {!isMobile && <TaskHeader />}
            {!isMobile && <RoadMapHeader/>}
        </header>
    );
}

export default Header;