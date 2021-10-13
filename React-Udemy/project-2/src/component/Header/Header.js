import React from "react";


import CartBtn from '../Cart/CartBtn'
import HeroImg from '../../images/Hero-img.jpg';
import styles from './Header.module.css';

const Header = (props)=>{

    return(
        <React.Fragment>
            <header>
                <h1 className={styles.brandLogo}>ReactMeals</h1>
                <CartBtn totalOrder={props.totalOrder} onClick={props.onCartOpen}/>
            </header>
            <img className={styles.heroImg} src={HeroImg} alt="Food" />
        </React.Fragment>
        
    );
}

export default Header;