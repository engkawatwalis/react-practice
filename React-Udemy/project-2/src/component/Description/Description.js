import React from "react";

import Card from "../UI/Card";
import styles from './Description.module.css';

const Description = () => {

    return(
        <Card className={styles.description}>
            <h1>Delicious Food, Delivered To You</h1>
            <p>Choose Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Neque vitae quisquam placeat praesentium quibusdam et. Impedit, 
            </p>
        </Card>
    );
}

export default Description;