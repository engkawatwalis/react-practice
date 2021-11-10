import React, { useState } from "react";
import Card from "../UI/Card";

import styles from './RoadMapHeader.module.css'


const RoadMapHeader = () =>{


    return(
        <Card className={styles['roadmap-header']}>
            <div>
                <h3>Roadmap</h3> 
                <a>View</a>
            </div>
            <ul>
                <li>Planned <span>2</span></li>
                <li>In-Progess <span>3</span></li>
                <li>Live <span>1</span></li>
            </ul>
        </Card>
    );
}

export default RoadMapHeader;