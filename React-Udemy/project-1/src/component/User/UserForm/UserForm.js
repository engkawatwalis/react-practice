import React, { useState } from "react";

import UserInput from "../UserInput/UserInput";
import styles from './UserForm.module.css';

const UserForm = props => {

    const [usernameInput, setUsernameInput] = useState('');
    const [ageInput, setAgeInput] = useState('');
    const [input, setInput] = useState({
        username: '',
        age: ''
    })

    const formSubmitHandler = e =>{
        e.preventDefault();
        console.log(usernameInput, ageInput)
        props.onInputSubmit({usernameInput, ageInput});
        setUsernameInput('');
        setAgeInput('');

    }

    const RecieveUserInputhandler = input => {
        input.classList.contains('username') ? setUsernameInput(input.value) : setAgeInput(input.value);
    } 

    return(
        <form onSubmit={formSubmitHandler}>
            <UserInput 
            onRecieveUserInput={RecieveUserInputhandler}
            label={'Username'}
            id={'username'}
            value={usernameInput}
            />

            <UserInput 
            onRecieveUserInput={RecieveUserInputhandler}
            label={'Age'}
            id={'age'}
            value={ageInput}
            />
        
            <button type="submit">Submit</button>
        </form>
    );
}

export default UserForm;