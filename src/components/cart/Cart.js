import React from 'react'
import CartItem from '../cartitem/CartItem'
import { useContexto } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import { StyledCartItemContainer } from './CartStyled'
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from '../../firebase/firebase'
import { useState, useEffect } from 'react'
import Ticket from '../ticket/Ticket'
import CartForm from '../cartform/CartForm'
import { toast } from 'react-hot-toast'

const CartItemContainer = () => {
    const { cart, clear, total_price } = useContexto();
    const [ticket, setTicket] = useState([]);
    const [ticket_price, setTicketPrice] = useState();
    console.log(cart)

    const endPurchase = (first_name, last_name, email) => {
        console.log("Saving purchase to DB");
        
        setTicketPrice(total_price)
        const salesCollection = collection(db, "sales")
        const docRef = addDoc(salesCollection, {
            buyer : {
                name : first_name,
                lasName : last_name,
                email : email
            },
            items : cart,
            date : serverTimestamp(),
            total : total_price
        })
        docRef
        .then((docRef)=> {
            toast.success('Purchase saved successfully!')
            setTicket(docRef)
            clear()
        }).catch((error) => {
            console.log(error)
            toast.error('Oops, something went wrong...')
        })
    }

    useEffect(()=>{
    },[ticket])

    if (ticket.length !== 0) {
        return (
            <StyledCartItemContainer>
                <Ticket ticket_price={ticket_price} ticket_id={ticket.id}/>
            </StyledCartItemContainer>
        )
    }
    
    return (
        <StyledCartItemContainer>
            {cart.length > 0 ? (
                <>
                    <div className='main-row'>
                        <ul>
                            {cart.map(item => (
                                <CartItem key={item.id} name={item.title} price={item.price} image={item.image} id={item.id} quantity={item.quantity} />
                            ))}
                        </ul>

                        <CartForm endPurchase={endPurchase} />
                    </div>
                    
                    <div className="bottom-div">
                        <h3 className='total-price'>Total: ${total_price.toFixed(2)}</h3>
                        <button className='btn-empty-cart' onClick={()=>{clear()}}>Clear Cart</button>
                    </div>
                </>
            ) : (
                <>
                <div className='empty-cart-container'>
                    <h1 className='cart-title'>Cart is empty</h1>
                    <Link to='/products' className='shop-link'>See Catalogue</Link>
                </div>
                </>
            )
            }</StyledCartItemContainer>
    )
}


export default CartItemContainer