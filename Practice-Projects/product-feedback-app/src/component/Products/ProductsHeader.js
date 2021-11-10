import React from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import SuggestionIcon from '../../Assets/suggestions/icon-suggestions.svg';
import FilterOptions from "./FilterOptions";
import Button from '../UI/Button';
import styles from './ProductsHeader.module.css';

const ProductsHeader = ()=>{
    const history=useHistory();
    const onAddFeedBackHandler = ()=>{
        history.push('/home/addfeedback')
    }
    const isMobile = useMediaQuery({maxWidth: 767});
    return(
        <div className={styles['products-header']}>
            {!isMobile && 
                <div>
                    <img src={SuggestionIcon} />
                    <span>Suggestions</span>
                </div>
            }
            <FilterOptions />
            <Button onClick={onAddFeedBackHandler} color='purple' >+ Add Feedback</Button>
        </div>
    );
    
}

export default ProductsHeader;