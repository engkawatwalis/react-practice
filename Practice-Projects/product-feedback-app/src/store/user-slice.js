import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState:{
        image: '',
        name: '',
        username: ''
    },
    reducers:{
        setUser(state, action){
            const {firstName, lastName, username, avatar} = action.payload;
            state.image = `https://ui-avatars.com/api/?name=${firstName}+${lastName}&color=4661E6&&background=F7F8FD`;
            state.name = `${firstName} ${lastName}`;
            state.username = username;

            localStorage.setItem('userInfo', JSON.stringify({
                name: state.name,
                username: state.username,
                image: state.image
            }));   
        },
        loadUser(state, action){
            
            const loadedUser = JSON.parse(localStorage.getItem('userInfo'));
            if (!loadedUser) return;
            state.image = loadedUser.image
            state.name = loadedUser.name;
            state.username = loadedUser.username;
        }
    }
})

export const UserActions = userSlice.actions;

export default userSlice;