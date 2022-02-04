import React from 'react'
import ItemDetail from '../itemdetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { collection, getDoc, doc } from 'firebase/firestore'
import toast from 'react-hot-toast';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({}); 
    
    useEffect(() => {
        const products_collection = collection(db, "products");
        const refDoc = doc(products_collection, id);
        getDoc(refDoc)
            .then(prod => {setProduct(prod.data())})
            .catch(err => {
                console.log(err)
                toast.error('Something went wrong :(')
            })
    }, [id])

    return (
        <>
            {product === undefined ? (
                <h1>Loading Product Details...</h1>
            ) : (
                <div>
                    <ItemDetail desc={product.description} title={product.title} price={product.price} image={product.image} id={id} />
                </div>
            )}
        </>
    )
}

export default ItemDetailContainer;