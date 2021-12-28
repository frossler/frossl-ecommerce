import React from "react"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../itemdetail/ItemDetail.js"

const ItemDetailContainer = () => {
  
  const { id } = useParams();
  console.log(`productID in ItemDetailContainer: ${id}`)

  const [product, setProduct] = useState({}); 
  
  useEffect(() => {
      const loadProduct = async () => {
          try {
               const resp = await fetch(`https://fakestoreapi.com/products/${id}`); 
               const info = await resp.json();
               return info;
          } catch (error) {
              console.log(error);
          }
          
      }
      const productPromise = loadProduct()
          productPromise.then(response => {
              setProduct(response);
              console.log(product)
          })
  }, [])
  if (product === undefined) {
      return (
          <div>
              <h1>Loading Item Details...</h1>
          </div>
      )
  } else {
      return (
          <div>
              <ItemDetail desc={product.description} title={product.title} price={product.price} image={product.image} />
          </div>
      )
  }
}

export default ItemDetailContainer;