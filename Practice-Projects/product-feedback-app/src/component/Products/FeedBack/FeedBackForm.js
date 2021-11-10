import React, {useState} from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import * as Yup from 'yup';

import TextBox from "../../UI/TextBox";
import DropDown from "../../UI/DropDown";
import Button from "../../UI/Button";
import Avatar from "../../UI/Avatar";
import Card from "../../UI/Card";
import plusIcon from '../../../Assets/shared/icon-new-feedback.svg'
import editIcon from '../../../Assets/shared/icon-edit-feedback.svg'
import styles from './FeedBackForm.module.css'


const postValidation = Yup.object({
    title: Yup.string().required(''),
    category: Yup.string().required(''),
    content: Yup.string().required('')
})

export default function FeedBackForm (props){

    const {product, type} = props;
    const history = useHistory();
    const [availableOption, setAvailableOption] = useState([
        'UI', 'UX', 'Enhancement', 'Bug', 'Feature'])
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)
    const dropdownContol = ()=>{
        setIsDropDownOpen(prev => !prev);
    }
    const handleGoBack = ()=>{
        history.goBack();
    }
    
    const formik = useFormik({
        initialValues:{
            title: type === 'new' ? '' : product.title,
            category: type === 'new' ? availableOption[0]: `${product.category.charAt(0).toUpperCase()}${product.category.slice(1)}`,
            content: type === 'new' ? '' : product.description,
        },
        validationSchema: postValidation,
        onSubmit: values => {
            props.onSubmit(values)
            formik.resetForm();
        }
    })

    const onDropDownSubmit = (selectedOption)=>{
        formik.setFieldValue('category', selectedOption);
        setIsDropDownOpen(prev => !prev)
    }

    const icon = type === 'new' ? plusIcon : editIcon;
    const heading = type === 'new' ? 'Create New FeedBack' : `Editing '${product.title}'`;
    const save = type === 'new' ? 'Add Feedback' : 'Save Change';
    return(
        <Card className={styles['feedback-card']}>
                <img src={icon}></img>
                <form onSubmit={formik.handleSubmit}>
                    <h2>{heading}</h2>
                    <div className={styles['form-control']}>
                        <label htmlFor="title">Feedback Title</label>
                        <small>Add a short, descriptive, headline</small>
                        <TextBox 
                            name='title'
                            id='title'
                            col='50'
                            rows='2' 
                            maxLength='250'
                            value={formik.values.title}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor="category">Feedback Title</label>
                        <small>Choose a category for your feedback</small>
                        <button className={styles['option-box']} type='button' onClick={dropdownContol}>
                            <p>{formik.values.category}</p>   
                        </button>
                        {isDropDownOpen && 
                            <DropDown 
                                className={styles['dropdown']}
                                options={availableOption}
                                onSubmit={onDropDownSubmit}
                                selectedOption={formik.values.category} 
                            />
                        }
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor="content">Feedback Detail</label>
                        <small>Include any specific comments on what should be improved, added, etc.</small>
                        <TextBox 
                            name='content'
                            id='content'
                            col='50'
                            rows='5' 
                            maxLength='250'
                            value={formik.values.content}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <Button 
                        type='submit' 
                        color='purple'>
                        {save}
                    </Button>
                    <Button 
                        onClick={handleGoBack}
                        type='button' 
                        color='navy'>
                        Cancel
                    </Button>
                    {type === 'edit' && 
                        <Button 
                            onClick={props.onDelete}
                            type='button' 
                            color='red'>
                            Delete
                        </Button>}
                </form>
            </Card>
    );
}