import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import toast, { Toaster } from 'react-hot-toast';

const ItemCount = ({count,initial,onAdd}) => {

    // Stock management 
    const stock = count
    const [counter, setCounter] = useState(initial)
    const add = () => { 
        if (counter < stock) { setCounter(counter+1) } 
        else {
          toast.error('No More Stock for Adding...', {duration: 2000})
        }
      }

    const rem = () => {
        if (counter > 1) { setCounter(counter - 1) } 
        else { 
          toast.error('Should be at least 1 to Add...', {duration: 2000})
        }
      }

      const addToCart = () => {
        console.log("Aca hago Onadd")
        onAdd(counter)
      }
      
    return(
        <>
        <Toaster/>
            <Button variant="outline-info" onClick={rem}> - </Button>{''}
            <Button variant="outline-primary" onClick={addToCart}> onAdd=Add to Cart Button: {counter} </Button>{' '}
            <Button variant="outline-info" onClick={add}> + </Button>{''}
            
        </>

    )
}

export default ItemCount
