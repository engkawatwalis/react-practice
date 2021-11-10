import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";

import Card from "../UI/Card";
import Tag from "../UI/Tag";
import { ProductActions } from "../../store/product-slice";
import styles from './TaskHeader.module.css'



const TaskHeader = () =>{

    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const sort = queryParams.get('sort');

    const [tasks, setTasks] = useState([
        'All',
        'UI',
        'UX',
        'Enhancement',
        'Bug',
        'Feature'
    ])
    const [selectedTask, setSelectedTask] = useState(category || 'All')
    
    const searchParam = (submitFilter)=>{
        let searchParam = `?category=${submitFilter}`
        if (!!sort){
            searchParam = `?sort=${sort}&category=${submitFilter}`
        }

        return searchParam;
    }
    const clickHandler = (submitFilter)=>{
        
        history.push({
            pathname: location.pathname,
            search: searchParam(submitFilter)
        })

        setSelectedTask(submitFilter);
    }

    useEffect(() => {
        dispatch(ProductActions.filterProducts({
            filter: selectedTask
        }))

    }, [selectedTask])
    return(
        <Card className={styles['task-header']}>
            {tasks.map((task, i) =>{
                return (<Tag 
                            onClick={clickHandler}
                            key={i} 
                            active={task===selectedTask ? true : false}>
                                {task}
                        </Tag>);
            })}
        </Card>
    );
}

export default TaskHeader;