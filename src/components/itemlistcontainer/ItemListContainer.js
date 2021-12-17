import ItemList from "../itemlist/ItemList.js";
// Products Array -temp-
import {Products} from '../../misc/stock.js';
import { useEffect, useState } from "react";

const ItemListContainer = (props) => {

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
        }, 5000);
      });   
  
    useEffect(() => {
      getData(Products)
        .then((res) => setProductos(res))
        .catch((err) => console.log(err));
    }, []);
    



    return (
        <>
        <ItemList data={productos}/>
        <p>Showing all the {props.id} !</p>
        </>
    )
}

export default ItemListContainer