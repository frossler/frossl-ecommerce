import React from 'react'
import CartItem from '../cartitem/CartItem'
import { useContexto } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import { StyledCartItemContainer } from './CartStyled'
// import { addDoc, collection, serverTimestamp } from "firebase/firestore"
// import { db } from "../../firebase";

const CartItemContainer = () => {
    const { cart, clear, total_price } = useContexto();
    console.log(cart)

    // const endPurchase = () => {
    //     console.log("Saving purchase to DB");


    //     const ventasCollection = collection(db, "sales")
    //     addDoc(ventasCollection, {
    //         buyer : {
    //             name : "Name",
    //             lasName : "Last Name",
    //             email : "mail@mail.com"
    //         },
    //         items : cart,
    //         date : serverTimestamp(),
    //         total : 100
    //     }).then(resultado => {
    //         console.log(resultado);
    //         clear();
    //     }).catch(err => console.log(err));
    // }

    
    return (
        <StyledCartItemContainer>
            {cart.length > 0 ? (
                <>
                    <ul>
                        {cart.map(item => (
                            <CartItem key={item.id} name={item.title} price={item.price} image={item.image} id={item.id} quantity={item.quantity} />
                        ))}
                    </ul>
                    <div className="bottom-div">
                        <h3 className='total-price'>Total: ${total_price.toFixed(2)}</h3>
                        {/* <button className='btn-empty-cart' onClick={() => { endPurchase() }}>Deliver Order</button> */}
                        <button className='btn-empty-cart' onClick={() => { clear() }}>Clear Cart</button>
                    </div>
                </>
            ) : (
                <>
                <div className='empty-cart-container'>
                    <h1 className='cart-title'>No products added. </h1>
                    <Link to='/products' className='shop-link'>See Catalogue</Link>
                </div>
                </>
            )
            }</StyledCartItemContainer>
    )
}

export default CartItemContainer;