import React from "react";

import UserItem from '../UserItem/UserItem'
import styles from './UserList.module.css';

const UserList = props =>{

console.log(props.info)
    
if(props.info.length === 0) return (
    <h3 className={styles['user-list']}>No user info, please enter username and age above.</h3>
);
return(
        <ul className={styles['user-list']}>
            {props.info.map(info => <UserItem displayInfo={info} key={info.id}/>
            )}
        </ul>
    );
    
}

export default UserList;