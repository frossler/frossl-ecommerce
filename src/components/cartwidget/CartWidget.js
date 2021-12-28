import React from "react";
import { NavLink } from "react-router-dom";

// Event listener Fx => props on button as example 
const foo = () => {
    console.log("foo");
}

const CartWidget = () => {

    return (
        <>
            <NavLink onClick={foo} to="/cart" id="cart-navlink">
                <p>0</p>
                <i class="fas fa-shopping-cart"></i>
            </NavLink>
        </>
    
    )
};

export default CartWidget