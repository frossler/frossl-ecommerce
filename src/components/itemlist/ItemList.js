import React from 'react'
import Item from '../item/Item'
import { StyledItemList } from './ItemListStyled'

const ItemList = ({items}) => {
    if (items.length > 0) {
        return (
            <StyledItemList>
                {items.map(item => (
                    <Item key={item.id} name={item.title} price={item.price} image={item.image} id={item.id} />
                ))}
            </StyledItemList>
        )
    } else {
        return (
            <StyledItemList>
                <h1>LOADING...</h1>
            </StyledItemList>
        )
    }
    
}

export default ItemList;