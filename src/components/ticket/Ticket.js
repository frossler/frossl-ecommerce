import React from 'react'
import { StyledTicket } from './TicketStyled'
import { Link } from 'react-router-dom'


const Ticket = ({ticket_price, ticket_id}) => {
    return (
        <StyledTicket>
            
                <h1>Purchase Successful!</h1>
                <br />
                <h2>Order ID: {ticket_id}</h2>
                <br />
                <h3>You will recibe order details and following in your mailbox.</h3>
                <br />
                <h1>Total: ${ticket_price}</h1>
                <br />
                <br />
            
            <Link to='/products' className='shop-link'>See Catalogue</Link>
        </StyledTicket>
    )
}

export default Ticket