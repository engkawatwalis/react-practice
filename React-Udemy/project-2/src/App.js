import React, { useState, useEffect } from "react";

import Header from './component/Header/Header';
import Description from './component/Description/Description';
import Menu from "./component/Menu/Menu";
import styles from './App.module.css';
import Cart from "./component/Cart/Cart";

const App = ()=>{
  
  const [submitItems, setSubmitItems] = useState([])
  const [submitDate, setSubmitDate] = useState('')
  const onSubmitItemsHandler = (userSubmitItems) => {
    console.log(userSubmitItems)
    
    if (submitItems.some(item=> item.id === userSubmitItems.id)){
      setSubmitItems((prevItems)=>{
        for (const item of prevItems ){
          if (item.id === userSubmitItems.id){item.amount = +item.amount + +userSubmitItems.amount}
        }
        return prevItems;
      })
      
    }
    else {
      setSubmitItems((prevItems) =>{
      return [...prevItems, userSubmitItems];
    })}
    setSubmitDate(new Date);
  }

  const [totalOrder, setTotalOrder] = useState(0)
  useEffect(()=>{
    let sum=0;
    if (submitItems.length>0){
      let sum=0;
      for(const item of submitItems){
        sum += +item.amount;
      }
      setTotalOrder(sum)}
  },[submitItems, submitDate])

  const [cartOpen, setCartOpen] = useState(false);
  const onCartOpenHandler = () => {
    setCartOpen(true);
  }
  const onCartCloseHandler = () => {
    setCartOpen(false);
  }

  return (
    <React.Fragment>
      <Header className={styles.header} onCartOpen={onCartOpenHandler} totalOrder={totalOrder}/>
      <Description />
      <Menu onSubmitItems={onSubmitItemsHandler} />
      {cartOpen && <Cart orders={submitItems} onCloseCart={onCartCloseHandler} onSubmitItems={onSubmitItemsHandler}/> }
    </React.Fragment>
  );
}

export default App;