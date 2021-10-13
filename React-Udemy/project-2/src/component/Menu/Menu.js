import React, { useState } from "react";

import MenuList from "./MenuList";
import Card from "../UI/Card";
import styles from './Menu.module.css';

const Menu = (props)=>{

    const [items, setItems] = useState([
        {   id: 1,
            title: 'Sushi',
            description: 'Finest fish and veggie',
            price: '22.99'
        },
        {   id: 2,
            title: 'Schenitzel',
            description: 'A German specialty!',
            price: '16.50'
        },
        {   id: 3,
            title: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: '12.99'
        },
        {   id: 4,
            title: 'Green Bowl',
            description: 'Healthy and green',
            price: '18.99'
        },
    ])

    return(
        <Card className={styles.menu}>
            <MenuList listType='menu' displayItems={items} needAction={true} onSubmitItems={props.onSubmitItems}/>
        </Card>
        
    );
}
export default Menu;