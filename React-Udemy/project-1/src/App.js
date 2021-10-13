import React, {useState} from 'react';

import UserForm from './component/User/UserForm/UserForm';
import UserList from './component/User/UserList/UserList';
import './App.css';

const App = ()=>{

    const [userInfo, setUserInfo] = useState([]);
    
    const inputSubmitHandler = (input) => {
        setUserInfo(prevInfo => {
            const updatedInfo = [...prevInfo];
            updatedInfo.unshift({
                username: input.usernameInput,
                age: input.ageInput,
                id: Math.random().toString()
            })
            console.log(updatedInfo)
            return updatedInfo;
        })
    }
    return (
        <div className="app">
            <section id="user-form">
                <UserForm onInputSubmit={inputSubmitHandler}/>
            </section>
            <section id="user-list">
                <UserList info={userInfo}/>
            </section>
        </div>
    );
}

export default App;