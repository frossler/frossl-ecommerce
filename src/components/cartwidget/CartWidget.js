import { NavLink } from 'react-router-dom'
import { useContexto } from "../../context/cartContext"
import { CartDiv } from './CartWidgetStyled'

const CartWidget = () => {
    const { total } = useContexto()
    return (
    <>
        <CartDiv className={total > 0 ? "show" : "hidden"}>
            <NavLink to="/cart" id="cart-navlink" >
                <p>{total ? total : 0}</p>
                <i class="fas fa-shopping-cart"></i>
            </NavLink>
        </CartDiv>
    </>
    )
}

export default CartWidget