import React from "react";
import { Route, Switch, Redirect, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";



import { UserActions } from "./store/user-slice";

import Comment from './component/Products/Comments/Comment';
import styles from './App.css';
import AddFeedBack from "./component/Products/FeedBack/AddFeedBack";
import EditFeedBack from "./component/Products/FeedBack/EditFeedBack";
import Home from "./component/Home";
import GetStart from "./component/GetStart/GetStart";

const App = () => {

  const dispatch = useDispatch();
  dispatch(UserActions.loadUser());
  const user = useSelector(state => state.user.username);
  
  const location = useLocation();
  

  return(

    <div className='app'>
      <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.key}>
            <Route path='/' exact>
              {!user ? <Redirect to='/get-start' /> : <Redirect to='/home' />}
            </Route>
            <Route path='/get-start' exact>
              <GetStart />
            </Route>
            <Route path='/home' exact>
              {!user ? <Redirect to='/get-start' /> : <Home />}
            </Route>
            <Route path='/home/comment/:id' exact>
              {!user ? <Redirect to='/get-start' /> :  <Comment />}
            </Route>
            <Route path='/home/addfeedback' exact>
              {!user ? <Redirect to='/get-start' /> : <AddFeedBack />}
            </Route>
            <Route path='/home/comment/:id/edit'>
              {!user ? <Redirect to='/get-start'/> : <EditFeedBack />}
            </Route>
          </Switch>
      </AnimatePresence>
      
    </div>
  );
}

export default App;