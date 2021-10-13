import React from "react";

import styles from './UserItem.module.css'

const UserItem = props => {

    console.log(props)
    return(
        <li className={styles.userItem}>
            <p>{`username: ${props.displayInfo.username} (age ${props.displayInfo.age})`}</p>
        </li>
    );
}
export default UserItem;
