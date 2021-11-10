import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { ProductActions } from "../../store/product-slice";
import DropDown from '../UI/DropDown';
import DropDownIcon from '../../Assets/icon-dropdown.svg';
import styles from './FilterOptions.module.css';

const FilterOptions = ()=>{
    
    const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const sortMethod = queryParams.get('sort');
    const category = queryParams.get('category')
    const product = useSelector(state => state.product.products)
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption] = useState(sortMethod)
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const onClickHandler = ()=>{
        setIsDropDownOpen(prev => !prev);
    }

    const [filterOptions, setFilterOptions] = useState([
        'Most Upvoted',
        'Least Upvoted',
        'Most Comments',
        'Least Comments'
    ])

    const searchParam = (submitOption)=>{
        let searchParam = `?sort=${submitOption}`
        if (!!category){
            searchParam = `?sort=${submitOption}&category=${category}`
        }

        return searchParam;
    }

    const onSubmitHandler = (submitOption) => {
        console.log(history.location)
        history.push({
            pathname: location.pathname,
            search: searchParam(submitOption)
        })
        setSelectedOption(submitOption);
        dispatch( ProductActions.sortProducts({
            sortMethod: submitOption
        })
        );
    }

    useEffect(() => {
        
        if (!!product && sortMethod){
            dispatch( ProductActions.sortProducts({
                        sortMethod: selectedOption
                    })
                    );
        }
        
        
    })

    return(
        <div className={styles['filter-options']}>
                <span>Sort by : </span>
                <button onClick={onClickHandler}>{selectedOption} <img src={DropDownIcon} /></button>
                {isDropDownOpen && <DropDown 
                                        onSubmit={onSubmitHandler} 
                                        options={filterOptions} 
                                        selectedOption={selectedOption}/>}
        </div>
    );
}

export default FilterOptions;