import React from 'react'
import { Item } from '../item/Item'

const ItemList = (props) => {
    return (
        <div>
            {props.data.length ? props.data.map((item) => (
	            <Item key={item.id} title={item.title} description={item.description} image={item.image} /> )) 
                : "Cargando Items ..."}
        </div>
    )
}

export default ItemList