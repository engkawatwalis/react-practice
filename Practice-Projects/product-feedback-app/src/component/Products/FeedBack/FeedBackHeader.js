import React from "react";

import Button from '../../UI/Button';
import GoBackButton from "../../UI/GoBackButton";
import styles from './FeedBackHeader.module.css';

const FeedBackHeader = ()=>{
    
    return(
        <div className={styles['feedback-header']}>
            <GoBackButton />
        </div>
    );
}

export default FeedBackHeader;