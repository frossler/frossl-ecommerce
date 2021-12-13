import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = (props) => {

    // Stock management logic (1.0)
    const stock = props.stock
    const [counter, setCounter] = useState(1)
    const add = () => { 
        if (counter < stock) {setCounter(counter+1)} else {alert("Out of Stock for adding")}
      }
    const rem = () => {
        if (counter > 1) {
          setCounter(counter - 1);
        } else {
          alert("Minimum per order: 1");
        }
      };
    

    return(
        <>
            <Button variant="outline-info" onClick={rem}> - </Button>{' '}
            <Button variant="outline-primary"> onAdd: {counter} </Button>{' '}
            <Button variant="outline-info" onClick={add}> + </Button>{''}
        </>

    )
}

export default ItemCount
