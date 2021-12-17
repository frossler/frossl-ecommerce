import React from 'react'
import { Item } from '../item/Item'

const ItemList = (props) => {
    return (
        <div>
            {props.data.map(item => (
                <Item key={item.id} title={item.title} description={item.description} image={item.image} />
            ))}
        </div>
    )
}

export default ItemList