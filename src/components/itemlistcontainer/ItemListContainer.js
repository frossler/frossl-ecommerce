import React from "react";
// import { useState, useEffect } from "react"
import ItemCount from "../itemcount/ItemCount";

const ItemListContainer = (props) => {

    //
    console.log(props)
    // Effect delays and run after Component Render

    // useEffect (()=>{
    //     console.log("Intervalo Ping 1000")
    //     // setTimeout(()=>[])
    //     // Se setea un indicador
    //     const i = setInterval(()=>{
    //         console.log("Ping foo")
    //     },1000)
    
    //     return () =>{
    //         console.log("Cleanup foo")
    //         clearInterval(i) //pasar el indicador
    //     }
    // })


    return (
        <>
        <p>Showing all the {props.id} !</p>
        <ItemCount count="3"/>
        </>
    )
}

export default ItemListContainer