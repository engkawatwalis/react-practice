import React from "react";
import { useHistory } from "react-router-dom";

import leftArrow from '../../Assets/icon-back.svg';
import Button from './Button';


const GoBackButton = ()=>{
    
    const history = useHistory();
    const onGoBackHandler = () => {
        history.goBack();
    }
    return(
        
        <Button 
            onClick={onGoBackHandler} 
            color='neutral'>
                <img src={leftArrow}></img> Go Back
        </Button>
            
    );
}

export default GoBackButton;