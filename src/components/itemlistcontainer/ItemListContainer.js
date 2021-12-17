import ItemList from "../itemlist/ItemList.js";
// Products Array -temp-
import {Products} from '../../misc/stock.js';
import { useEffect, useState } from "react";

const ItemListContainer = (props) => {

    //
    console.log(props)
let [products, setProducts] = useState([])
    // Effect
useEffect (()=>{
    setTimeout(()=>{
        setProducts(Products)
    }, 2500)
}) 
    console.log(products)



    return (
        <>
        <ItemList data={Products}/>
        <p>Showing all the {props.id} !</p>
        </>
    )
}

export default ItemListContainer