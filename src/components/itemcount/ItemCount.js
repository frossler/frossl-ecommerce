import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import toast, { Toaster } from 'react-hot-toast';

const ItemCount = (props) => {

    // Stock management 
    const stock = props.count
    const [counter, setCounter] = useState(1)
    const add = () => { 
        if (counter < stock) { setCounter(counter+1) } else {toast.error('No More Stock for Adding...', {duration: 2000})}
      }

    const rem = () => {
        if (counter > 1) { setCounter(counter - 1) } 
        else {
          toast.error('Should be at least 1 to Add...', {duration: 2000})
        }
      }

    
    // onAdd to Cart
    const onAdd = () => {
      return toast.success(counter + 'Products Added to cart.' , {duration: 2000})
      
    }   

    return(
        <>
            <Button variant="outline-info" onClick={rem}> - </Button>{' '}
            <Button variant="outline-primary" onClick={onAdd}> onAdd: {counter} </Button>{' '}
            <Button variant="outline-info" onClick={add}> + </Button>{''}
            <Toaster/>
        </>

    )
}

export default ItemCount
