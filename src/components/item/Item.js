import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({image, name, price, id}) => {
    console.log(`id en Item: ${id}`)
    return (
        <>
            <img className='prod-img' src={`${image}`} alt="product" />
            <p className='prod-title'>Title: {name}</p>
            <p className='prod-price'>Price: $ {price}</p>
            <div className="link-cnt">
                <Link className='vermas-btn' key={id} to={`/item/${id}`} >See More</Link>
            </div>
        </>
    )
}

export default Item