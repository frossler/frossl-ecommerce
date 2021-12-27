import React from "react";
import { NavLink } from "react-bootstrap";

const CartWidget = () => {
    return (
        <>  
            <NavLink to="/shoppingcart">
            <i class="fas fa-shopping-cart"></i>
            </NavLink>
        </>
    )
}

export default CartWidget