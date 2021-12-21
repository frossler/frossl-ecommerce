import React from "react";
import { useEffect, useState } from "react";
import {Products} from '../../misc/stock.js';
import ItemDetail from "../itemdetail/ItemDetail.js";

const ItemDetailContainer = (props) => {

    //
    console.log(props)
    // Promise
    const [productos, setProductos] = useState([]);
  
    const getData = (data) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data) {
            resolve(data);
          } else {
            reject("Items Load Failure");
          }
        }, 2000);
      });   
  
    useEffect(() => {
      getData(Products)
        .then((res) => setProductos(res))
        .catch((err) => console.log(err));
    }, []);
    



    return (
        <>
        <ItemDetail data={productos}/>
        <p>Showing all the {props.id} !</p>
        </>
    )
}

export default ItemDetailContainer