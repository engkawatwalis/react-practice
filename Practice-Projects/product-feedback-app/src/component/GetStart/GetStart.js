import React from "react";
import { Formik, useFormik } from "formik";
import * as yup from 'yup';

import Card from "../UI/Card";
import styles from './GetStart.module.css';
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { UserActions } from "../../store/user-slice";
import { useHistory } from "react-router";


const validationSchema = yup.object({
    firstName: yup.string()
                    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
                    .max(20)
                    .required('Please enter your firstname'),
    lastName: yup.string()
                    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
                    .max(20)
                    .required('Please enter your lastname'),
    username: yup.string().required('Please enter username'),
    avatar: yup.string()
})
export default function GetStart() {

    const history = useHistory();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            username: '',
            avatar: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {

            dispatch(UserActions.setUser({
                firstName: values.firstName.charAt(0).toUpperCase() + values.firstName.trim().slice(1).toLowerCase(),
                lastName: values.lastName.charAt(0).toUpperCase() + values.lastName.trim().slice(1).toLowerCase(),
                username: values.username.toLowerCase(),
                avatar: values.avatar

            }));
            formik.resetForm();
            history.push('/home')
        }
    });

    return (
        <div className={styles['get-start']}>
            <Card className={styles['get-start-card']}>
                <div className={styles.header}>
                    <h1>Feedback Board</h1>
                    <p>Designed by Frontend Mentor <br/> Developed by Engkawat W.</p>
                </div>
                <div className={styles.body}>
                    <h2>Get Started</h2>
                    <p>Please note that this authentication is only for demo purpose.</p>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={styles['form-control']}>
                            <label htmlFor="firstName">First name:</label>
                            <input 
                                type='text'
                                id='firstName'
                                name='firstName'
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            <small>{formik.touched.firstName && formik.errors.firstName || ''}</small>
                        </div>
                        <div className={styles['form-control']}>
                            <label htmlFor="lastName">Last name:</label>
                            <input 
                                type='text'
                                id='lastName'
                                name='lastName'
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            <small>{formik.touched.lastName && formik.errors.lastName || ''}</small>
                        </div>
                        <div className={styles['form-control']}>
                            <label htmlFor="username">Username:</label>
                            <input 
                                type='text'
                                id='username'
                                name='username'
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                            <small>{formik.touched.username && formik.errors.username || ''}</small>
                        </div>
                        <Button type='submit' color='purple'>Let's get started!</Button>
                    </form>
                </div>
            </Card>
        </div>
    )
}
