import React from "react";
// import { useState, useEffect } from "react"
import ItemCount from "../itemcount/ItemCount"
import toast, { Toaster } from 'react-hot-toast'

const ItemListContainer = (props) => {

    //
    console.log(props)

    //onAdd to Cart
    function onAdd(){
      return (
          toast.success('Products Added to cart.' , {duration: 2000})
          
      )
    }   

    return (
        <>
        <Toaster/>
        <p>Showing all the {props.id} !</p>
        <ItemCount count="3" onAdd={onAdd} initial="1"/>
        </>
    )
}

export default ItemListContainer