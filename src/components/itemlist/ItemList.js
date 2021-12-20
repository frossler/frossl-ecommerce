import React from 'react'
import { Item } from '../item/Item'
import { Container } from 'react-bootstrap'

const ItemList = (props) => {
    return (
        <Container>
            {props.data.length ? props.data.map((item) => (
	            <Item key={item.id} title={item.title} description={item.description} image={item.image} /> )) 
                : <i class="fas fa-spinner fa-pulse"></i>}
        </Container>
    )
}

export default ItemList