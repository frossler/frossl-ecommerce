// import React, { useEffect } from "react";
import ItemList from "../itemlist/ItemList.js";
import { useState } from "react";
// Products Array -temp-
import {Products} from '../../misc/stock.js';

// import { useState, useEffect } from "react"



const ItemListContainer = (props) => {

    //
    console.log(props)
    
    let [list, setList] = useState[[]]
    // Effect
    useEffect (()=>{
        setTimeout(()=>{

        },3000)
    },[])



    return (
        <>
        <p>Showing all the {props.id} !</p>
        <ItemList data={Products}/>
        </>
    )
}

export default ItemListContainer