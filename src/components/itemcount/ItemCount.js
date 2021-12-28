import React from "react";
import { useState } from "react";


const ItemCount = ({ stock, initial, onAdd}) => {
  let [counter, setCounter] = useState(initial);
  function substractCounter() {
      console.log("substract");
      if (counter > 1) {
          setCounter(counter - 1);
      }
  }
  function addCounter() {
      console.log("add")
      if (counter < stock) {
          setCounter(counter + 1); 
      }
  }
  return (
      <>
          <div className="stock-setter-cnt">
              <button onClick={substractCounter}>-</button>
              <p className="counter">{counter}</p>
              <button onClick={addCounter} >+</button>
          </div>
          <button className="add-to-cart-btn" onClick={() => {onAdd(counter, setCounter)}}>Add to Cart</button>
      </>
  )
}

export default ItemCount
