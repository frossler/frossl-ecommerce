import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = (props) => {

    // Stock management 
    const stock = props.count
    const [counter, setCounter] = useState(1)
    const add = () => { 
        if (counter < stock) {setCounter(counter+1)} else {alert("Out of Stock for adding")}
      }
    const rem = () => {
        if (counter > 1) {
          setCounter(counter - 1);
        } else {
          alert("Should be at least 1 to Add...");
        }
      };

    
    // onAdd to Cart
    const onAdd = () => {
      return alert( counter + " Product/s Added to Cart")
    }   

    return(
        <>
            <Button variant="outline-info" onClick={rem}> - </Button>{' '}
            <Button variant="outline-primary" onClick={onAdd}> onAdd: {counter} </Button>{' '}
            <Button variant="outline-info" onClick={add}> + </Button>{''}
        </>

    )
}

export default ItemCount
