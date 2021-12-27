import React from 'react'
import { Item } from '../item/Item'

const ItemList = ({items}) => {
    console.log(items);
    if (items.length > 0) {
        return (
            <>
                {items.map(item => (
                    <Item key={item.id} name={item.title} price={item.price} image={item.image} id={item.id} />
                ))}
            </>
        )
    } else {
        return (
            <>
                <h1>LOADING...</h1>
            </>
        )
    }
    
}

export default ItemList;