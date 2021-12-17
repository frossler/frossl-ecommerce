// import React, { useEffect } from "react";
import ItemList from "../itemlist/ItemList.js";

// Products Array -temp-
import {Products} from '../../misc/stock.js';

// import { useState, useEffect } from "react"



const ItemListContainer = (props) => {

    //
    console.log(props)

    // Effect
    // useEffect(()=>{

    // },[])



    return (
        <>
        <ItemList data={Products}/>
        <p>Showing all the {props.id} !</p>
        </>
    )
}

export default ItemListContainer